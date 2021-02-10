// Multiple matches
let petString = "James has a pet cat";
let petRegex = /dog|cat|fish|bird/;
let resultTrue = petRegex.test(petString);

console.log(resultTrue);

let resultFalse = petRegex.test("No pets in this string");

console.log(resultFalse);

// Ignoring case-sensitivity
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i;

console.log(fccRegex.test(myString));


// Extracting matches
let extractStr = "Extract the word 'coding' from the string";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex);

console.log(result);

// Extract match more than once

let testStr = "Repeat, Repeat, Repeat";
let repeatingRegex = /Repeat/g;
testStr.match(repeatingRegex);

// Matches any word that matches any word that starts with hu, while the third character can stand for anything.
let humStr = "I'll hum a song";
let hugStr = "bear hug";
let huRegex = /hu./;

console.log(humStr.match(huRegex));
console.log(hugStr.match(huRegex));

let funExpr = "Let's have some fun with regular expressions!";
let unRegex = /.un/;
let funResult = unRegex.test(funExpr);

console.log(funResult);

// Match single character with multiple possibilities

let bgRegex = /b[aiu]g/;
let quoteSample = "Beware of bugs in the above code; I have only proved it correctly";
let vowelRegex = /[aeiou]/ig;
let vowelResult = quoteSample.match(vowelRegex);

console.log(vowelResult);

// Range of Letters
let abcString = "The quick brown fox jumped over the lazy dog";
let alphabetRegex = /[a-z]/ig;
let abcResult = abcString.match(alphabetRegex);

console.log(abcResult);

// Range of Numbers + characters
let numString = "Blueberry 3.141592653s are delicious.";
let numRegex = /[2-6h-s]/ig;
let numResult = numString.match(numRegex);

console.log(numResult);

// Matches everything except certain things using ^
let notString = "3 blind mice";
let notRegex = /[^0-9]/g;
let notResult = notString.match(notRegex);

console.log(notResult);

// If character occurs one or more times
let difficultString = "Misssissippsi";
let multInstanceRegex = /s+/g;
let multiResult = difficultString.match(multInstanceRegex);

console.log(multiResult);

// If character occurs 0 or more times
let soccerWord = "goooooooooal";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;

soccerWord.match(goRegex);
gPhrase.match(goRegex);
oPhrase.match(goRegex);

let chewie = "Aaaaaaaaaaaaaaaaaaaaarrrrgh!";
let chewieRegex = /a*/i;
let chewieResult = chewie.match(chewieRegex);

console.log(chewieResult);

// lazy match (?)
let titanic = "titanic";
let lazyRegex = /t[a-z]*?i/;
console.log(titanic.match(lazyRegex));

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/;
console.log(text.match(myRegex));
