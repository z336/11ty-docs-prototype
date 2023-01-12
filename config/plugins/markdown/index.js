const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItLinkAttributes = require("markdown-it-link-attributes");
const markdownItMark = require("markdown-it-mark");
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
      safariReaderFix: true,
    }),
  })
  .use(markdownItLinkAttributes, [
    {
      // match external links
      matcher(href) {
        return href.match(/^https?:\/\//);
      },
      attrs: {
        target: "_blank",
        rel: "noopener",
      },
    },
  ])
  .use(markdownItMark)
  .use(markdownItToc, {
    containerClass: "nav-links",
    format(x, htmlencode) {
      return `<span>${htmlencode(x)}</span>`;
    },
  });

module.exports = markdown;
