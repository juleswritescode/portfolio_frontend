var path = require('path');

exports.createPages = async function ({ graphql, actions }) {
    await Promise.all([
        createBlogPosts(graphql, actions),
        createProjectPages(graphql, actions),
    ]);
};

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

async function createProjectPages(graphql, actions) {
    var projectTemplate = path.resolve('./src/templates/Project.js');

    var { data } = await graphql(`
        query {
            projects: allSanityProject {
                nodes {
                    id
                    slug {
                        current
                    }
                }
            }
        }
    `);

    (data.projects.nodes || []).forEach(function createProjectPage(project) {
        actions.createPage({
            path: `/project/${project.slug.current}`,
            component: projectTemplate,
            context: {
                id: project.id,
            },
        });
    });
}
