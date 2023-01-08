const { load } = require("js-yaml");
const { readableDate, htmlDateString, getFullYear } = require("./config/filters/");
const markdown = require("./config/plugins/");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const { callout, details, image, tableOfContents } = require("./config/shortcodes");

module.exports = function (eleventyConfig) {
  // Watch Sass
  eleventyConfig.addWatchTarget("./src/assets/sass/");

  // Parse Yaml files
  eleventyConfig.addDataExtension("yaml", load);

  // Passthroughs
  eleventyConfig.addPassthroughCopy("./src/assets/fonts/");
  eleventyConfig.addPassthroughCopy("./src/assets/images/");
  eleventyConfig.addPassthroughCopy("./src/assets/scripts/");

  // Filters
  eleventyConfig.addFilter("readableDate", readableDate);
  eleventyConfig.addFilter("htmlDateString", htmlDateString);
  eleventyConfig.addFilter("getFullYear", getFullYear);

  // Plugins
  eleventyConfig.setLibrary("md", markdown);
  eleventyConfig.addPlugin(syntaxHighlight);

  // Shortcodes
  eleventyConfig.addPairedShortcode("callout", callout);
  eleventyConfig.addPairedShortcode("details", details);
  eleventyConfig.addLiquidShortcode("image", image);
  eleventyConfig.addPairedShortcode("tableofcontents", tableOfContents);

  return {
    dir: {
      input: "src",
      data: "data",
      layouts: "layouts",
      includes: "includes",
    },
  };
};
