var string = "rajaraja"
var word = "ra"
var splitedString = string.split("");
var splitedWord = word.split("");
var count = 0;
var totalcount = 0;
var res = "";
var j = 0;
for (var i = 0; i < splitedString.length; i++) {
    if (splitedString[i] == splitedWord[j]) {
        count += 1;
        res += splitedString[i];
        j++;
    }
    if (count == splitedWord.length) {
        totalcount += 1;
        count = 0;
        j = 0;
    }
}

console.log(totalcount);