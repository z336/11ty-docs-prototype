const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItToc = require("markdown-it-toc-done-right");

const anchorSlugify = (s) =>
  encodeURIComponent(
    String(s)
      .trim()
      .toLowerCase()
      .replace(/[.,\/#!$%\^&\*;:{}=_`~()]/g, "")
      .replace(/\s+/g, "-")
  );

// Markdown parsing
const markdown = markdownIt({
  html: true,
  breaks: false,
  typographer: true,
})
  .disable("code")
  .use(markdownItAnchor, {
    slugify: anchorSlugify,
    level: [2, 3],
    tabIndex: false,
    permalink: markdownItAnchor.permalink.headerLink({
      class: "heading-anchor",
    }),
  })
  .use(markdownItToc, {
    containerClass: "flow | table-of-contents",
    containerId: "content",
  });

module.exports = markdown;
