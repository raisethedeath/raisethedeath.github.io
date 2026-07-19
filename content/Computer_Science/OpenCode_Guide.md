# OpenCode 完全使用指南

## 目录

- [安装](#安装)
- [启动与 TUI](#启动与-tui)
- [配置](#配置)
- [权限系统](#权限系统)
- [模型与提供商](#模型与提供商)
- [Agent 系统](#agent-系统)
- [Commands 命令](#commands-命令)
- [MCP 服务器](#mcp-服务器)
- [插件系统](#插件系统)
- [会话管理](#会话管理)
- [分享与协作](#分享与协作)
- [LSP 支持](#lsp-支持)
- [TUI 快捷键](#tui-快捷键)
- [CLI 命令速查](#cli-命令速查)
- [环境变量](#环境变量)
- [故障排查](#故障排查)

---
我拿出了一个粒子一个粒子的轨迹，发现在运动识别的过程中发生了多步的位置跳跃，说明依然存在很大的问题，粒子追踪的判据应该是两帧之间如果粒子的距离小于粒子的半径则将两个粒子视为同一个[Image 1] [Image 2] [Image 3] [Image 4] [Image 5] [Image 6]
上面给出了一篇相关工作的论文节选，可以根据这篇工作结合我们的实验数据综合改进整个项目
## 安装

```bash
# 一键安装（推荐）
curl -fsSL https://opencode.ai/install | bash

# 或通过 npm
npm install -g opencode-ai

# 或通过 Homebrew
brew install anomalyco/tap/opencode

# Windows (WSL 推荐)
choco install opencode
scoop install opencode
```

> **Windows 用户建议使用 WSL**，可获最佳体验。

---

## 启动与 TUI

```bash
opencode                  # 启动 TUI（终端交互界面）
opencode /path/to/project # 指定项目目录
opencode -c               # 继续上一个会话
opencode -s <session-id>  # 恢复指定会话
opencode -c --fork        # 分支上一个会话（不修改原记录）
```

### TUI 界面

TUI 是 opencode 的主要交互方式，支持：

- **Plan 模式**：仅规划不执行，适合复杂任务先讨论方案（按 Tab 切换）
- **Build 模式**：直接生成并修改代码（按 Tab 切换）
- **多 Agent 并行**：启动多个子 agent 同时工作

使用 `@` 键模糊搜索项目文件，拖放图片到终端可将其加入上下文。

---

## 配置

配置文件采用 JSON 格式，支持三个层级（**深度合并**，项目覆盖全局）：

| 范围 | 路径 |
|------|------|
| 项目级 | `./opencode.json` 或 `.opencode/opencode.json` |
| 全局 | `~/.config/opencode/opencode.json` |
| 内联注入 | `OPENCODE_CONFIG_CONTENT` 环境变量 |

### 完整配置示例

```json
{
  "$schema": "https://opencode.ai/config.json",
  "model": "anthropic/claude-sonnet-4-6",
  "small_model": "anthropic/claude-sonnet-4-6",
  "default_agent": "my-agent",
  "shell": "/bin/zsh",
  "share": "manual",
  "autoupdate": true,

  "provider": {
    "anthropic": {
      "options": {
        "apiKey": "sk-...",
        "baseURL": "https://api.deepseek.com/anthropic",
        "timeout": 120000,
        "maxTokens": 4096
      },
      "models": {
        "my-model": { "name": "My Model Display Name" }
      }
    }
  },

  "permission": {
    "read": "allow",
    "edit": "allow",
    "bash": { "sudo *": "ask", "*": "allow" }
  },

  "agent": {
    "my-reviewer": {
      "description": "Code reviewer",
      "mode": "subagent",
      "permission": { "edit": "deny" }
    }
  },

  "command": {
    "deploy": { "description": "Deploy project", "template": "Run deploy script..." }
  },

  "mcp": {
    "playwright": {
      "type": "local",
      "command": ["npx", "-y", "@playwright/mcp"],
      "enabled": true,
      "env": {}
    }
  },

  "plugin": ["opencode-gemini-auth", "./local-plugin.ts"],

  "skills": {
    "paths": [".opencode/skills"],
    "urls": ["https://example.com/skills"]
  },

  "references": {
    "docs": { "path": "../docs", "description": "Product docs" },
    "sdk": { "repository": "owner/sdk", "branch": "main", "description": "SDK" }
  },

  "formatter": false,
  "lsp": false
}
```

### 关键配置项说明

| 字段 | 说明 |
|------|------|
| `model` | 主模型，格式 `provider/model` |
| `small_model` | 轻量任务用模型 |
| `default_agent` | 默认 agent 名称 |
| `share` | 分享模式：`manual` / `auto` / `disabled` |
| `autoupdate` | 自动更新：`true` / `false` / `"notify"` |
| `instructions` | 附加指令文件列表，如 `["AGENTS.md"]` |
| `disabled_providers` | 禁用某些提供商 |
| `enabled_providers` | 仅启用指定提供商 |

> 配置变更后需重启 opencode 生效。

---

## 权限系统

opencode 的权限系统控制工具是否需要用户确认。

### 可用权限键

`read`, `edit`, `write`, `glob`, `grep`, `list`, `bash`, `task`, `webfetch`, `websearch`, `external_directory`, `todowrite`, `question`, `lsp`, `doom_loop`, `skill`

### 权限值

- `"allow"` — 自动允许
- `"ask"` — 询问用户
- `"deny"` — 直接拒绝

### 用法

```json
"permission": {
  "read": "allow",              // 文件读取免确认
  "edit": "allow",              // 文件编辑免确认
  "write": "allow",             // 文件写入免确认
  "glob": "allow",              // 文件搜索免确认
  "grep": "allow",              // 内容搜索免确认
  "task": "allow",              // 子任务免确认
  "webfetch": "allow",          // 网页抓取免确认
  "websearch": "allow",         // 网页搜索免确认

  "bash": {                     // bash 按模式匹配（注意顺序：最后匹配的规则生效）
    "sudo *": "ask",            // sudo 需确认
    "rm -rf /*": "deny",        // 危险命令直接拒绝
    "rm *": "ask",              // 删除文件需确认
    "chmod *": "ask",           // 修改权限需确认
    "chown *": "ask",
    "apt *": "ask",             // 包管理需确认
    "apt-get *": "ask",
    "dnf *": "ask",
    "yum *": "ask",
    "pacman *": "ask",
    "pip install *": "ask",
    "pip3 install *": "ask",
    "conda install *": "ask",
    "conda remove *": "ask",
    "npm install -g *": "ask",
    "systemctl *": "ask",        // 服务管理需确认
    "docker *": "ask",
    "passwd *": "ask",
    "useradd *": "ask",
    "usermod *": "ask",
    "mount *": "ask",
    "umount *": "ask",
    "dd *": "ask",
    "shutdown *": "ask",
    "reboot *": "ask",
    "wsl --unregister *": "ask",
    "wsl --shutdown": "ask",
    "*": "allow"                 // 兜底：其他 bash 命令直接允许
  },

  "external_directory": {        // 外部目录访问
    "~/secrets/**": "deny",
    "*": "allow"
  }
}
```

> 注意：`todowrite`, `question`, `webfetch`, `websearch`, `doom_loop` 只接受平铺值（`"allow"` / `"ask"` / `"deny"`），不支持模式匹配对象。

### 每个 Agent 独立权限

可以为不同 agent 设置独立的权限规则，覆盖全局配置：

```json
"agent": {
  "my-reviewer": {
    "permission": { "edit": "deny", "bash": "ask" }
  }
}
```

---

## 模型与提供商

opencode 通过 Models.dev 聚合 75+ 提供商。配置方式：

```bash
# TUI 内连接提供商
/connect

# CLI 管理认证
opencode auth login                    # 交互式登录
opencode auth login -p anthropic       # 指定提供商
opencode auth list                     # 列出已认证的提供商
opencode auth logout                   # 登出
```

### provider 配置

```json
"provider": {
  "anthropic": {
    "options": {
      "apiKey": "sk-...",
      "baseURL": "https://api.example.com",
      "timeout": 120000,
      "maxTokens": 4096
    },
    "models": {
      "claude-sonnet-4-6": {
        "name": "Claude Sonnet 4.6",
        "limit": { "context": 200000, "output": 64000 },
        "modalities": { "input": ["text", "image", "pdf"], "output": ["text"] },
        "variants": {
          "low": { "thinkingBudget": 8192 },
          "high": { "thinkingBudget": 32768 }
        }
      }
    }
  }
}
```

### 列出可用模型

```bash
opencode models              # 查看所有可用模型
opencode models anthropic    # 按提供商过滤
opencode models --refresh    # 刷新模型缓存
```

### 禁用/启用提供商

```json
"disabled_providers": ["openai"],
"enabled_providers": ["anthropic"]
```

---

## Agent 系统

### 内置 Agent

| Agent | 模式 | 说明 |
|-------|------|------|
| `build` | primary | 默认主 agent，可读写代码 |
| `plan` | primary | Plan 模式，仅规划不执行代码 |
| `general` | subagent | 通用子 agent |
| `explore` | subagent | 快速探索代码库 |

### 自定义 Agent

两种定义方式：

**1. 内联定义（opencode.json）**

```json
"agent": {
  "my-reviewer": {
    "description": "Reviews PRs for style violations.",
    "mode": "subagent",
    "model": "anthropic/claude-sonnet-4-6",
    "permission": { "edit": "deny", "bash": "ask" },
    "prompt": "You are a strict PR reviewer..."
  }
}
```

**2. 文件定义**

`.opencode/agent/my-reviewer.md` 或 `.opencode/agents/my-reviewer.md`：

```markdown
---
description: Reviews PRs for style violations.
mode: subagent
model: anthropic/claude-sonnet-4-6
permission:
  edit: deny
  bash: ask
---

You are a strict PR reviewer. Focus on code style, performance, and security.
```

### Agent 配置字段

| 字段 | 说明 |
|------|------|
| `name` | agent 名称（文件名自动推断） |
| `model` | 使用的模型 |
| `variant` | 模型变体（如 reasoning effort） |
| `description` | 描述，用于自动选择 |
| `mode` | `primary` / `subagent` / `all` |
| `hidden` | 是否在列表中隐藏 |
| `color` | TUI 中显示的颜色 |
| `steps` | 分步执行列表 |
| `permission` | 覆盖全局权限 |
| `disable` | 禁用内置 agent |
| `temperature` | 温度参数 |
| `top_p` | top_p 采样参数 |

禁用内置 agent：`"agent": { "plan": { "disable": true } }`

---

## Commands 命令

自定义快捷命令。文件位于 `.opencode/command/<name>.md`：

```markdown
---
description: 部署项目到生产环境。
agent: build
---

运行以下命令部署：
git push origin main
ssh myserver './deploy.sh'
```

使用时在 TUI 输入 `/deploy`。

模板中支持变量：`$ARGUMENTS`（全部参数）、`$1`、`$2`（位置参数）。

---

## MCP 服务器

MCP（Model Context Protocol）让 opencode 与外部服务交互。

```json
"mcp": {
  "playwright": {
    "type": "local",
    "command": ["npx", "-y", "@playwright/mcp"],
    "enabled": true,
    "env": { "BROWSER": "chromium" }
  },
  "github": {
    "type": "remote",
    "url": "https://api.github.com/mcp",
    "enabled": true,
    "headers": { "Authorization": "Bearer {env:GITHUB_TOKEN}" }
  }
}
```

CLI 管理：

```bash
opencode mcp add        # 交互式添加 MCP 服务器
opencode mcp list       # 列出已配置的 MCP 服务器
opencode mcp auth <name> # OAuth 认证
opencode mcp debug <name> # 调试连接
```

> `env:` 和 `file:` 语法用于安全引用凭证，如 `{env:MY_KEY}`、`{file:/path/to/key}`。

---

## 插件系统

插件扩展 opencode 的核心功能。

```json
"plugin": [
  "opencode-gemini-auth",         // npm 包名
  "opencode-foo@1.2.3",           // 指定版本
  "./local-plugin.ts",            // 本地文件
  ["opencode-bar", { "key": "val" }] // 传参模式
]
```

自动发现：`.opencode/plugin/*.ts` 和 `.opencode/plugins/*.ts` 自动加载。

安装插件：`opencode plugin <module>` 或 `opencode plug <module>`。

### 支持的事件钩子

`config`, `chat.message`, `chat.params`, `chat.headers`, `tool.execute.before`, `tool.execute.after`, `tool.definition`, `command.execute.before`, `shell.env`, `permission.ask`, `event` 等。

---

## **会话管理**

```bash
opencode session list              # 列出所有会话
opencode session list -n 20        # 最近 20 条
opencode session list --format json # JSON 格式
opencode session delete <id>       # 删除会话

opencode export <session-id>       # 导出会话为 JSON
opencode export <id> --sanitize    # 导出时脱敏
opencode import <file.json>        # 导入会话
opencode import https://opncd.ai/s/abc123  # 从分享链接导入

opencode stats                     # 查看用量统计
opencode stats --days 30           # 近 30 天
opencode stats --models            # 按模型统计
```

本地数据库位置：`~/.local/state/opencode/`（运行 `opencode db path` 查看准确路径）。

---

## 分享与协作

```bash
# TUI 内
/share    # 生成分享链接（手动模式）
/unshare  # 取消分享

# CLI
opencode run --share "prompt"    # 运行并自动分享
```

### 分享模式

| 模式 | 配置值 | 行为 |
|------|--------|------|
| 手动（默认） | `"share": "manual"` | 手动执行 `/share` |
| 自动 | `"share": "auto"` | 每个新会话自动分享 |
| 禁用 | `"share": "disabled"` | 完全禁用分享 |

分享链接格式：`https://opncd.ai/s/<share-id>`

---

## LSP 支持

opencode 自动为项目加载合适的 LSP 服务器，使 LLM 获得更准确的代码理解。

```json
"lsp": false  // 禁用 LSP
```

可通过 `OPENCODE_DISABLE_LSP_DOWNLOAD=1` 禁止自动下载 LSP。

---

## TUI 快捷键

| 按键 | 功能 |
|------|------|
| `Tab` | 切换 Plan/Build 模式 |
| `@` | 模糊搜索项目文件 |
| `Ctrl+C` | 复制（默认禁用，需配置） |
| `Ctrl+V` | 粘贴（默认禁用，需配置） |
| `Alt+Shift+D` | 拆分窗格 |
| `/` | 输入命令 |

### 自定义快捷键

```json
"keybindings": [
  { "id": "Terminal.CopyToClipboard", "keys": "ctrl+c" },
  { "id": "Terminal.PasteFromClipboard", "keys": "ctrl+v" },
  { "id": "Terminal.DuplicatePaneAuto", "keys": "alt+shift+d" }
]
```

---

## CLI 命令速查

```bash
opencode                         # 启动 TUI
opencode run "prompt"            # 非交互模式运行
opencode run -c                  # 继续上一个会话
opencode run -s <id>             # 恢复指定会话
opencode run --share "prompt"    # 运行并分享
opencode run --model anthropic/model  # 指定模型
opencode run --agent my-agent    # 指定 agent

opencode serve                   # 启动无头服务器（HTTP API）
opencode web                     # 启动 Web 界面
opencode attach <url>            # 附加到运行中的后端

opencode agent create            # 创建新 agent
opencode agent list              # 列出所有 agent

opencode mcp add                 # 添加 MCP 服务器
opencode mcp list                # 列出 MCP 服务器

opencode github install          # 安装 GitHub Agent
opencode pr <number>             # 检出 PR 并进入 opencode

opencode upgrade                 # 升级到最新版
opencode uninstall               # 卸载

opencode db path                 # 查看数据库路径
opencode debug                   # 调试工具
```

---

## 环境变量

```bash
OPENCODE_CONFIG=/path/to/config.json   # 指定配置文件
OPENCODE_AUTO_SHARE=1                  # 自动分享
OPENCODE_PERMISSION='{"*":"allow"}'    # 注入权限配置
OPENCODE_DISABLE_AUTOUPDATE=1          # 禁用自动更新

# 调试
OPENCODE_LOG_LEVEL=DEBUG               # 调试日志
OPENCODE_PRINT_LOGS=1                  # 输出日志到 stderr
OPENCODE_PURE=1                        # 纯净模式（禁用外部插件）

# 实验性功能
OPENCODE_EXPERIMENTAL=1                # 启用实验功能
OPENCODE_EXPERIMENTAL_PLAN_MODE=1      # Plan 模式
OPENCODE_EXPERIMENTAL_BACKGROUND_SUBAGENTS=1 # 后台子 agent

# 启动修复
OPENCODE_DISABLE_PROJECT_CONFIG=1      # 跳过项目配置启动
```

---

## 故障排查

### 配置文件错误导致无法启动

```bash
OPENCODE_DISABLE_PROJECT_CONFIG=1 opencode   # 跳过项目配置
OPENCODE_CONFIG=/tmp/fix.json opencode       # 使用临时配置
OPENCODE_CONFIG_CONTENT='{"$schema":"..."}' opencode  # 内联配置
```

### 常见问题

| 问题 | 解决 |
|------|------|
| 模型不可用 | `opencode models --refresh` 刷新缓存 |
| MCP 连接失败 | `opencode mcp debug <name>` 诊断 |
| 权限弹窗过多 | 配置 `permission` 中的对应工具为 `"allow"` |
| 找不到会话 | `opencode session list` 查看所有会话 |
| 想撤销更改 | 在 TUI 中输入 `/undo`（可多次撤销） |
| 想重做更改 | 在 TUI 中输入 `/redo` |

---

## 最佳实践

1. **使用 `@` 引用文件**：在问题中引用特定文件可获得更精准的回答
2. **先 Plan 再 Build**：复杂功能先在 Plan 模式下讨论方案，确认后再切换 Build
3. **图片上下文**：拖放 UI 截图或架构图到终端，让 agent 理解需求
4. **使用 Agent**：为不同任务创建专用 agent（如 reviewer、tester）
5. **配置权限**：日常操作用 `"allow"`，高危操作用 `"ask"` 或 `"deny"`
6. **定期清理**：用 `opencode session delete` 清理无用会话
7. **提交 AGENTS.md**：项目初始化生成的 AGENTS.md 应纳入版本控制
8. **外参引用**：用 `references` 配置外部代码库和文档供 agent 参考
