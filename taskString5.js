var string = "hello";

for (var i = string.length - 1; i >= 0; i--) {
    //console.log(string[i]);
}

var string = "hello world"
var splittedString = string.split(" ");
var string1 = "";
for (var i = 0; i < splittedString.length; i++) {
    var value = splittedString[i];
    for (var j = value.length - 1; j >= 0; j--) {
        string1 = string1 + value[j]
    }
}
//console.log(string1);

var string = "khashiuhauhusdhohoh14223141423R#&R&^R^&#^&#&*";
var newstring = string.replace(/[^A-Za-z]+/g, "");
//console.log(newstring);


var arr = []
console.log(arr);
console.log(typeof(arr));