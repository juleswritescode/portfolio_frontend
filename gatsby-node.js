var path = require('path');

export async function createPages({ graphql, actions }) {
  // 1. create blog post pages.
  await createBlogPosts(graphql, actions);
}

async function createBlogPosts(graphql, actions) {
  var blogTemplate = path.resolve('./src/templates/BlogPost.js');

  var { data } = await graphql(`
    query {
      posts: allSanityPost {
        totalCount
        nodes {
          id
          slug {
            current
          }
        }
      }
    }
  `);

  (data.posts.nodes || []).forEach(function createPostPage(post) {
    actions.createPage({
      path: `/post/${post.slug.current}`,
      component: blogTemplate,
      context: {
        id: post.id,
      },
    });
  });
}
