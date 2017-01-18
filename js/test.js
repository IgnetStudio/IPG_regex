var regexFiles = [
    "first-thumb-150x150.jpg",
    "second-thumb-150x150.png",
    "third-thumb-150x150.JPEG",
    "fourth-thumb-300x300.jpg" // no comma here
];

var regexTest = /150x150/;

var regexThumbs = regexFiles.filter(function(file) {

    // console.log(regexTest.test(file)); // 3x true & 1x false
    return regexTest.test(file);

});