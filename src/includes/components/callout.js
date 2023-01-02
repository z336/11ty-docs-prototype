const { html } = require("code-tag");

function callout(content, calloutClass, calloutType) {
  return html`<aside class="${calloutClass}">
    <p><strong>${calloutType}</strong></p>
    <p>${content}</p>
  </aside>`;
}

module.exports = callout;
