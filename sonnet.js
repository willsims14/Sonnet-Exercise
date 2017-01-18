// Get HTML element
var sonnetDiv = document.getElementById("sonnet").textContent;

// Variables
var newSonnet1;
var newSonnet2;

// Replace words in string
newSonnet1 = sonnetDiv.replace("winter", "yuletide");
newSonnet2 = newSonnet1.replace(" the ", " a large ");


// Log new sonnets
console.log("New Sonnet2: \n", newSonnet2);
console.log("New Sonnet: \n", newSonnet1);
console.log("Number of Characters in Sonnet: ",sonnetDiv.length);
console.log("Sonnet: \n", sonnetDiv);
console.log("Strating Position of the word 'orphans': ", sonnetDiv.search("orphans"));