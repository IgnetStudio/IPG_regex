var pMatch = document.querySelector(".pMatch");

var regexMatch = /\S+@(\S+\.\S+)/ig; // e-mail validation & domain groups

var regexNewShow = pMatch.textContent.match(regexMatch);

// console.log(regexNewShow); // show all addresses withot domain groups