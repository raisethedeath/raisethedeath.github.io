import { FullSlug, resolveRelative, SimpleSlug } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { QuartzPluginData } from "../plugins/vfile"
import { classNames } from "../util/lang"
import style from "./styles/categoryList.scss"

interface CategoryListOptions {
  /** 显示的标题 */
  title?: string
  /** 最多显示多少个分类 */
  limit?: number
  /** 是否显示计数 */
  showCount?: boolean
  /**
   * 分类名 → 目标 slug 的映射
   * 例如：{ "Physics": "Physics/Physics Note" } 让 "Physics" 链接到 Physics Note 页面
   * 未映射的分类保持默认行为（链接到文件夹列表页）
   */
  categoryMapping?: Record<string, string>
}

const defaultOptions: CategoryListOptions = {
  showCount: true,
  categoryMapping: {},
}

// 从 slug 提取一级分类名
function extractCategory(slug: string | undefined): string | null {
  if (!slug) return null
  const parts = slug.split("/")
  // 如果文件在子目录中，第一个部分就是分类
  if (parts.length > 1) {
    return parts[0]
  }
  return null
}

export default ((userOpts?: Partial<CategoryListOptions>) => {
  const opts = { ...defaultOptions, ...userOpts }

  const CategoryList: QuartzComponent = ({
    fileData,
    allFiles,
    displayClass,
  }: QuartzComponentProps) => {
    // 收集所有分类并计数
    const categoryMap = new Map<string, number>()
    for (const file of allFiles) {
      const cat = extractCategory(file.slug)
      if (cat && cat !== "tags" && cat !== "index") {
        categoryMap.set(cat, (categoryMap.get(cat) ?? 0) + 1)
      }
    }

    // 按数量降序排序
    const categories = [...categoryMap.entries()].sort((a, b) => b[1] - a[1])
    const displayed = opts.limit ? categories.slice(0, opts.limit) : categories

    if (displayed.length === 0) return null

    return (
      <nav class={classNames(displayClass, "category-list")} aria-label="categories">
        {opts.title && <span class="category-list-title">{opts.title}</span>}
        {displayed.map(([cat, count]) => {
          // 如果有自定义映射则使用映射的 slug，否则使用默认的文件夹路径
          const targetSlug = opts.categoryMapping?.[cat]
            ? (opts.categoryMapping[cat] as FullSlug)
            : (`${cat}/` as FullSlug)
          return (
            <a
              href={resolveRelative(fileData.slug!, targetSlug)}
              class="internal category-link"
            >
              {cat}
              {opts.showCount && <span class="category-count">{count}</span>}
            </a>
          )
        })}
      </nav>
    )
  }

  CategoryList.css = style
  return CategoryList
}) satisfies QuartzComponentConstructor
