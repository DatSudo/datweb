const {html} = require("common-tags");

function AdmonitionWarning(content, title="Warning") {
    return html`
        <div class="quote-warning">
        <i class="fa-sharp fa-solid fa-triangle-exclamation quote-title-symbol"></i> <span class="quote-title">${title}</span>
        <div class="quote-content">${content}</div>
        </div>
    `;
}

module.exports = AdmonitionWarning;
