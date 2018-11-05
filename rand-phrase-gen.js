'use strict';
//// DECLARATIONS ////
const fs = require('fs');
const nounsData = fs.readFileSync('nouns.json');
const adjsData = fs.readFileSync('adjectives.json');
const nouns = JSON.parse(nounsData).nouns;
const adjs = JSON.parse(adjsData).adjs;

//// HELPER FUNCTIONS ////
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//// OUTPUT SECTION ////
let randNoun = capitalizeFirstLetter(nouns[Math.floor(Math.random()*nouns.length)]);
let randAdj = capitalizeFirstLetter(adjs[Math.floor(Math.random()*adjs.length)]);
console.log("");
console.log(`${randAdj} ${randNoun}`);
console.log("");
