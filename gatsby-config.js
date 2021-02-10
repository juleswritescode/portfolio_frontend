require('dotenv').config();
const sanityConfig = require('./sanity-config').sanity;

module.exports = {
    siteMetadata: {
        title: 'Jules Codes!',
        description: 'Julian Domke enjoys coding and music.',
    },
    plugins: [
        'gatsby-plugin-styled-components',
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-web-font-loader',
            options: { typekit: { id: process.env.TYPEKIT_ID } },
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Jules Portfolio',
                display: 'standalone',
                short_name: 'judocodes',
                start_url: '/',
                icon: 'src/images/favicon.png',
            },
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /assets/,
                },
            },
        },
        {
            resolve: 'gatsby-source-sanity',
            options: {
                ...sanityConfig,
                watchMode: process.env.NODE_ENV == 'production' ? false : true,
            },
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
    ],
};
