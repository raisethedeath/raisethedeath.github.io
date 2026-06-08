当你将 **DeepSeek 的 API** 接入 Claude Code 后，本质上是用 Claude Code 作为**交互框架与工具协调层**，而 DeepSeek 模型则成为**核心推理引擎**。两者通过 **API 协议转换** 进行协作，整体流程可以概括为以下几步：

---

## 1. 架构角色

- **Claude Code (客户端)**  
  负责维护项目环境、解析用户指令、管理对话历史、提供**工具调用定义**（Bash 命令、文件操作、搜索等）、实施权限控制、渲染交互界面。

- **DeepSeek API (后端模型)**  
  接收来自 Claude Code 的提示词和工具定义，返回**文本响应**或**工具调用请求**。DeepSeek 的 API 兼容 OpenAI 的接口格式，因此可以被适配成 Claude Code 的模型后端。

- **适配层/代理（可选但关键）**  
  由于 Claude Code 原生设计为与 Anthropic 的 API 通信，接入 DeepSeek 时需要做**协议转换**。常用方式：
  - 使用 **LiteLLM** 或 **one-api** 作为代理，将 Claude Code 发出的 Anthropic 格式请求转换为 OpenAI 格式，再转发给 DeepSeek，并将响应逆向转换。
  - 或者利用社区修改版/分支，直接让 Claude Code 调用兼容 OpenAI 的端点（需注意工具调用格式的差异）。

---

## 2. 协作工作流（一次典型的用户交互）

假设你输入：“运行 `pytest` 并根据错误修改代码”。

### Step 1：Claude Code 构建请求体
Claude Code 将以下内容组装为一次 API 调用：
- **系统提示**（包含项目规则、CLAUDE.md 指令、工具权限等）
- **已定义的可用工具列表**（函数声明，如 `run_shell_command`、`read_file`、`write_file` 等）
- **对话历史**（包括之前的用户消息、模型响应、工具调用结果）
- **当前用户消息**：“运行 `pytest` 并根据错误修改代码”

### Step 2：请求发送给 DeepSeek（经适配层）
- 如果使用 LiteLLM 代理，Claude Code 会向 `http://localhost:4000` 发送 Anthropic 格式的请求。
- 代理将其转换为 OpenAI Chat Completions 格式（包括工具/函数定义），转发给 `https://api.deepseek.com/v1/chat/completions`。

### Step 3：DeepSeek 推理并响应
DeepSeek 模型分析上下文后，可能决定调用工具。它返回一个 OpenAI 风格的**函数调用响应**，例如：
```json
{
  "role": "assistant",
  "content": null,
  "tool_calls": [
    {
      "id": "call_abc123",
      "type": "function",
      "function": {
        "name": "run_shell_command",
        "arguments": "{\"command\": \"pytest\"}"
      }
    }
  ]
}
```

### Step 4：适配层转换响应
代理将 OpenAI 的函数调用格式**反向映射**回 Claude Code 期望的格式（Anthropic 的工具使用块），使 Claude Code 能正确解析。

### Step 5：Claude Code 执行工具（权限检查）
Claude Code 识别到模型想运行 `pytest`：
- 根据你的权限设置（自动批准或需手动确认），决定是否执行。
- 如果需要确认，终端会弹出提示，等待你允许。
- 执行命令，捕获 `stdout` 和 `stderr`。

### Step 6：工具结果回传给模型
Claude Code 将工具输出（如测试失败的 traceback）作为新的“工具结果”消息添加到对话历史中，再次调用 DeepSeek API（重复 Step 2–4）。

### Step 7：模型推理并给出最终响应
DeepSeek 分析测试失败信息，可能会：
- 再次调用 `read_file` 查看相关源代码
- 调用 `write_file` 修改代码
- 或者直接输出自然语言解释和建议

每一次工具调用都会经过 **权限检查** 和 **适配层往返**，直到模型认为任务完成。

---

## 3. 工具调用协议的兼容性细节

- **DeepSeek API 支持函数调用吗？**  
  是的，DeepSeek 的 Chat API 完全兼容 OpenAI 的函数调用（`tool_choice`、`tools` 参数）。因此，它完全能够理解工具定义，并生成符合格式的函数调用。

- **Claude Code 的原生工具格式是什么？**  
  Claude Code 内部使用 Anthropic 的“Tool Use”功能，与 OpenAI 的函数调用类似但字段名不同（例如 `type: "tool_use"`，参数用 `input` 而非 `arguments`）。适配层（LiteLLM 等）负责双向翻译，这对用户透明。

- **如果有工具调用失败或不完整怎么办？**  
  DeepSeek 的响应会经适配层校验格式。如果格式出错，Claude Code 可能会收到错误信息并提示用户，或尝试让模型修正。

---

## 4. 权限控制的位置

**权限检查完全不依赖模型**，全部由 Claude Code 客户端完成。无论后端是 Claude 还是 DeepSeek：
- 你在 `CLAUDE.md` 或 `settings.json` 中设置的允许/禁止规则依然生效。
- 工具执行前的“Ask/Approve/Deny”对话框照常工作。
- 也就是说，DeepSeek 只是“提建议”，真正动手的是经过你授权的 Claude Code 框架。

---

## 5. 与原生 Claude 模型的体验差异

| 方面 | 原生 Claude | 接入 DeepSeek |
|------|------------|--------------|
| **响应风格** | Anthropic 的训练风格，强调安全和详细解释 | DeepSeek 的风格，偏重效率和直接性 |
| **指令遵循** | 对复杂系统提示遵循度高 | 同样很强，但在边缘场景可能稍有差异 |
| **工具调用稳定性** | 原生支持，格式完全匹配，无需转换 | 经由适配层，偶尔有解析失败的风险（成熟代理已很少见） |
| **多模态能力** | 支持图片分析（如果用的模型支持） | DeepSeek V4 若支持视觉，也能通过代理传递图像 |
| **上下文长度** | 通常 200K | DeepSeek V4 可能提供更大的上下文窗口 |
| **成本** | 相对较高 | 通常更具性价比 |

---

## 总结：一句话协作模式

**Claude Code 是“手和眼”，DeepSeek 是“大脑”；两者通过一个静默的翻译官（适配层）用标准 API 语言交流，你看到的交互和权限控制与原生体验完全一致。** 整个过程中，你的项目文件、工具执行和权限设置依然牢牢掌握在 Claude Code 客户端手中，模型只是推理和决策的来源。