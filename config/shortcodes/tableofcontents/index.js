const { html } = require("code-tag");

function tableOfContents(content) {
  return html`<div class="grid">${content}</div>`;
}

module.exports = tableOfContents;
