const { EleventyServerlessBundlerPlugin } = require("@11ty/eleventy");
const sortedColors = require('./_data/sortedColors.json');
module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addCollection("colors", function(collectionApi) {
        return Object.keys(sortedColors).map(color => {
            return {
                name:color,
                colors: sortedColors[color],
            }
        })
    });
}