Obsidian 基于 CommonMark 规范，**全面支持内联与块级 HTML**，可与 Markdown 语法无缝混合使用。但出于安全考虑，部分危险标签（如 `<script>`）会被过滤。以下是详细的兼容语法总结与实用示例。

---

## 一、基础文本格式化

表格

| 标签                 | 说明    | 示例                            | 兼容性  |
| ------------------ | ----- | ----------------------------- | ---- |
| `<b>` / `<strong>` | 加粗    | `<b>加粗文本</b>`                 | ✅ 完美 |
| `<i>` / `<em>`     | 斜体    | `<i>斜体文本</i>`                 | ✅ 完美 |
| `<u>`              | 下划线   | `<u>下划线文本</u>`                | ✅ 完美 |
| `<s>` / `<del>`    | 删除线   | `<s>删除线</s>`                  | ✅ 完美 |
| `<mark>`           | 高亮    | `<mark>高亮文本</mark>`           | ✅ 完美 |
| `<sup>`            | 上标    | `X<sup>2</sup>`               | ✅ 完美 |
| `<sub>`            | 下标    | `H<sub>2</sub>O`              | ✅ 完美 |
| `<code>`           | 行内代码  | `<code>print("Hello")</code>` | ✅ 完美 |
| `<br>`             | 强制换行  | `第一行<br>第二行`                  | ✅ 完美 |
| `<hr>`             | 水平分隔线 | `<hr>`                        | ✅ 完美 |

**实用示例**：

markdown

```
这是 <b>加粗</b> 与 <i>斜体</i> 混合文本，<mark>高亮重点</mark>，
公式：E = mc<sup>2</sup>，水的化学式：H<sub>2</sub>O
```

这是 <b>加粗</b> 与 <i>斜体</i> 混合文本，<mark>高亮重点</mark>，
公式：E = mc<sup>2</sup>，水的化学式：H<sub>2</sub>O


---

## 二、链接与图片

### 1. 链接

表格

|标签|说明|示例|兼容性|
|---|---|---|---|
|`<a>`|超链接|`<a href="https://obsidian.md">Obsidian官网</a>`|✅ 完美|
|`<a>`|Obsidian 内部链接|`<a href="obsidian://open?vault=我的知识库&file=笔记名.md">内部笔记</a>`|✅ 可用（推荐用`[[ ]]`）|

**示例**：

markdown

```
<!-- 外部链接 -->
访问 <a href="https://obsidian.md" target="_blank">Obsidian官网</a>

<!-- 内部链接（推荐用[[ ]]，但HTML也支持） -->
跳转到 <a href="obsidian://open?vault=我的知识库&file=HTML语法.md">HTML语法笔记</a>
```

### 2. 图片

表格

|标签|说明|示例|兼容性|
|---|---|---|---|
|`<img>`|图片|`<img src="attachments/图片.png" alt="描述" width="300">`|✅ 完美|

**优势**：HTML 图片标签支持更精细的尺寸控制，比 Markdown 语法更灵活。

markdown

```
<!-- 固定宽度，高度自适应 -->
<img src="attachments/截图.png" alt="界面截图" width="400">

<!-- 同时指定宽高 -->
<img src="attachments/图标.png" alt="图标" width="50" height="50">

<!-- 居中显示（配合div） -->
<div style="text-align: center;">
  <img src="attachments/封面.png" alt="封面" width="500">
</div>
```

---

## 三、列表

表格

|标签|说明|示例|兼容性|
|---|---|---|---|
|`<ul>`|无序列表|`<ul><li>项目1</li><li>项目2</li></ul>`|✅ 完美|
|`<ol>`|有序列表|`<ol><li>第一步</li><li>第二步</li></ol>`|✅ 完美|
|`<li>`|列表项|见上|✅ 完美|

**嵌套列表示例**：

markdown

```
<ul>
  <li>一级项目
    <ul>
      <li>二级项目</li>
      <li>二级项目</li>
    </ul>
  </li>
  <li>一级项目</li>
</ul>
```

<ul>
  <li>一级项目
    <ul>
      <li>二级项目</li>
      <li>二级项目</li>
    </ul>
  </li>
  <li>一级项目</li>
</ul>


---

## 四、表格

HTML 表格支持**合并单元格**（`colspan`/`rowspan`），这是 Obsidian Markdown 表格不具备的功能，适合复杂布局。

表格

| 标签        | 说明    | 兼容性  |
| --------- | ----- | ---- |
| `<table>` | 表格容器  | ✅ 完美 |
| `<tr>`    | 表格行   | ✅ 完美 |
| `<th>`    | 表头单元格 | ✅ 完美 |
| `<td>`    | 数据单元格 | ✅ 完美 |
| `<thead>` | 表头分组  | ✅ 完美 |
| `<tbody>` | 表体分组  | ✅ 完美 |

**复杂表格示例（合并单元格）**：

markdown

```
<table>
  <thead>
    <tr>
      <th colspan="2">合并表头</th>
      <th>第三列</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">合并行</td>
      <td>数据1</td>
      <td>数据2</td>
    </tr>
    <tr>
      <td>数据3</td>
      <td>数据4</td>
    </tr>
  </tbody>
</table>
```

<table>
  <thead>
    <tr>
      <th colspan="2">合并表头</th>
      <th>第三列</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">合并行</td>
      <td>数据1</td>
      <td>数据2</td>
    </tr>
    <tr>
      <td>数据3</td>
      <td>数据4</td>
    </tr>
  </tbody>
</table>


---

## 五、布局与容器（最实用功能）

利用 `<div>` 和 `<span>` 配合内联 `style` 属性，可以实现自定义布局、颜色、边距等，是 Obsidian 中增强排版的核心手段。

