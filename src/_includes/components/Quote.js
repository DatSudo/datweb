const {html} = require("common-tags");

function Quote(content, qref, title="Quote") {
    if (qref == null || qref == "") qref = "";
    else qref = "&mdash; " + qref;
    return html`
        <div class="quote">
        <i class="fa-sharp fa-solid fa-quote-left quote-title-symbol"></i> 
        <span class="quote-title">${title}</span>
        <div class="quote-content">
        ${content}
        <div class="quote-ref">
        <div>${qref}</div>
        </div>
        </div>
        </div>
    `;
}

module.exports = Quote;
