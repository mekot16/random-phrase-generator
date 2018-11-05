'use strict';
//// DECLARATIONS ////
var fs = require('fs');
var nounsData = fs.readFileSync('nouns.json');
var adjsData = fs.readFileSync('adjectives.json');
var nouns = JSON.parse(nounsData).nouns;
var adjs = JSON.parse(adjsData).adjs;

//// HELPER FUNCTIONS ////
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//// OUTPUT SECTION ////
var randNoun = capitalizeFirstLetter(nouns[Math.floor(Math.random()*nouns.length)]);
var randAdj = capitalizeFirstLetter(adjs[Math.floor(Math.random()*adjs.length)]);
console.log("");
console.log(randAdj + ' ' +randNoun);
console.log("");
