let yourArray = ["one", 2, "three", true, false, undefined];
//
let myArray = ["a", "b", "c", "d"];
myArray[1] = "bob";
console.log(myArray);
//
function mixedNumbers(arr) {
  arr.push(7, "VIII", 9);
  arr.unshift("I", 2, "three");
  return arr;
}
console.log(mixedNumbers(["IV", 5, "six"]));
