import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Header: QuartzComponent = ({ children }: QuartzComponentProps) => {
    const links = opts?.links ?? {}
    return (
      <>
        {children.length > 0 ? children : null}
        <nav class="header-nav">
          {Object.entries(links).map(([text, link]) => (
            <a href={link}>{text}</a>
          ))}
        </nav>
      </>
    )
  }

  Header.css = `
  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 2rem 0;
    gap: 1.5rem;
    flex-wrap: wrap;
  }

  header h1 {
    margin: 0;
    flex: auto;
  }

  .header-nav {
    display: flex;
    flex-direction: row;
    gap: 1.2rem;
    flex-wrap: wrap;
    align-items: center;
  }

  .header-nav a {
    font-weight: 500;
    font-size: 0.95rem;
    text-decoration: none;
    opacity: 0.75;
    transition: opacity 0.2s;
  }

  .header-nav a:hover {
    opacity: 1;
  }
  `
  return Header
}) satisfies QuartzComponentConstructor
