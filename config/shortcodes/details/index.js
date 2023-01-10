const { html } = require("code-tag");

function details(content, detailsClass, summary) {
  return html`<details class="${detailsClass}">
    <summary>${summary}</summary>
    ${content}
  </details>`;
}

module.exports = details;
