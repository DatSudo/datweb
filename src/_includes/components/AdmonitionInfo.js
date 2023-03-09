const {html} = require("common-tags");

function AdmonitionInfo(content, title="Info") {
    return html`
        <div class="quote-info">
        <i class="fa-sharp fa-solid fa-circle-info quote-title-symbol"></i> <span class="quote-title">${title}</span>
        <div class="quote-content">${content}</div>
        </div>
    `;
}

module.exports = AdmonitionInfo;
