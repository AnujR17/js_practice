const score = 45;
console.log(score)
const gameCounter = new Number(30)
// Number() constructor function to create a number object
console.log(gameCounter)

console.log(typeof gameCounter);
console.log(typeof  score)
// here the number is converted to string 
console.log(typeof (gameCounter).toString())
// toFixed method to limit the number of digits after the decimal point
const pi = 22/7;
console.log(pi.toFixed(2))
//toPrecision method to 
console.log(pi.toPrecision(4))

// tolocalString 
const hugeNumber = 123456789;
console.log(hugeNumber.toLocaleString('en-In'))

// toExponential method to convert a number to a string with an ex
console.log(pi.toExponential());
// isFinite method to check if a value is a finite number
console.log(isFinite(score))
console.log(isFinite(NaN))
