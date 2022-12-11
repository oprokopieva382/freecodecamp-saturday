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
//
function popShift(arr) {
  let popped = arr.pop();
  let shifted = arr.shift();
  return [shifted, popped];
}
console.log(popShift(["challenge", "is", "not", "complete"]));
//
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(1, 4);
console.log(arr);
