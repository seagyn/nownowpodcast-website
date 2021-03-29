const remarkHtml = require("remark-html");
const remarkFrontmatter = require("remark-frontmatter");

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkHtml, remarkFrontmatter],
  },
});

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "md", "mdx"]
});
