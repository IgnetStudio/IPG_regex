var regexLocation = window.location.href;
var pSplitFirst = document.querySelector(".pSplitFirst").textContent;
var pSplitSecond = document.querySelector(".pSplitSecond").textContent;

var regexPathElements = regexLocation.split("/");

// console.log(regexPathElements.pop()); // index.html (last element)

var pSplitPartsFirst = pSplitFirst.split(/ *- */);
var pSplitPartsSecond = pSplitSecond.split(/ *- */);

// console.log(pSplitPartsFirst); // ["First", "to split"]
// console.log(pSplitPartsSecond); // ["Second", "to split"]

pSplitFirst = pSplitPartsFirst.join(" - ");
pSplitSecond = pSplitPartsSecond.join(" - ");

// console.log(pSplitFirst); // First - to split
// console.log(pSplitSecond); // Second - to split

var pNewFirst = document.querySelector(".pSplitFirst");
var pNewSecond = document.querySelector(".pSplitSecond");

pNewFirst.textContent = pSplitFirst;
pNewSecond.textContent = pSplitSecond;