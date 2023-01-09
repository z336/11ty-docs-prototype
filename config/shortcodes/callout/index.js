const { html } = require("code-tag");

function callout(content, calloutClass, calloutType) {
  return html`<aside class="${calloutClass}">
    <p><strong>${calloutType}</strong></p>
    ${content}
  </aside>`;
}

module.exports = callout;
