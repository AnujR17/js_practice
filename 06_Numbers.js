
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


////////////////////////////// Math //////////////////////////////
console.log(Math)
// converts the negative value to positive
console.log(Math.abs(-10))
// rounds up to the nearest integer
console.log(Math.round(3.14))
// rounds to the higher integer value
console.log(Math.ceil(3.14))
// rounds down to the lower integer value
console.log(Math.floor(3.14))
// calculates the sqrt of the given number
console.log(Math.sqrt(16))
// Reflects the shortest number 
console.log(Math.min(1, 2, 3, 4, 5))
// reflects the largest number 
console.log(Math.max(1, 2, 3, 4, 5))
// random value between 0 and 1
console.log(Math.random())
// trying to get random values by 1 
console.log(Math.random()*10) // but at times it could be 0.899... as well and defeats the purpose of getting it more than one
// to get a random integer value between 1 and 10 we can use the following:
console.log(Math.floor(Math.random()*10)+1) // this will give us a random number between 1 and 10
// the + 1 will ensure that it always is more than one and not 0
// another example to get this done in a certain range 
const min = 10
const max = 20 
console.log(Math.floor(Math.random() * (max - min + 1)) + min) 
// the above will give us a random number between 10 and 20 and floor will ensure that it is an integer value
// the max - min + 1 will give us the range of numbers that we want to get the random number from
// and then we add the min to get the final value in the desired range

// Calculates the power of a number)   
console.log(Math.pow(2, 3)) 
