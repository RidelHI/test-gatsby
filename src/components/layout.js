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
          <div>
            <div
              loading="lazy"
              data-mc-src="3087aa44-3224-4f0b-9f85-580f7bc56dd9#instagram"
            ></div>
            <div data-mc-src="d09f499e-d6ab-4b7d-9685-3409b26bacbb#instagram"></div>
            <div data-mc-src="ed79a98f-5b9d-458d-bd85-33d74c7b9b85#instagram"></div>
            <div data-mc-src="42eb8385-d2ed-4e4b-a4cc-de8b1a9f0961#tiktok"></div>
            <div data-mc-src="7da20b61-0340-4a53-b4e2-384b103656af#tiktok"></div>
            <div data-mc-src="92bedd17-6aa7-490a-98e8-9fe54f73fecb#twitter"></div>
            <div data-mc-src="0ec85d56-1e29-4b05-ad65-da51ef00078f#twitter"></div>
            <div
              loading="lazy"
              data-mc-src="98e88454-e0c5-4558-87c0-2d353b3c96ef#youtube"
            ></div>
            <div
              loading="lazy"
              data-mc-src="4b602557-6b6e-4e3e-95f3-5ed426eaa27b#instagram"
            ></div>
            <div data-mc-src="ba046ad0-ed36-4116-bcd9-2bf7374deeab#youtube"></div>
          </div>
        )}
        <Helmet>
          <script
            src="https://cdn.front10.net/front10/runtime/1.0.61/usrc-lite/a.js"
            async
            data-usrc
          ></script>
          <script
            src="https://cdn.front10.net/front10/runtime/1.0.61/usrc-lite/a.js#60b631ac8b9c1f00157e8fa2"
            async
            data-usrc
          ></script>

          <script
            src="https://cdn.front10.net/front10/runtime/1.0.61/usrc-lite/a.js#6006f1a6fae1e200151ed54a"
            async
            data-usrc
          ></script>

          <script
            src="https://cdn.front10.net/front10/runtime/1.0.61/usrc-lite/a.js#60b631158b9c1f00157e8f9b"
            async
            data-usrc
          ></script>

          <script
            src="https://cdn.front10.net/front10/runtime/1.0.61/usrc-lite/a.js#60b631158b9c1f00157e8f9b"
            async
            data-usrc
          ></script>

          <script
            src="https://cdn.front10.net/front10/runtime/1.0.61/usrc-lite/a.js#60b631158b9c1f00157e8f9b"
            async
            data-usrc
          ></script>

          <script
            src="https://cdn.front10.net/front10/runtime/1.0.61/usrc-lite/a.js#60b631158b9c1f00157e8f9b"
            async
            data-usrc
          ></script>

          <script
            src="https://cdn.front10.net/front10/runtime/1.0.61/usrc-lite/a.js#60b631158b9c1f00157e8f9b"
            async
            data-usrc
          ></script>

          <script
            src="https://cdn.front10.net/front10/runtime/1.0.61/usrc-lite/a.js#60b631158b9c1f00157e8f9b"
            async
            data-usrc
          ></script>

          <script
            src="https://cdn.front10.net/front10/runtime/1.0.61/usrc-lite/a.js#60b631158b9c1f00157e8f9b"
            async
            data-usrc
          ></script>

          <div data-mc-src="0257c547-9097-4a93-a72a-9d2b14b75b49#facebook"></div>

          <script
            src="https://cdn.front10.net/front10/runtime/1.0.61/usrc-lite/a.js#60b631158b9c1f00157e8f9b"
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
