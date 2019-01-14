'use strict';
//// DECLARATIONS ////
const fs = require('fs');
const nounsData = fs.readFileSync('nouns.json');
const adjsData = fs.readFileSync('adjectives.json');
const nouns = JSON.parse(nounsData).nouns;
const adjs = JSON.parse(adjsData).adjs;

//// HELPER FUNCTIONS ////
/**
 * Generates a noun.
 */
function getNoun() {
    return capitalizeFirstLetter(nouns[Math.floor(Math.random()*nouns.length)]);
}

/**
 * Generates an adjective.
 */
function getAdjective() {
    return capitalizeFirstLetter(adjs[Math.floor(Math.random()*adjs.length)]);
}

/**
 * Capitalizes the first letter of a string.
 * @param {string} string The string to capitalize.
 */
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Generates a random string based on the mask passed in.
 * @param {array} mask The string mask. Accepts 'n' for noun and 'a' for ajective.
 */
function generateString(mask) {
    return mask.map(function(item) {
        switch (item.toLowerCase()) {
            case 'n': // noun
                return getNoun();
            case 'a': // adjective
                return getAdjective();
            default: // error
                return false;
        }
    });
}

//// MAIN SECTION ////
const defaultMask = ['a','n'];
const userMask =  process.argv.slice(2);
let mask = defaultMask; // use default mask if one was not entered
if (userMask.length && userMask.length <= 10) { // limit length to 10
    mask = userMask;
}
// generate the string & verify user input was correct
let output = generateString(mask);
let checkOutput = output.filter(function(item){return item;});
// re-generate w/ default mask if incorrect user input
if (output.length !== checkOutput.length) {
    output = generateString(defaultMask);
}
// print the string
output = output.join(' ');
console.log(output);
