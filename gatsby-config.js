require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'jules_codes',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: { typekit: { id: process.env.TYPEKIT_ID } },
    },
  ],
};
