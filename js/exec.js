var pExec = document.querySelector(".pExec");

var regexExec = /\S+@(\S+\.\S+)/ig; // e-mail validation & domain groups

// var regexShow = regexExec.exec(p.textContent); // find only first

var regexShow;
var regexDomains = [];

while(regexShow = regexExec.exec(pExec.textContent)) {
    // search for all domains
    regexDomains.push(regexShow[1]);
}