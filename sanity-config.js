module.exports = {
  sanity: {
    projectId: process.env.GATSBY_SANITY_PROJECTID,
    token: process.env.GATSBY_SANITY_TOKEN,
    dataset: process.env.GATSBY_SANITY_DATASET || 'production',
    useCdn: true,
  },
};
