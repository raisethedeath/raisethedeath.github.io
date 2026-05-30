import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { FullSlug, resolveRelative } from "../util/path"
import { Date, getDate } from "./Date"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"
import style from "./styles/timeline.scss"

interface TimelineOptions {
  /** 显示的标题 */
  title?: string
  /** 最多显示条数，不设则显示全部 */
  limit?: number
  /** 按创建时间还是修改时间排序 */
  dateType?: "created" | "modified"
  /** 排序方向："asc" 从旧到新，"desc" 从新到旧 */
  sortOrder?: "asc" | "desc"
}

const defaultOptions: TimelineOptions = {
  limit: undefined,
  dateType: "created",
  sortOrder: "desc",
}

export default ((userOpts?: Partial<TimelineOptions>) => {
  const opts = { ...defaultOptions, ...userOpts }

  const Timeline: QuartzComponent = ({
    allFiles,
    fileData,
    displayClass,
    cfg,
  }: QuartzComponentProps) => {
    // 按时间排序
    const sorted = [...allFiles]
      .filter((f) => f.dates && f.dates[opts.dateType!])
      .sort((a, b) => {
        const dateA = getDate(cfg, a)?.getTime() ?? 0
        const dateB = getDate(cfg, b)?.getTime() ?? 0
        return opts.sortOrder === "asc" ? dateA - dateB : dateB - dateA
      })

    const displayed = opts.limit ? sorted.slice(0, opts.limit) : sorted

    return (
      <div class={classNames(displayClass, "timeline")}>
        <h3>{opts.title ?? "📅 时间轴"}</h3>
        <div class="timeline-list">
          {displayed.map((page) => {
            const title = page.frontmatter?.title ?? i18n(cfg.locale).propertyDefaults.title
            const tags = page.frontmatter?.tags ?? []
            // 从 slug 提取分类（第一级目录）
            const slugParts = page.slug?.split("/") ?? []
            const category = slugParts.length > 1 ? slugParts[0] : null

            return (
              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                  <span class="timeline-date">
                    <Date date={getDate(cfg, page)!} locale={cfg.locale} />
                  </span>
                  <a
                    href={resolveRelative(fileData.slug!, page.slug!)}
                    class="internal timeline-title"
                  >
                    {title}
                  </a>
                  {category && <span class="timeline-category">{category}</span>}
                  {tags.length > 0 && (
                    <div class="timeline-tags">
                      {tags.map((tag) => (
                        <a
                          class="internal tag-link"
                          href={resolveRelative(fileData.slug!, `tags/${tag}` as FullSlug)}
                        >
                          {tag}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  Timeline.css = style
  return Timeline
}) satisfies QuartzComponentConstructor
