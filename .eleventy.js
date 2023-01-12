const { load } = require("js-yaml");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const { readableDate, htmlDateString, getFullYear } = require("./config/filters/date");
const markdown = require("./config/plugins/markdown");
const callout = require("./src/includes/components/callout");
const contact = require("./src/includes/components/contact");
const details = require("./src/includes/components/details");
const image = require("./src/includes/components/image");
const search = require("./src/includes/components/search");
const tableofcontents = require("./src/includes/components/tableofcontents");

module.exports = function (eleventyConfig) {
  // Watch Sass (watch sass during development)
  eleventyConfig.addWatchTarget("./src/assets/sass/");

  // Parse Yaml files (plugin for parsing yaml)
  eleventyConfig.addDataExtension("yaml", load);

  // Passthroughs (files we want 11ty to know about and include in the build)
  eleventyConfig.addPassthroughCopy("./src/assets/fonts/");
  eleventyConfig.addPassthroughCopy("./src/assets/images/");
  eleventyConfig.addPassthroughCopy("./src/assets/scripts/");

  // Filters (./config/filters/)
  eleventyConfig.addFilter("readableDate", readableDate);
  eleventyConfig.addFilter("htmlDateString", htmlDateString);
  eleventyConfig.addFilter("getFullYear", getFullYear);

  // Plugins (./config/plugins/)
  eleventyConfig.setLibrary("md", markdown);
  eleventyConfig.addPlugin(syntaxHighlight);

  // Shortcodes (./src/includes/components/)
  eleventyConfig.addPairedShortcode("callout", callout);
  eleventyConfig.addPairedShortcode("details", details);
  eleventyConfig.addLiquidShortcode("image", image);
  eleventyConfig.addShortcode("search", search);
  eleventyConfig.addShortcode("contact", contact);
  eleventyConfig.addShortcode("tableofcontents", tableofcontents);

  return {
    dir: {
      input: "src",
      data: "data",
      layouts: "layouts",
      includes: "includes",
    },
  };
};
