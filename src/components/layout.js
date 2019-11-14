import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"

const {
  Provider: LocaleProvider,
  Consumer: LocaleConsumer
} = React.createContext()



const Layout = ({ children, path, locale,siteTitle }) => {
  const data = useStaticQuery(graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }}`)
  return(  
    <LocaleProvider value={locale}>
      <>
      <Header  siteTitle={siteTitle}/>
      <div 
      style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
            {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
      </div>
     </>
    </LocaleProvider>
  )
}

export { LocaleConsumer }

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  path: PropTypes.string,
  locale: PropTypes.string.isRequired
}

Layout.defaultProps = {
  path: '/'
}

export default Layout