const {html} = require("common-tags");

function LatestPostCard(title, date, description, link) {
    return html`
    <div class="post-card__container">
        <h3 class="post-card__title"><a href="${link}">${title}</a></h3>
        <span class="post-date">${date}</span>
        <p class="post-card__description">${description}</p>
        <span class="post-card__link"><a href="${link}">Read more</a></span>
    </div>
    `;
}

module.exports = LatestPostCard;
