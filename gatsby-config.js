module.exports = {
  siteMetadata: {
    title: 'Noviny Writes',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'noviny.me',
        short_name: 'noviny',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/noviny.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogs`,
        path: `${__dirname}/src/blogs`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages-md`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-unwrap-images`,
          // I think this only work for local images and not hosted.
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 740,
              wrapperStyle: `margin: 32px 0;`,
            },
          },
          {
            resolve: `gatsby-remark-smartypants`,
            options: {
              dashes: `oldschool`,
            },
          },
          {
            resolve: `gatsby-remark-prettier`,
            options: {
              usePrettierrc: true,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            aliases: {
              classPrefix: 'language-',
            },
          },
          `gatsby-remark-a11y-emoji`,
        ],
      },
    },
    'gatsby-plugin-offline',
  ],
};
