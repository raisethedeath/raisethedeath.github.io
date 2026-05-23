## 基本类型
Obsidian 提供 12 种预设类型，每种都有独特的颜色、图标和别名，覆盖所有常见使用场景：

| 类型         | 别名                     | 颜色  | 图标    | 适用场景            |
| ---------- | ---------------------- | --- | ----- | --------------- |
| `note`     | -                      | 蓝色  | 铅笔    | 普通备注、补充说明       |
| `abstract` | `summary`, `tldr`      | 青色  | 剪贴板   | 摘要、总结、太长不看      |
| `info`     | `todo`                 | 蓝色  | 信息图标  | 信息说明、待办事项       |
| `tip`      | `hint`, `important`    | 青色  | 火焰    | 技巧、提示、重要建议      |
| `success`  | `check`, `done`        | 绿色  | 对勾    | 成功、完成、通过        |
| `question` | `help`, `faq`          | 黄色  | 问号    | 问题、常见问题、求助      |
| `warning`  | `caution`, `attention` | 橙色  | 三角感叹号 | 警告、注意事项、潜在风险    |
| `failure`  | `fail`, `missing`      | 红色  | 叉号    | 失败、缺失、错误        |
| `danger`   | `error`                | 红色  | 闪电    | 危险操作、严重错误、不可逆操作 |
| `bug`      | -                      | 红色  | 虫子    | 已知问题、bug 报告     |
| `example`  | -                      | 紫色  | 列表    | 示例、演示、用法说明      |
| `quote`    | `cite`                 | 灰色  | 引号    | 引用名言、参考资料、第三方观点 |



## 高级使用
### 1. 自定义颜色和图标（Obsidian 1.6+）

无需 CSS，直接在类型后指定颜色和图标：

markdown

```
> [!note|color:255,100,50] 自定义颜色
> 这是一个橙色的Callout

> [!note|icon:lucide-book] 自定义图标
> 使用Lucide图标库中的任意图标
```
> [!note|color:255,100,50] 自定义颜色
> 这是一个橙色的Callout

> [!note|icon:lucide-book] 自定义图标
> 使用Lucide图标库中的任意图标

### 2. CSS 深度自定义

通过 CSS 片段可以完全自定义 Callout 的样式，创建专属类型：

1. 打开设置 → 外观 → CSS 片段 → 新建片段
2. 粘贴以下代码，保存并启用：

css

```
/* 自定义读书笔记Callout */
.callout[data-callout="book"] {
  --callout-color: 59, 130, 246;
  --callout-icon: lucide-book-open;
  --callout-border-width: 4px;
  --callout-border-radius: 8px;
}
```
使用时直接引用自定义类型：


```
> [!book] 《深入理解计算机系统》
> 作者：Randal E. Bryant
> 评分：⭐⭐⭐⭐⭐
```

## 实用场景模板

### 1. 学习笔记模板

markdown

```
> [!abstract] 本章概要
> 本章主要介绍了Obsidian的核心功能和使用方法

> [!note] 重要概念
> - 仓库（Vault）：Obsidian的根目录
> - 双向链接：`[[笔记名]]` 语法
> - Callout：带样式的信息块

> [!tip] 记忆技巧
> 常用快捷键可以打印出来贴在电脑旁，熟能生巧

> [!question] 思考问题
> 如何利用双向链接构建自己的知识网络？
```
> [!abstract] 本章概要
> 本章主要介绍了Obsidian的核心功能和使用方法

> [!note] 重要概念
> - 仓库（Vault）：Obsidian的根目录
> - 双向链接：`[[笔记名]]` 语法
> - Callout：带样式的信息块

> [!tip] 记忆技巧
> 常用快捷键可以打印出来贴在电脑旁，熟能生巧

> [!question] 思考问题
> 如何利用双向链接构建自己的知识网络？


### 2. 技术文档模板

markdown

```
> [!info] 环境要求
> - Windows 10 19044+ 或 Windows 11
> - WSL2 已启用
> - 至少4GB内存

> [!warning] 注意事项
> 不要在WSL中创建符号链接指向Windows系统文件夹

> [!bug] 已知问题
> 在某些主题下，Callout图标可能显示不正常
> 解决方案：切换到默认主题或更新主题版本
```
> [!info] 环境要求
> - Windows 10 19044+ 或 Windows 11
> - WSL2 已启用
> - 至少4GB内存

> [!warning] 注意事项
> 不要在WSL中创建符号链接指向Windows系统文件夹

> [!bug] 已知问题
> 在某些主题下，Callout图标可能显示不正常
> 解决方案：切换到默认主题或更新主题版本
### 3. 项目管理模板

markdown

```
> [!todo] 本周任务
> - [ ] 完成需求分析
> - [ ] 编写技术方案
> - [ ] 提交代码评审

> [!success] 已完成
> - [x] 项目立项
> - [x] 团队组建

> [!danger] 风险点
> 第三方API可能不稳定，需要做好降级处理
```

> [!todo] 本周任务
> - [ ] 完成需求分析
> - [ ] 编写技术方案
> - [ ] 提交代码评审

> [!success] 已完成
> - [x] 项目立项
> - [x] 团队组建

> [!danger] 风险点
> 第三方API可能不稳定，需要做好降级处理

