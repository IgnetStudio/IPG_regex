var imgReplace = document.querySelector(".imgReplace");
var pReplace = document.querySelector(".pReplace");

// if SVG is not supported by old browser

imgReplace.src = imgReplace.src.replace(".svg", ".png");

// pReplace.innerHTML = pReplace.textContent.replace(/\*\*/g, "--"); // replace ** to --
// pReplace.innerHTML = pReplace.textContent.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");  // replace **...** to <strong>...</strong>

pReplace.innerHTML = pReplace.textContent.replace(/\*\*(.+?)\*\*/g, function(match, text, offset, string) {
    // optional parameters
    var regexCaptured = [].slice.call(arguments, 1, -2);

    // console.log(arguments); // show text before slice
    // console.log(regexCaptured); // show text after slice

    return "<strong>" + regexCaptured[0].toUpperCase() + "</strong>";

});