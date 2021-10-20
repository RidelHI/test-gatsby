import React, { useState } from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  const [showWidget, setShowWidget] = useState(true)

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>

      <section>
        <div>
          <button onClick={() => setShowWidget(prev => !prev)}>Toggle</button>
        </div>
        {showWidget && (
          <div data-mc-src="ed0faf9c-0fdb-4ecc-ae13-4f571347bdf9#instagram"></div>
        )}
        <Helmet>
          <script
            src="https://cdn2.woxo.tech/dev/a.js#6102fb7cf40a1300153d9dd9"
            async
            data-usrc
          ></script>
        </Helmet>
      </section>

      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
