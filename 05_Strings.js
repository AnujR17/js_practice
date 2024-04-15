const Name = "John Doe"
const age = 35
const job = "Software Engineer"
let city = "New York"


console.log(`${Name} is a ${age} year old ${job} living in ${city}`)
const techTag = new String("JavaScript")
// printing the techTag variable
console.log(techTag)

// here the techTag works as a object than String variable
console.log(typeof(techTag))

// To access the length property of a string, we can use the `length` property.
// This will return the number of characters
console.log(techTag.length)


// index of the first occurrence of the specified substring
console.log(techTag.indexOf("S"))

// character at method in js 
console.log(`The character at the 3 index is: ${techTag.charAt(3)}`)

// concate string
console.log(`${Name} is ${techTag.concat(" Developer")} who lives in ${city}`)

// includes method: to check if a string contains a specified substring
console.log(techTag.includes("Java"))
// results in boolean true or false 

// Slice method: to extract a section of a string and return it as a new string
console.log(techTag.slice(-10,3))

// Substring method: to extract the characters from a string, between two specified indices
console.log(techTag.substring(2, 6))

// Replace method: to replace a specified substring with a new substring
console.log(techTag.replace("Java", "Type"))

// Split method: to split a string into an array of substrings
console.log(techTag.split(""))

// To convert a string to uppercase
console.log(techTag.toUpperCase())

// to convert a string to LowerCase
console.log(techTag.toLowerCase())

// Trim method: to remove whitespace from both ends of a string
city = "    New Jersey    "
console.log(city.trim())

// trying to apply trim 
console.log(city.slice(0,8))
console.log((city.slice(0,8)).trim())
// Trim method can also be used on a string literal
console.log("   Trimmed String   ".trim())

// toString method
console.log(techTag.toString())

// Repeat method: to repeat a string a specified number of times
console.log(techTag.repeat(3))

// Padstart and Padend methods: to pad a string with another
console.log(techTag.padStart(11, "J"))
console.log(techTag.padEnd(11, "t"))

// endsWith method: to check if a string ends with a specified substring
console.log(techTag.endsWith("Script"))
console.log(techTag.endsWith("Java"))

// startsWith method: to check if a string starts with a specified substring
 console.log(techTag.startsWith("Java"))

 
