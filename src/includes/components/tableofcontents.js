const { html } = require("code-tag");

// white space before toc is necessary for it to render
function tableofcontents() {
  return html`<div class="table-of-contents-container">
    <h2><span>On this page</span></h2>

    [toc]
  </div>`;
}

module.exports = tableofcontents;
