// Eleventy settings //
const customEngine = "njk"
const SETTINGS = {
	dir: {
		input: "src",           // default: "."
		includes: "_includes",  // default: "_includes"
		data: "_data",          // default: "_data"
		output: "_site"
	},
	templateFormats: [
		"md",
		"njk",
		"html",
	],
	markdownTemplateEngine: customEngine,
	htmlTemplateEngine: customEngine,
    dateTemplateEngine: customEngine,
    pathPrefix: "/",
}
const EXCLUDE = ["all", "nav", "post", "posts"];

// Short code JS //
const SHORTCODE_PATH = "./src/_includes/components/"
const latestPostCard = require(SHORTCODE_PATH + "LatestPostCard");
const Quote = require(SHORTCODE_PATH + "Quote");
const AdmonitionNote = require(SHORTCODE_PATH + "AdmonitionNote");
const AdmonitionInfo = require(SHORTCODE_PATH + "AdmonitionInfo");
const AdmonitionWarning = require(SHORTCODE_PATH + "AdmonitionWarning");
const AdmonitionQuestion = require(SHORTCODE_PATH + "AdmonitionQuestion");

// Plugins //
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const automaticNoopener = require('eleventy-plugin-automatic-noopener');
const mathjaxPlugin = require("eleventy-plugin-mathjax");
const embedYouTube = require("eleventy-plugin-youtube-embed");
const embedTwitter = require("eleventy-plugin-embed-twitter");
const { DateTime } = require("luxon");

// markdown-it plugins //
const markdownItAnchor = require("markdown-it-anchor");
const markdownItFootnote = require("markdown-it-footnote");
const markdownItTaskLists = require("markdown-it-task-lists");

// Settings //
const automaticNoopenerSettings = {
	elements: ["a", "area", "form"],
	noopener: true,
	noreferrer: true,
}
const mathjaxSettings = {
	output: "chtml",
	chtml: {
		fontURL: "https://cdn.jsdelivr.net/npm/mathjax@3/es5/output/chtml/fonts/woff-v2",
		// fontURL: "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.6/fonts/HTML-CSS/Neo-Euler/otf",
		// fontURL: "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.6/fonts/HTML-CSS/Asana-Math/otf",
	},
	tex: {
		processEscapes: true
	}
}
const embedYouTubeSettings = {
	lite: true,
	lazy: true,
	modestBranding: true
}
const embedTwitterSettings = {
	align: "center",
	conversation: "none",
	doNotTrack: true,
	theme: "dark"
}

// Functions //
function filterByCategList(categories) {
	// Exclude unnecessary posts from filtering by categ
	return (categories || [])
		.filter(categ => EXCLUDE
		.indexOf(categ) === -1);
}

function getAllCategs(collection) {
	let categSet = new Set();
	for(let item of collection) { (item.data.categories || []).forEach(categ => categSet.add(categ)); }
	return Array.from(categSet);
}

function getCategsList(collection) {
	const categsSet = new Set();
	collection.getAll().forEach((item) => {
		if (!item.data.categories) return
			item.data.categories
				.filter(categ => !EXCLUDE.includes(categ))
				.forEach(categ => categsSet.add(categ))
	});
	return [...categsSet].sort((a, b) => b.localeCompare(a))
}

function getTagsList(collection) {
	const tagsSet = new Set();
  	collection.getAll().forEach((item) => {
  		if (!item.data.tags) return
  			item.data.tags
  				.filter(tag => !EXCLUDE.includes(tag))
  				.forEach(tag => tagsSet.add(tag))
  	})
  	return [...tagsSet].sort((a, b) => b.localeCompare(a))
}

function readableDate(dateObj, format, zone) {
	// Change date format with luxon's DateTime
	return DateTime.fromJSDate(dateObj, {zone: zone || "utc" })
				   .toFormat(format || "yyyy LLLL dd");
}

function htmlDateString(dateObj) {
	return DateTime.fromJSDate(dateObj, {zone: 'utc'})
				   .toFormat('yyyy-LL-dd');
}

function removeYear(dateObj) {
	return DateTime.fromJSDate(dateObj, {zone: 'utc'})
				   .toFormat('LLLL dd');
}

function groupPostByYear(pages = []) {
	const pagesMap = {};
	for (const page of [...pages]) {
		const pageYear = page.date.getFullYear();
		const yearlyPosts = pagesMap[pageYear] || [pageYear, []];
		yearlyPosts[1].push(page);
		pagesMap[pageYear] = yearlyPosts;
	}
	return Object.values(pagesMap)
		// Sort the year map in descending order.
		.sort(([year1], [year2]) => year2 - year1);
}

module.exports = function(eleventyConfig) {
	// Plugins
	eleventyConfig.addPlugin(syntaxHighlight);
	eleventyConfig.addPlugin(automaticNoopener, automaticNoopenerSettings);
	eleventyConfig.addPlugin(mathjaxPlugin, mathjaxSettings);
	eleventyConfig.addPlugin(embedYouTube, embedYouTubeSettings);
	eleventyConfig.addPlugin(embedTwitter, embedTwitterSettings);

	// Passthrough copies
    eleventyConfig.addPassthroughCopy("src/assets/");
    eleventyConfig.addPassthroughCopy("src/css/");

	// Watch targets
    eleventyConfig.addWatchTarget("src/css/");

	//------------------ Filters ------------------//

	// Filter all the categories from a collection
    eleventyConfig.addFilter("getAllCategs", collection => {return getAllCategs(collection);});
	
	// Remove junks from categ list
    eleventyConfig.addFilter("filterCategList", filterByCategList);

	// Format dates
	eleventyConfig.addFilter("readableDate", (dateObj) => {return readableDate(dateObj)});
	eleventyConfig.addFilter("htmlDateString", (dateObj) => {return htmlDateString(dateObj)})
	eleventyConfig.addFilter("removeYear", (dateObj) => {return removeYear(dateObj);});
	eleventyConfig.addFilter("groupByYear", groupPostByYear);

    //------------------ Collections ------------------//
    eleventyConfig.addCollection("posts", collection => {return collection.getFilteredByGlob("src/posts/*.md");})
    eleventyConfig.addCollection("sections", collection => {return collection.getFilteredByGlob("src/*.md");})
	eleventyConfig.addCollection('categsList', collection => {return getCategsList(collection);})
	eleventyConfig.addCollection('tagsList', collection => {return getTagsList(collection);})
 
    //------------------ Short codes ------------------//
    eleventyConfig.addShortcode("LatestPostCard", latestPostCard);
	eleventyConfig.addShortcode("Quote", Quote);
	eleventyConfig.addShortcode("Note", AdmonitionNote);
	eleventyConfig.addShortcode("Info", AdmonitionInfo);
	eleventyConfig.addShortcode("Warning", AdmonitionWarning);
	eleventyConfig.addShortcode("Question", AdmonitionQuestion);

	//------------------ Markdown library settings ------------------//
	eleventyConfig.amendLibrary("md", mdLib => {
		mdLib.use(markdownItAnchor, {
				permalink: markdownItAnchor.permalink.ariaHidden({
					placement: "after",
					class: "header-anchor",
					symbol: "#",
					ariaHidden: false,
				}),
				level: [1,2,3,4],
				slugify: eleventyConfig.getFilter("slugify")
		});
		mdLib.use(markdownItFootnote);
		mdLib.use(markdownItTaskLists);
	});
    
    return SETTINGS;
}
