// REMOVE

var input = document.querySelector("#input");
var output = document.querySelector("#output");

var regexRemove = /[aąeęioóuy]/ig; // characters to remove

// /aąeęioóuy/igm new RegExp; // alternative; i = ignore case; g = global; m = multiline

input.oninput = function(e) {

    output.value = input.value.replace(regexRemove, "");

}

// /\S+@\S+\.\S+/ig = e-mail validation: foo@bar.com / foo.bar@test.co.uk / foo@bar.berlin

// /\d{2}-\d{3}/ig = zip code validation 00-111