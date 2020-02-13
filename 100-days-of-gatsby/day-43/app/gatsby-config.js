// Snipcart
const SNIPCART_TEST_API_KEY = "OWQ1NDc3ODItNTY2MC00NzQ1LTlkOGUtMTZkMzBiNzA3NGQxNjM3MTcwNjE5OTQ0NTQ4Nzk1"
// Default to the test API key
const SNIPCART_API_KEY = process.env.SNIPCART_API_KEY || SNIPCART_TEST_API_KEY

module.exports = {
  siteMetadata: {
    title: `[DEMO] Snipcart`,
    author: `Rob Brennan`,
    description: `A starter blog exploring Gatsby and Snipcart integration`,
    siteUrl: `https://gatsby-starter-blog-demo.netlify.com/`,
    social: {
      twitter: `therobbrennan`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: 'gatsby-plugin-snipcartv3',
      options: {
        apiKey: SNIPCART_API_KEY,
        // Explicitly set to false for none; otherwise it will default to a jquery include
        jquery: false,
        /**
         * Details for additional options can be found at https://github.com/danielholdsworth/gatsby-plugin-snipcartv3
         *
         * autopop: false,  // Determines whether the cart should open automatically when a product is added
         * js: '',          // Use this if you want to point to a Snipcart JavaScript file
         * styles: '',      // Use this if you want to point to a Snipcart stylesheet
         */
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
