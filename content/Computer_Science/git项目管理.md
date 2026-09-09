使用 Git 进行项目管理不仅仅是记录代码历史，更是**规范团队协作、保障代码质量、控管项目进度和风险**的核心手段。

这份指南将从 **环境配置、分支策略、日常开发流程、代码评审、版本发布以及最佳实践** 六个维度，为你提供一份详细的 Git 项目管理指南。

---

# 一、 基础准备与环境初始化

在项目启动阶段，统一的配置和规范是避免后续“灾难”的关键。

### 1. 全局与项目配置
在团队开始开发前，确保每位成员的 Git 配置一致：
```bash
# 设置用户信息（必须与 Git 平台如 GitHub/GitLab 的邮箱一致）
git config --global user.name "Your Name"
git config --global user.email "your_email@example.com"

# 统一换行符处理（防止 Windows 和 Mac/Linux 混合开发导致的换行符冲突）
# Windows 用户设为 true，Mac/Linux 用户设为 input
git config --global core.autocrlf true 

# 统一默认分支名称为 main
git config --global init.defaultBranch main
```

### 2. 配置 `.gitignore` 文件
**切勿将无关文件提交到仓库！** 在项目根目录创建 `.gitignore` 文件，忽略以下内容：
*   **构建产物**：`/dist`, `/build`, `*.class`
*   **依赖包目录**：`node_modules/`, `vendor/`
*   **环境变量与密钥文件**：`.env`, `.env.local`, `secrets.json`
*   **编辑器/IDE 配置文件**：`.idea/`, `.vscode/`, `*.swp`
*   **系统临时文件**：`.DS_Store`, `Thumbs.db`