### 1. 文本颜色与背景

markdown

```
<!-- 自定义文本颜色 -->
<span style="color: #ef4444;">红色文本</span>
<span style="color: #22c55e;">绿色文本</span>
<span style="color: #3b82f6;">蓝色文本</span>

<!-- 自定义背景色 -->
<span style="background-color: #fef3c7; padding: 2px 6px; border-radius: 4px;">黄色背景提示</span>
```
<span style="color: #ef4444;">红色文本</span>
<span style="color: #22c55e;">绿色文本</span>
<span style="color: #3b82f6;">蓝色文本</span>

<span style="background-color: #fef3c7; padding: 2px 6px; border-radius: 4px;">黄色背景提示</span>


### 2. 文本对齐

markdown

```
<div style="text-align: left;">左对齐文本</div>
<div style="text-align: center;">居中对齐文本</div>
<div style="text-align: right;">右对齐文本</div>
```

<div style="text-align: left;">左对齐文本</div>
<div style="text-align: center;">居中对齐文本</div>
<div style="text-align: right;">右对齐文本</div>

### 3. 自定义提示框（模拟 Callout）

markdown

```
<div style="border-left: 4px solid #3b82f6; background-color: #eff6ff; padding: 12px 16px; border-radius: 4px;">
  <strong>💡 提示</strong><br>
  这是一个用HTML模拟的蓝色提示框
</div>

<div style="border-left: 4px solid #ef4444; background-color: #fef2f2; padding: 12px 16px; border-radius: 4px;">
  <strong>⚠️ 警告</strong><br>
  这是一个红色警告框
</div>
```

<div style="border-left: 4px solid #3b82f6; background-color: #eff6ff; padding: 12px 16px; border-radius: 4px;">
  <strong>💡 提示</strong><br>
  这是一个用HTML模拟的蓝色提示框
</div>

<div style="border-left: 4px solid #ef4444; background-color: #fef2f2; padding: 12px 16px; border-radius: 4px;">
  <strong>⚠️ 警告</strong><br>
  这是一个红色警告框
</div>

### 4. 多列布局

markdown

```
<div style="display: flex; gap: 20px;">
  <div style="flex: 1;">
    <h4>左列</h4>
    这是左列内容
  </div>
  <div style="flex: 1;">
    <h4>右列</h4>
    这是右列内容
  </div>
</div>
```

<div style="display: flex; gap: 20px;">
  <div style="flex: 1;">
    <h4>左列</h4>
    这是左列内容
  </div>
  <div style="flex: 1;">
    <h4>右列</h4>
    这是右列内容
  </div>
</div>

---

## 六、媒体元素

表格

|标签|说明|示例|兼容性|
|---|---|---|---|
|``|音频|`<audio src="attachments/录音.mp3" controls>`|✅ 完美|
|`<video>`|视频|`<video src="attachments/演示.mp4" controls width="500"></video>`|✅ 完美|
|`<iframe>`|嵌入内容|见下|⚠️ 部分限制|

**音频 / 视频示例**：

markdown

```
<audio src="attachments/讲座录音.mp3" controls title="讲座录音">

<video src="attachments/操作演示.mp4" controls width="600" title="操作演示"></video>
```

**iframe 限制说明**：

- 出于安全考虑，Obsidian 默认阻止外部网站 iframe（如嵌入 YouTube）
- 本地 HTML 文件 iframe 可以使用，但需谨慎
- 如需嵌入外部内容，推荐使用社区插件（如`Embedder`）

---

## 七、注释

HTML 注释不会在预览中显示，适合隐藏笔记草稿、待办事项等。

markdown

```
<!-- 这是一段隐藏的注释，不会在预览中显示 -->
<!-- 待办：补充更多示例 -->

可见文本内容
```



---

## 八、Obsidian 特有注意事项

### 1. 安全限制（绝对禁止）

以下标签会被 Obsidian 完全过滤，无法使用：

- ❌ `<script>`：JavaScript 脚本（防止 XSS 攻击）
- ❌ `<style>`：全局样式标签（请用内联`style`属性或 CSS 片段）
- ❌ `<form>` 的提交功能：表单可以显示，但无法提交数据
- ❌ `<iframe>` 外部网站：默认阻止，需插件支持

### 2. 与 Markdown 混合使用规则

- **块级 HTML 元素**（如`<div>`、`<table>`、`<ul>`）前后最好加空行，避免与 Markdown 语法冲突
- **内联 HTML 元素**（如`<span>`、`<b>`）可以直接嵌入 Markdown 文本中
- HTML 块内的 Markdown 语法默认不会解析，如需解析，可在块前后加空行

**正确示例**：

markdown

```
这是Markdown文本。

<div style="background: #f3f4f6; padding: 16px;">
  这是HTML容器内的纯文本
</div>

这是后续的Markdown文本。
```

### 3. 推荐替代方案

- 内部链接：优先用`[[笔记名]]`，而非 HTML `<a>`
- Callout：优先用原生`> [!note]`语法，而非 HTML 模拟
- 简单表格：优先用 Markdown 表格语法，更简洁
- 全局样式：优先用 CSS 片段，而非大量内联`style`

---

## 九、最佳实践

1. **优先使用 Markdown**：HTML 是补充，不是替代，Markdown 更简洁易读
2. **内联样式为主**：避免复杂 CSS，用内联`style`属性实现简单样式
3. **保持简洁**：不要过度使用 HTML，保持笔记的可维护性
4. **测试兼容性**：不同主题可能影响 HTML 渲染，建议在默认主题下测试
5. **利用容器**：`<div>` + 内联`style`是最实用的组合，可实现 90% 的自定义需求