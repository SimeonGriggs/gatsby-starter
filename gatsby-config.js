// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})

console.log(`Gatsby environment: ${process.env.NODE_ENV}`)
const isProd = process.env.NODE_ENV === 'production'
const urlProd = `https://example.com`
const urlDev = `http://localhost:8000`
const siteUrl = isProd ? urlProd : urlDev

const siteTitle = `Simeon Griggs Gatsby Starter`

module.exports = {
  siteMetadata: {
    title: siteTitle,
    description: `A highly opinionated, lightly featured starter`,
    author: `@simeonGriggs`,
    siteUrl
  },
  plugins: [
    // SEO Plugins
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl,
        stripQueryString: true
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: isProd ? process.env.GA : null,
        head: true,
        anonymize: true,
        respectDNT: true
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap.xml`,
        env: {
          development: {
            policy: [{userAgent: '*', disallow: ['/']}]
          },
          production: {
            policy: [{userAgent: '*', allow: '/'}]
          }
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteTitle,
        short_name: siteTitle,
        start_url: `/`,
        background_color: `rgba(0,0,255,1)`,
        theme_color: `rgba(0,0,255,1)`,
        display: `minimal-ui`,
        icon: `src/images/starter-icon.png`
      }
    },
    // Content plugins
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: process.env.SANITY_ID,
        dataset: `production`,
        overlayDrafts: !isProd,
        watchMode: !isProd,
        token: process.env.SANITY_TOKEN
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fonts`,
        path: `${__dirname}/src/fonts`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // Development Plugins
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /src\/svg\/.*\.svg/
        }
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
