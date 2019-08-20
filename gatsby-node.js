const index = require('./data');

exports.createPages = async ({ actions: { createPage } }) => {
  createPage({
    path: `/`,
    component: require.resolve('./src/templates/index.js'),
    context: { index }
  });
};
