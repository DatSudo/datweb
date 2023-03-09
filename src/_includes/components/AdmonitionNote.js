const {html} = require("common-tags");

function AdmonitionNote(content, title="Note") {
    return html`
    <div class="quote-note">
    <i class="fa-sharp fa-solid fa-pen-to-square quote-title-symbol"></i> <span class="quote-title">${title}</span>
    <div class="quote-content">${content}</div>
    </div>
    `;
}

module.exports = AdmonitionNote;
