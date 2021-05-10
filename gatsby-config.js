module.exports = {
  siteMetadata: {
    title: "LD Gatsby Storyblok Starter",
    description:
      "Starter kit to help create awesome things using Gatsby, powered by Storyblok.",
    siteUrl: "https://www.luckyduck.co/",
  },
  plugins: [
    {
      resolve: "gatsby-source-storyblok",
      options: {
        accessToken: `1UVKaOJr3RjY1S2MCfSR1wtt`,

        homeSlug: "home",
        version: "published",
        resolveRelations: [
          //Add Relations here
          //Example: page.menu
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Lucky Duck Gatsby Storyblok Starter`,
        short_name: `ld.gatsby-storyblok-start`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: "src/assets/images/favicon.png",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `${__dirname}/src/assets/svg/`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
        fileName: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `poppins\:100,200,300,400,500,600,700,800`, //TODO: Remove me if not needed!
        ],
        display: "swap",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sass`,
  ],
};
