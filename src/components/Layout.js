/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import {useStaticQuery, graphql} from 'gatsby'

import Header from './Header'
import Footer from './Footer'
import DebugGrid from './DebugGrid'

import '../styles/layout.css'

const Layout = ({children, location}) => {
  const {allSanitySiteSettings} = useStaticQuery(graphql`
  query allSanitySiteSettings {
    allSanitySiteSettings {
      edges {
        node {
          title
        }
      }
      }
    }
  `)

  const settings = allSanitySiteSettings.edges[0].node

  return (
    <>
      <Header
        siteTitle={settings.title}
        location={location || false}
      />

      <main>{children}</main>

      <Footer
        siteTitle={settings.title}
      />
      <DebugGrid />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
