require("dotenv").config()
const queries = require("./src/utils/algolia_queries")

module.exports = {
  flags: {
    DEV_SSR: false,
  },
  siteMetadata: {
    title: `Subsidiário`,
    description: `Sou um homem que não tem ideias, nem quer tê-las,
    e nem razão em nada tem. `,
    author: `Cícero Marra`,
    siteUrl: `https://subsidiario.com`,
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-scroll-indicator",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "54516992",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
      __key: "posts",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/assets/img`,
      },
      __key: `uploads`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
      __key: `images`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
      __key: `pages`,
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 960,
              linkImagesToOriginal: true,
            },
          },
          `gatsby-remark-lazy-load`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-scroll-indicator`,
      options: {
        // Configure color of the scroll indicator
        color: "linear-gradient(to right, #fffff0, #d0d0c4)",
        // Height of the scroll indicator
        height: "3px",
        // Configure paths where the scroll indicator will appear
        paths: [ '/*'],
        // Configure the z-index of the indicator element
        zIndex: `9999`,
      },
    },
    {
      resolve: `gatsby-plugin-algolia-search`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 10000,
        enablePartialUpdates: true,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["EB Garamond", "Montserrat", "Libre Baskerville"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Subsidiário`,
        short_name: `Subsidiário`,
        start_url: `/`,
        background_color: `#900020`,
        theme_color: `#900020`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
};
