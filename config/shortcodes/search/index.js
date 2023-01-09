const { html } = require("code-tag");

function search() {
  return html`<input
    class="search"
    inputmode="search"
    type="search"
    name="q"
    autocomplete="off"
    placeholder="Search articles..."
    aria-label="Search articles"
  />`;
}

module.exports = search;
