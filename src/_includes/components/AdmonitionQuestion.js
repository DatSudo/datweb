const {html} = require("common-tags");

function AdmonitionQuestion(content, title="Question") {
    return html`
        <div class="quote-question">
        <i class="fa-sharp fa-solid fa-circle-question quote-title-symbol"></i> <span class="quote-title">${title}</span>
        <div class="quote-content">${content}</div>
        </div>
    `;
}

module.exports = AdmonitionQuestion;
