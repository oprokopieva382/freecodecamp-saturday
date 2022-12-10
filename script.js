// let text = "<h1>Winter is coming</h1>";
// let myRegex = /<.*?>/;
// let result = text.match(myRegex);
//
//Find One or More Criminals in a Hunt
let reCriminals = /C+/;
//Match Beginning String Patterns
// let rickyAndCal = "Cal and Ricky both like racing.";
// let calRegex = /^Cal/;
// let result = calRegex.test(rickyAndCal);
//Match Ending String Patterns
// let caboose = "The last car on a train is the caboose";
// let lastRegex = /caboose$/;
// let result = lastRegex.test(caboose);
//Match All Letters and Numbers
// let quoteSample = "The five boxing wizards jump quickly.";
// let alphabetRegexV2 = /\w/g;
// let result = quoteSample.match(alphabetRegexV2).length;
//Match Everything But Letters and Numbers
// let quoteSample = "The five boxing wizards jump quickly.";
// let nonAlphabetRegex = /\W/g;
// let result = quoteSample.match(nonAlphabetRegex).length;
//Match All Numbers
// let movieName = "2001: A Space Odyssey";
// let numRegex = /\d/g;
// let result = movieName.match(numRegex).length;
//Match All Non-Numbers
// let movieName = "2001: A Space Odyssey";
// let noNumRegex = /\D/g;
// let result = movieName.match(noNumRegex).length;
//Restrict Possible Usernames
// let username = "JackOfAllTrades";
// let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
// let result = userCheck.test(username);
//Match Whitespace
// let sample = "Whitespace is important in separating words";
// let countWhiteSpace = /\s/g;
// let result = sample.match(countWhiteSpace);
//Match Non-Whitespace Characters
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g;
let result = sample.match(countNonWhiteSpace);
//Specify Upper and Lower Number of Matches
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/;
let result2 = ohRegex.test(ohStr);
//Specify Only the Lower Number of Matches
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/;
let result3 = haRegex.test(haStr);
//Specify Exact Number of Matches
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/;
let result4 = timRegex.test(timStr);
//
let favWord = "favorite";
let favRegex = /favou?rite/;
let result5 = favRegex.test(favWord);
//Positive and Negative Lookahead
let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/;
let result6 = pwRegex.test(sampleWord);
//Check For Mixed Grouping of Characters
let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor) (([A-Z]\.?|[A-Z][a-z]+) )?Roosevelt/;
let result7 = myRegex.test(myString);
//Reuse Patterns Using Capture Groups
let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/;
let result8 = reRegex.test(repeatNum);
//Use Capture Groups to Search and Replace
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/;
let replaceText = "$3 $2 $1";
let result9 = str.replace(fixRegex, replaceText);
//Remove Whitespace from Start and End
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g;
let result10 = hello.replace(wsRegex, "");
//
let a = 5;
let b = 1;
a++;
console.log(a);
let sumAB = a + b;
console.log(sumAB);
//understanding the Differences between the freeCodeCamp and Browser Console
let output =
  "Get this to show once in the freeCodeCamp console and not at all in the browser console";
console.log(output);
console.clear();
//typeof to Check the Type of a Variable
let seven = 7;
let three = "3";
console.log(seven + three);
console.log(typeof seven);
console.log(typeof three);
//Catch Misspelled Variable and Function Names
let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);
//catch Unclosed Parentheses, Brackets, Braces and Quotes
let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) => previous + current);
console.log(`Sum of array values is: ${arraySum}`);
//Catch Mixed Usage of Single and Double Quotes
let innerHtml = "<p>Click here to <a href='#Home'>return home</a></p>";
console.log(innerHtml);
//Catch Use of Assignment Operator Instead of Equality Operator
let x = 7;
let y = 9;
let resultc = "to come";

if (x === y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(resultc);
//Catch Missing Open and Closing Parenthesis After a Function Call
function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}

let results = getNine();
console.log(results);
//Catch Arguments Passed in the Wrong Order When Calling a Function
function raiseToPower(b, e) {
  return Math.pow(b, e);
}
let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);
console.log(power);