> 💡 **提示**：可以在 [gitignore.io](https://www.toptal.com/developers/gitignore) 根据你的技术栈（如 Java, React, Python）自动生成 `.gitignore`。

---

# 二、 选择合适的分支策略（核心）

没有最好的分支策略，只有最适合团队的。以下是三种主流的分支模型：

### 1. Git Flow（适合：传统软件、版本发布周期长的项目）
*   `main`：生产环境代码，绝对稳定，仅通过 Release/Hotfix 分支合并。
*   `develop`：开发主干，包含最新的已开发完成功能。
*   `feature/*`：功能分支，从 `develop` 分出，完成后合并回 `develop`。
*   `release/*`：预发布分支，用于测试和 Bug 修复，完成后合并到 `main` 和 `develop`。
*   `hotfix/*`：紧急修复分支，从 `main` 分出，修复后合并到 `main` 和 `develop`。

### 2. GitHub Flow（适合：SaaS、持续集成/持续部署 CI/CD、快速迭代项目）
*   `main`：永远保持可部署状态。
*   `feature/*` 或 `fix/*`：从 `main` 创建分支，开发完成后提交 Pull Request (PR)，经过 Code Review 和 CI 测试后直接合并到 `main` 并部署。

### 3. Trunk-Based Development (主干开发)（适合：成熟的高水平团队）
*   所有开发者直接在 `main` 或是生命周期极短（几小时到一天）的分支上开发，配合“功能开关（Feature Toggles）”来控制未完成功能的显隐。

> **推荐**：中小团队首选 **GitHub Flow**，简单高效；需要严格版本发布的大型项目使用 **Git Flow**。

---

# 三、 标准日常开发流程（以 GitHub Flow 为例）

团队成员的日常开发应遵循以下标准化步骤：

### 1. 同步最新代码
开发新功能前，先拉取远程最新的 `main` 分支：
```bash
git checkout main
git pull origin main
```

### 2. 创建需求/修复分支
分支命名需规范，包含类型和简短描述：
```bash
# 格式：类型/单号-简短描述
git checkout -b feature/PROJ-123-user-login
# 或
git checkout -b fix/PROJ-456-header-bug
```

### 3. 提交代码（Atomic Commits - 原子提交）
*   每次提交只做一件事（例如：修改一个 Bug、添加一个函数）。
*   保持提交粒度小，便于后续回滚或 Code Review。
```bash
git add .
git commit -m "feat(user): add SMS verification code functionality"
```

### 4. 保持分支同步（避免长久脱节）
如果 feature 分支开发时间较长，应定期 Rebase 主干代码，解决潜在冲突：
```bash
git fetch origin
git rebase origin/main
# 如果有冲突，手动解决冲突后执行：
# git add <conflict-files>
# git rebase --continue
```

### 5. 推送分支并发起 PR/MR
```bash
git push origin feature/PROJ-123-user-login
```
推送后，在 GitHub/GitLab 界面创建 **Pull Request (PR)** 或 **Merge Request (MR)**。

---

# 四、 代码评审（Code Review）与合并规范

代码评审是保证代码质量和知识共享的核心环节。

### 1. PR 标准模板
创建 PR 时，应填写以下信息：
*   **变更目的**：修复了什么问题 / 增加了什么功能？
*   **关联 Task/Issue**：如 `Closes #123`
*   **测试情况**：单元测试通过截图、手动测试步骤。

### 2. 分支保护规则（Branch Protection Rules）
在 GitHub/GitLab 设置中，对 `main` 和 `develop` 分支设置保护：
*   ❌ **禁止直接 Push** 到保护分支。
*   ✅ **强制要求 PR** 才能合并。
*   ✅ **至少需要 1~2 名团队成员审批 (Approve)**。
*   ✅ **强制要求 CI 检查通过**（如自动化测试、Lint 检查）。

### 3. 合并模式（Merge Options）
合并 PR 时，推荐使用：
*   **Squash and Merge（压缩合并）**：将功能分支上的多次细碎 Commit 压缩为一个 Commit 合并到 `main`。**能保持 `main` 分支的历史极度整洁！**
*   **Rebase and Merge**：保持线性历史，但保留所有 Commit。

---

# 五、 版本发布与 Tag 管理

当代码合并到生产分支（`main`），准备发布新版本时，需要进行版本标记。

### 1. 语义化版本号（Semantic Versioning）
遵循 `主版本号.次版本号.修订号` (MAJOR.MINOR.PATCH) 规范，例如 `v1.2.0`：
*   **MAJOR**：做了不兼容的 API 修改。
*   **MINOR**：增加了向下兼容的新功能。
*   **PATCH**：做了向下兼容的 Bug 修复。

### 2. 打 Tag（标签）与 Release
```bash
# 切换到 main 分支并拉取最新代码
git checkout main
git pull origin main

# 创建带有注释的附注标签（推荐）
git tag -a v1.0.0 -m "Release v1.0.0: Add user authentication and payment system"

# 推送 Tag 到远程仓库
git push origin v1.0.0
# 或推送所有本地 Tag：git push origin --tags
```
在 GitHub/GitLab 上，可以基于此 Tag 创建一个 **Release**，附带 ChangeLog（变更日志），方便产品经理和运维查看。

---

# 六、 Git Commit 规范（Angular 规范）

统一的 Commit Message 可以大幅提升历史追溯效率。推荐使用 **Angular 提交规范**：

```text
<type>(<scope>): <subject>
```

### 常见 Type 类型：
*   `feat`: 新功能 (feature)
*   `fix`: 修复 Bug
*   `docs`: 仅文档改动 (documentation)
*   `style`: 代码格式变动（不影响逻辑，如空格、分号等）
*   `refactor`: 重构（既不是新功能，也不是修 Bug 的代码变动）
*   `test`: 增加或修改测试用例
*   `chore`: 构建过程或辅助工具的变动（如更新依赖库）

**示例**：
*   `feat(auth): add JWT refresh token logic`
*   `fix(cart): resolve price calculation overflow issue (#88)`

> 💡 **工具推荐**：可以在项目中引入 `commitlint` 和 `husky`，在提交代码时强制拦截不符合规范的 Commit Message。

---

# 七、 项目经理/ Team Lead 实用速查命令

| 场景 | 命令 |
| :--- | :--- |
| **查看整洁的提交树** | `git log --graph --oneline --decorate --all` |
| **暂存当前工作（改 Bug 救火用）** | `git stash` -> 修复后 -> `git stash pop` |
| **撤销上一次提交但保留代码** | `git reset --soft HEAD~1` |
| **查找引入 Bug 的 Commit（二分查找）** | `git bisect start / bad / good` |
| **查看谁修改了某行代码** | `git blame <filename>` |
| **强行用远程覆盖本地** | `git fetch --all && git reset --hard origin/main` |

---

# 八、 总结：Git 项目管理成功矩阵

1.  **代码不越界**：配置 `.gitignore`，安全密钥绝不入库。
2.  **分支不乱搞**：主分支（`main`）只读，开发全靠 `feature/*` 分支。
3.  **提交不乱写**：遵守 Commit 规范，小步快跑，语义清晰。
4.  **合并严格查**：没有 Code Review 和 CI 检查通过，绝不合并代码。
5.  **里程碑清晰**：善用 Tag 和 Release 管理每个上线节点。