var regexNewFiles = [
    "first-thumb-150x150.jpg",
    "second-thumb-150x150.png",
    "third-thumb-150x150.JPEG",
    "fourth-thumb-300x300.jpg" // no comma here
];

var regexDimensions = /-thumb-\d{1,4}x\d{1,4}/;

var regexSearch = regexNewFiles[0].search(regexDimensions);

// console.log(regexSearch); // 5 (show position index)

regexNewFiles.forEach (function (file, index) {

    var regexIndex = file.search(regexDimensions);

    // console.log(index); // 0, 1, 2, 3 (show array index)

    if(regexIndex > -1) {
        regexNewFiles[index] = file.substring(0, regexIndex);
    }

});

function stringContains(string, pattern) {
    // compare two strings

    var regexNewExpression = new RegExp(pattern);
    var regexNewIndex = string.search(regexNewExpression);

    return regexNewIndex > -1;

}

// console.log(stringContains("razdwa", "z?dw")); // true
// console.log(stringContains("razdwa", "zdw")); // true
// console.log(stringContains("razdwa", "zw")); // false