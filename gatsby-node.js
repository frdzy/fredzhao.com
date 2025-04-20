
const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  
  const result = await graphql(`
    query {
      mdx(fileAbsolutePath: { regex: "/resume.mdx$/" }) {
        body
        frontmatter {
          title
        }
      }
    }
  `);

  // Create a page that includes the MDX content as static data
  createPage({
    path: "/resume-pdf",
    component: path.resolve("./content/pages/about/ResumePDF.jsx"),
    context: {
      mdxContent: result.data.mdx
    },
  });
};
