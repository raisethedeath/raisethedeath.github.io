import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [
    Component.Header({
      links: {
        "🏠 Home": "/",
        "⚛️ Physics": "/Physics/Some_Notes/Physics",
        "🔢 Math": "/Mathematics/Mathematics",
        "💻 CS": "/Computer Science/CS",
        "📚 Literatures": "/Physics/Literatures",
        "📓 Diary": "/Diary/Diary",
        "📅 Timeline": "/timeline",
        "📝 About": "/about",
      },
    }),
  ],
  afterBody: [],
  footer: Component.Footer({
    links: {
      About: "/about",
      HomePage:"/HomePage",
      GitHub: "https://github.com/raisethedeath/raisethedeath.github.io",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ConditionalRender({
      component: Component.Timeline({ title: "📅 Timeline", sortOrder: "desc" }),
      condition: (page) => page.fileData.slug === "timeline",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
    // Component.DesktopOnly(Component.Timeline({ limit: 10, title: "📅 时间轴" })),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [],
}
