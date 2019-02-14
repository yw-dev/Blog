
module.exports = {
    siteMetadata: {
        title: `Gatsby Default Starter`,
        description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
        author: `@gatsbyjs`,
        menu: {
            Home: '/',
            //试练
            trial: '/trial',
            //技术
            technology: '/technology',
            //随笔
            essays: '/essays',
            //休闲
            leisure: '/leisure',
            //归档
            archives: '/archives',
            //关于
            about: '/about',
            //留言
            messages: '/messages',
        },
    },
    plugins: [
        'gatsby-plugin-stylus',
        `gatsby-plugin-react-helmet`,
        // gatsby-source-filesystem plugin
        // You can have multiple instances of this plugin
        // to read source nodes from different locations on your
        // filesystem.
        //
        // The following sets up the Jekyll pattern of having a
        // "pages" directory for Markdown files and a "data" directory
        // for `.json`, `.yaml`, `.csv`.
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/src/data/`,
                ignore: [`**/\.*`], // ignore files starting with a dot
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-catch-links`,
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.app/offline
        // 'gatsby-plugin-offline',
        // gatsby-transformer-remark Plugin
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                // CommonMark mode (default: true)
                commonmark: true,
                // Footnotes mode (default: true)
                footnotes: true,
                // Pedantic mode (default: true)
                pedantic: true,
                // GitHub Flavored Markdown mode (default: true)
                gfm: true,
                // Plugins configs
                plugins: [],
            },
        },
    ],
}