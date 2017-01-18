var sonnetDiv = document.getElementById("sonnet").textContent;
var newSonnet1;
var newSonnet2;

console.log("Sonnet: \n", sonnetDiv);


console.log("Strating Position of the word 'orphans': ", sonnetDiv.search("orphans"));
console.log("Number of Characters in Sonnet: ",sonnetDiv.length);

// Replace 'winter' with 'yuletide'
newSonnet1 = sonnetDiv.replace("winter", "yuletide");
console.log("New Sonnet: \n", newSonnet1);


// Replace 'the' with 'a large'
newSonnet2 = newSonnet1.replace(" the ", " a large ");
console.log("New Sonnet2: \n", newSonnet2);