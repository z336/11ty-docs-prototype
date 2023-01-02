const { html } = require("code-tag");

function details(content, detailsClass, summary) {
  return html`<details class="${detailsClass}">
    <summary>${summary}</summary>
    <p>${content}</p>
  </details>`;
}

module.exports = details;
