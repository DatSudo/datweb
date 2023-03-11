// Eleventy settings //
const customEngine = "njk"
const EXCLUDE = ["all", "nav", "post", "posts"];
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

// Short code JS //
const SHORTCODE_PATH = "./src/_includes/components/"
const latestPostCard = require(SHORTCODE_PATH + "LatestPostCard");
const quote = require(SHORTCODE_PATH + "Quote");
const admonitionNote = require(SHORTCODE_PATH + "AdmonitionNote");
const admonitionInfo = require(SHORTCODE_PATH + "AdmonitionInfo");
const admonitionWarning = require(SHORTCODE_PATH + "AdmonitionWarning");
const admonitionQuestion = require(SHORTCODE_PATH + "AdmonitionQuestion");

// Plugins //
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const automaticNoopener = require('eleventy-plugin-automatic-noopener');
const mathjaxPlugin = require("eleventy-plugin-mathjax");
const embedYouTube = require("eleventy-plugin-youtube-embed");
const { DateTime } = require("luxon");

// markdown-it plugins //
const markdownItAnchor = require("markdown-it-anchor");
const markdownItFootnote = require("markdown-it-footnote");
const markdownItTaskLists = require("markdown-it-task-lists");
const markdownItAdmonition = require("markdown-it-admonition");

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

// Functions //
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

	// Passthrough copies
    eleventyConfig.addPassthroughCopy("src/assets/");
    eleventyConfig.addPassthroughCopy("src/css/");

	// Watch targets
    eleventyConfig.addWatchTarget("src/css/");

	//------------------ Filters ------------------//

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
	eleventyConfig.addShortcode("Quote", quote);
	eleventyConfig.addShortcode("Note", admonitionNote);
	eleventyConfig.addShortcode("Info", admonitionInfo);
	eleventyConfig.addShortcode("Warning", admonitionWarning);
	eleventyConfig.addShortcode("Question", admonitionQuestion);

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
		mdLib.use(markdownItAdmonition);
	});
    
    return SETTINGS;
}
