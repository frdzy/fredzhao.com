
const path = require('path');
const { unified } = require('unified');
const remarkParse = require('remark-parse');
const remarkStringify = require('remark-stringify');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  
  const result = await graphql(`
    query {
      mdx(internal: { contentFilePath: { regex: "/resume.mdx$/" } }) {
        body
        frontmatter {
          title
        }
      }
    }
  `);

  // Process MDX content with unified
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkStringify)
    .process(result.data.mdx.body);

  // Create a page that includes the MDX content as static data
  createPage({
    path: "/resume-pdf",
    component: path.resolve("./content/pages/about/ResumePDF.jsx"),
    context: {
      mdxContent: result.data.mdx
    },
  });
};
