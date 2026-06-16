# Claude Code 使用指南：从入门到项目全流程实战

- [[Claude调用API的部分原理]]
- 

## 目录
1. [Claude Code 是什么](#1-claude-code-是什么)
2. [安装与环境配置](#2-安装与环境配置)
3. [核心概念与交互模型](#3-核心概念与交互模型)
4. [项目管理与工作区](#4-项目管理与工作区)
5. [日常开发工作流](#5-日常开发工作流)
   - 5.1 需求理解与任务拆分
   - 5.2 代码生成与修改
   - 5.3 代码审查与优化
   - 5.4 测试编写与执行
   - 5.5 调试与错误修复
6. [Git 与版本控制集成](#6-git-与版本控制集成)
7. [文档与知识管理](#7-文档与知识管理)
8. [环境与依赖管理](#8-环境与依赖管理)
9. [CI/CD 与部署支持](#9-cicd-与部署支持)
10. [安全与合规注意事项](#10-安全与合规注意事项)
11. [高级技巧与最佳实践](#11-高级技巧与最佳实践)
12. [故障排查与常见问题](#12-故障排查与常见问题)
13. [附录：常用命令速查表](#13-附录常用命令速查表)

---

## 1. Claude Code 是什么

Claude Code 是 Anthropic 推出的一款**命令行原生 AI 编程助手**，它直接在你的终端中运行，能够理解完整的项目上下文，帮助你完成从需求分析到部署的整个软件开发生命周期。它不是简单的代码补全工具，而是一个可以执行命令、读写文件、运行测试、管理 Git 的智能代理。

**核心能力：**
- 深度理解你的代码库（自动索引、语义搜索）
- 生成、修改、重构代码，保持风格一致
- 在终端中执行命令（需用户授权）
- 直接创建/编辑文件，批量变更
- 管理 Git 操作（提交、分支、PR 等）
- 运行测试、linter、构建工具并修复问题
- 解释代码、分析错误日志
- 生成文档、更新 README
- 与外部工具集成（通过 CLI）

**适用场景：**
- 新功能开发
- Bug 修复
- 代码重构
- 技术债务清理
- 测试编写
- 项目初始化与脚手架搭建
- 代码审查
- 环境配置与故障排查

---

## 2. 安装与环境配置

### 2.1 前置条件
- 操作系统：macOS、Linux、Windows（通过 WSL）
- Node.js 18+ 或 Python 3.10+（Claude Code 基于 Node.js，会自动管理环境，但建议预先安装 Node.js 以便全局安装）
- 终端：推荐 iTerm2、Terminal、Warp、VS Code 内置终端
- Anthropic API 密钥，或通过 Claude 订阅获取的 Token

### 2.2 安装 Claude Code

**全局安装（推荐）：**
```bash
npm install -g @anthropic-ai/claude-code
```

**使用 npx 直接运行（无需安装）：**
```bash
npx @anthropic-ai/claude-code
```

**通过 Homebrew（macOS）：**
```bash
brew install anthropic/tools/claude-code
```

**通过 pip（Python 用户）：**
```bash
pip install claude-code
```

### 2.3 认证与配置
首次运行 `claude` 命令后会引导你完成认证。
```bash
claude login
```
按提示输入 API Key，或通过 OAuth 登录你的 Anthropic 账户。配置信息默认保存在 `~/.claude/config.json`。

**环境变量（CI/CD 或自动化场景）：**
```bash
export ANTHROPIC_API_KEY=your-api-key
```

### 2.4 项目级配置
你可以在项目根目录创建 `.clauderc` 或 `claude.md` 文件，设置项目特定的指令、规则和上下文。
```markdown
# .clauderc
project: "my-web-app"
language: "typescript"
framework: "next.js"
code_style: "prettier default, single quotes, no semicolons"
testing: "vitest"
```
Claude Code 启动时会自动读取这些配置，保证与项目风格一致。

### 2.5 终端集成
建议将 Claude Code 与 Shell 集成：
```bash
# 在 .bashrc 或 .zshrc 中添加别名
alias cc='claude'
```
如果你使用 VS Code，可以在集成终端中直接运行 `claude`，享受分屏协作。

---

## 3. 核心概念与交互模型

### 3.1 对话会话
Claude Code 是基于会话的。每次运行 `claude` 启动一个 REPL 对话，上下文会持续累积，直到你退出（`/exit` 或 `Ctrl+C`）。你可以随时开始新会话（`claude --new`）。

### 3.2 两种模式：交互式与单次命令
- **交互模式**：直接运行 `claude`，进入对话循环，适合多步任务。
- **单次命令模式**：`claude -p "你的问题"` 或通过管道输入。适合脚本和 CI。
  ```bash
  echo "解释这个错误日志" | claude --file error.log
  cat src/app.ts | claude -p "找出安全漏洞"
  ```

### 3.3 权限模型
Claude Code 会主动执行操作，但某些操作需要用户批准，分为几个级别：
- **Always Allow（始终允许）**：读取文件、只读命令。
- **Ask Once（每次询问）**：写入文件、执行 shell 命令、网络请求。
- **Never Allow（禁止）**：可配置禁用某些操作。

你可以在命令中指定 `--dangerously-skip-permissions` 跳过所有权限提示（仅限完全受控的沙箱环境）。

### 3.4 斜杠命令（Slash Commands）
在交互模式中，输入 `/` 会显示特殊命令：
- `/help` - 帮助
- `/clear` - 清除对话历史
- `/compact` - 压缩上下文（节省 token）
- `/config` - 修改配置
- `/memory` - 查看/编辑持久化记忆
- `/review` - 请求 Claude 审查当前变更
- `/cost` - 查看当前会话花费
- `/doctor` - 诊断环境问题
- `/login` - 重新认证

---

## 4. 项目管理与工作区

### 4.1 项目初始化
在新项目中，直接运行 `claude` 即可开始对话。Claude 会自动识别项目结构。
```bash
cd my-new-project
claude
```
然后你可以说：“初始化一个 Next.js 14 + TypeScript 项目，包含 Tailwind CSS 和 ESLint”

Claude Code 会执行类似以下操作：
1. 运行 `npx create-next-app@latest` 并填充参数
2. 安装依赖
3. 写入基础配置文件（tsconfig, tailwind.config, eslintrc）
4. 创建示例页面布局
5. 初始化 Git 仓库并完成首次提交

### 4.2 多仓库/单仓库（Monorepo）支持
在 monorepo 中，Claude Code 会自动识别各个 package 的边界，你可以指定在哪个子包中操作。
```
“在 packages/api 中添加一个新的 healthcheck 端点”
“更新 packages/shared 的类型定义并同步到所有消费者”
```

### 4.3 上下文窗口管理
Claude Code 会自动构建项目上下文，包括：
- 文件树（自动排除 node_modules, .git）
- 最近打开/编辑的文件
- Git 状态
- 当前对话历史

当上下文过长时，可以使用 `/compact` 命令让 Claude 总结对话并释放空间。你也可以手动指定关注的文件：
```
“只关注 src/auth/ 目录下的文件”
```

### 4.4 持久化记忆
Claude Code 支持跨会话的持久化记忆，用于存储项目约定、用户偏好等。
使用 `/memory` 查看和编辑，或者在对话中说：
```
“记住：所有 API 路由必须添加输入验证中间件”
“我们的数据库表命名使用蛇形命名法，但 TypeScript 接口使用驼峰”
```
Claude 会在后续会话中自动遵循这些规则。

---

## 5. 日常开发工作流

### 5.1 需求理解与任务拆分
拿到一个新需求时，你可以和 Claude Code 一起做技术拆解。
```
“我想实现用户注册功能，包含邮箱验证、密码强度检查、防机器人的验证码。
请帮我分析需要的组件和接口，生成任务列表，并在我们当前的 Express + React 项目中规划文件结构。”
```
Claude 会：
1. 审阅现有项目结构
2. 提出数据库 schema 变更
3. 列出需要的 API 端点
4. 规划前端页面和组件
5. 生成一个 Markdown 任务清单（可保存为 `tasks.md`）

你还可以进一步说：“先实施后端部分，按 TDD 方式开发”，Claude 会按步骤编写测试、实现代码、运行测试循环。

### 5.2 代码生成与修改
**创建新文件：**
```
“在 src/services/ 下创建一个 emailService.ts，使用 nodemailer 发送验证邮件，读取 .env 中的 SMTP 配置”
```
Claude 会生成文件，并自动处理 import 和环境变量加载逻辑。

**修改现有文件：**
```
“重构 src/utils/formatDate.ts，使其支持国际化，并更新所有调用点”
```
Claude 会：
1. 读取当前 `formatDate`
2. 搜索所有引用
3. 提出修改方案并获得确认
4. 逐一修改文件
5. 运行项目 lint 和类型检查确保不破坏构建

**批量重命名/迁移：**
```
“把所有使用 moment.js 的地方替换为 date-fns，保持功能一致”
```

### 5.3 代码审查与优化
**在提交前进行自审：**
```
“审查我当前的未暂存修改，重点关注安全性和性能问题”
```
Claude 会运行 `git diff`，分析变更，给出具体建议。你可以让它在审查后直接应用修复：
```
“接受所有建议并修改代码”
```

**重构遗留代码：**
```
“src/controllers/UserController.ts 有 500 行，函数职责过多。请拆分为独立的服务模块，保持行为不变”
```
Claude 会先写测试锁定当前行为，然后安全地重构。

### 5.4 测试编写与执行
**根据现有代码补写测试：**
```
“为 src/components/LoginForm.tsx 编写单元测试，使用 Testing Library，覆盖正常登录、表单验证、错误状态”
```
Claude 生成测试文件后，你可以让它运行并修复失败用例：
```
“运行测试，如果失败则分析原因并修复”
```

**测试驱动开发（TDD）：**
```
“我们要给购物车添加优惠券功能，请先写一个失败的集成测试，然后实现代码让测试通过，最后重构”
```
Claude 会严格按照 Red-Green-Refactor 循环进行。

### 5.5 调试与错误修复
**粘贴错误日志：**
```
“运行 npm run dev 时出现以下错误，请分析并修复：
Module not found: Can't resolve '@/components/Header' ...”
```
Claude 会检查路径别名配置、文件存在性，指出问题并修复。

**交互式调试：**
```
“我的 API 返回 500 错误但没有详细日志，请添加请求/响应日志中间件，并帮我解读日志输出”
```

**性能分析：**
```
“页面加载慢，请分析 Next.js 的构建输出，找出大包体依赖，并建议优化方案”
```

---

## 6. Git 与版本控制集成

Claude Code 深度集成了 Git，可以用自然语言驱动版本控制流程。

**查看状态与历史：**
```
“显示当前 Git 状态和最近的 5 个提交”
```

**创建有意义的提交：**
```
“提交我的修改，使用约定式提交格式 (conventional commits)，并撰写详细的中文提交信息”
```
Claude 会自动 `git add` 相关文件，分析 diff 后生成类似：
```
feat(auth): 添加邮箱验证和密码强度校验

- 新增 emailService 集成 nodemailer
- 注册表单增加实时密码强度指示器
- 添加 Zod 验证 schemas
```

**分支管理：**
```
“基于 main 创建分支 feature/user-profile，切换过去”
```

**处理合并冲突：**
```
“我在合并 feature/payment 到 main 时遇到冲突，请帮我解决，优先保留功能分支的逻辑，但要有最新的类型定义”
```

**生成 Pull Request 描述：**
```
“基于当前分支与 main 的差异，生成一份 PR 描述，包含变更摘要、测试步骤、截图区域”
```

**交互式 Rebase：**
```
“把我最近的 3 个 WIP 提交合并为一个有意义的提交”
```

---

## 7. 文档与知识管理

**生成 API 文档：**
```
“为 src/api/routes 下的所有端点生成 OpenAPI 3.0 规范，保存为 openapi.yaml”
```

**更新 README：**
```
“根据 package.json 和项目结构，重写 README.md，包含安装步骤、开发指南、API 概述”
```

**代码注释：**
```
“为 src/utils/ 中没有 JSDoc 的复杂函数添加中文注释”
```

**架构决策记录（ADR）：**
```
“我们决定从 REST 迁移到 GraphQL，请记录这个架构决策，说明背景、选项、后果”
```
Claude 会在 `docs/adr/` 下创建规范化文档。

---

## 8. 环境与依赖管理

**管理环境变量：**
```
“检查所有代码中引用的环境变量，与 .env.example 对比，添加缺失的变量说明”
```

**升级依赖：**
```
“检查 package.json 中过时的依赖，逐个升级并运行测试，确保兼容。如有 breaking change，查看变更日志并调整代码”
```

**Docker 相关：**
```
“生成一个多阶段构建的 Dockerfile，优化缓存和镜像大小。同时更新 docker-compose.yml 添加新服务”
```

**数据库迁移：**
```
“创建一个迁移文件，为 users 表添加 last_login_at 和 login_count 字段”
```
如果项目使用 Prisma、Knex 或 TypeORM，Claude 会生成对应格式的迁移代码。

---

## 9. CI/CD 与部署支持

**生成 GitHub Actions 工作流：**
```
“创建 .github/workflows/ci.yml，包含 lint、类型检查、单元测试、构建步骤，使用 pnpm 缓存”
```

**修复 CI 失败：**
```
“CI 中 type-check 步骤失败，日志如下：[粘贴日志]。请修复类型错误”
```

**部署脚本：**
```
“编写一个 deploy.sh 脚本，构建项目后通过 rsync 同步到远程服务器，并执行远程重启命令”
```

**基础设施即代码：**
```
“使用 Terraform 定义我们的 AWS 基础设施：ECS Fargate 集群、RDS 实例、S3 存储桶。从现有 .env 文件中提取配置”
```

---

## 10. 安全与合规注意事项

### 10.1 数据隐私
- Claude Code 处理你的代码和数据时，通过 API 发送给 Anthropic。确保遵守你公司的数据政策。
- **不要**在对话中包含生产环境密钥、客户 PII 数据。
- 使用 `.claudeignore` 文件排除敏感文件（类似 `.gitignore`）：
  ```
  .env
  secrets/
  *.pem
  ```

### 10.2 代码安全
始终让 Claude Code 进行安全检查：
```
“审查这次变更，查找 OWASP Top 10 漏洞，特别是注入攻击和 XSS”
```

### 10.3 合规审计
Claude Code 的 `/review` 命令可以生成审查报告，用作合规证据。

---

## 11. 高级技巧与最佳实践

### 11.1 编写优秀的提示词
- **明确范围**：“在 src/modules/orders 中” 比 “在我的代码中” 更精准。
- **给定约束**：“使用 async/await，避免回调；错误处理使用自定义 AppError 类”
- **提供示例**：“生成类似 src/components/Button.tsx 风格的新组件”

### 11.2 利用 CLAUDE.md 项目指令
在项目根目录创建 `CLAUDE.md`（大文件则 `CLAUDE.local.md`），写入项目约定，Claude 每会话必读：
```markdown
# CLAUDE.md
- 我们使用 pnpm 作为包管理器，请勿使用 npm 或 yarn
- 组件使用 React 函数组件 + Hooks，禁止 class 组件
- 数据库查询必须使用参数化，禁止字符串拼接
- 测试覆盖率目标：核心业务逻辑 90%+
- PR 标题遵循 conventional commits，正文包含 JIRA 编号
```

### 11.3 与其他工具配合
- **结合 fzf**：`ls | fzf | xargs claude -p "解释这个文件"` 快速分析选中的文件
- **结合 gh CLI**：让 Claude 直接调用 `gh pr create` 等命令
- **作为 $EDITOR**：`git commit -e` 时可让 Claude 编写提交信息

### 11.4 费用控制
- 使用 `/cost` 监控消耗
- 用 `/compact` 在长任务中压缩上下文
- 设置每月预算提醒：`“如果本次会话消耗超过 $5，提醒我”`

### 11.5 离线批处理
```bash
# 分析整个项目并生成报告
claude -p "全面审查项目的安全性、可维护性和性能，生成 report.md" > report.md
```

---

## 12. 故障排查与常见问题

### Claude 无法识别项目
- 确保在项目根目录运行 `claude`
- 检查是否存在 `package.json`、`pyproject.toml` 等标志文件
- 运行 `/doctor` 诊断

### 修改未生效
- 检查是否在正确的分支
- 运行 `git status` 确认文件已被修改
- 某些语言服务器或构建工具可能需要重启

### 权限问题
- 确保 API 密钥有效
- 检查网络代理设置（设置 `HTTP_PROXY` 环境变量）

### 输出截断
- 大型文件编辑可能被截断，说“继续”让 Claude 接着完成
- 或要求分块输出：“分两部分生成，先做第一部分”

---

## 13. 附录：常用命令速查表

| 命令/操作 | 说明 |
|-----------|------|
| `claude` | 启动交互模式 |
| `claude -p "..."` | 单次提问 |
| `claude --new` | 强制新会话 |
| `claude login` | 登录/重新认证 |
| `/help` | 查看帮助 |
| `/clear` | 清除对话 |
| `/compact` | 压缩上下文 |
| `/review` | 审查当前变更 |
| `/cost` | 查看花费 |
| `/doctor` | 环境诊断 |
| `Ctrl+C` | 中断当前操作 |
| `Ctrl+D` 或 `/exit` | 退出 |

---

这份指南覆盖了使用 Claude Code 进行软件项目推进的完整生命周期。实际使用时，建议从一个小任务开始，熟悉交互方式，然后逐步将更多流程交给这个智能助手，它会成为你高效的结对编程伙伴。