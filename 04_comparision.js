// comparision operator

// resulting in true or false 
// console.log(12 > 2 )
// console.log(2  > 1 )
// console.log(12 != 12)
// console.log(12 == 1)
// console.log(12 >= 1)
// console.log(12 === 12)
// console.log(6 <= 7)

// comparing operators with different data types 
console.log("12" > 1)
console.log(1 > "2")
console.log()

// here the comparision operators like > < >= <= work differently.
// comparisons convert null to a number treating it as 0
// avoid these type of comparisons

// === checks for oprands value and data type 
console.log("12" === 1) // false
console.log("12" === "12")
console.log (null === 0 )
console.log(undefined === 0)
console.log (null === null)
console.log(1 === 1)
console.log()
// == checks for value only
// null is considered as 0 in comparisons
console.log(null == 0); // false
console.log(null > 0); // false
console.log(null < 0); // false
console.log(null >= 0); // true
// The code demonstrates the behavior of comparison operators with different data types.
// When comparing null with a number, null is converted to 0
// and then the comparison is made.

// undefined is considered as NaN (Not a Number) in comparisons
console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined >= 0); // false

// The code demonstrates the behavior of comparison operators with different data types.
// When comparing undefined with a number, undefined is considered as NaN (Not a Number)
// and the comparison always results in false.
