//data types

// 1. number
let age = 22;
let height = 1.75;
let weight = 70;
let bmi = weight / height ** 2;

console.log("my bmi is "+bmi);
console.log(typeof age)
// 2. string
let name = "Anuj Rai";
let email = "anuj@gmail.com";
let message = `Hello, my name is ${name} and my emailId is ${email}`
console.log(message)
console.log(typeof name)
// 3. boolean
let isStudent = true;
let isEmployed = false;
console.log(`I, ${name}, am a ${isStudent} student, dejected from the thought of being ${isEmployed} employee.`);
console.log(typeof isStudent)
// 4. undefined
let salary;
let designation;
let life;

console.log("I am " +name+ ", because of my salary being " +salary+ " with" + designation+ "designation. Which makes life also " +life)
console.log(typeof salary)
// 5. null
let happiness = null
let anxiety = null
let depression = null 

console.log(`I am ${name} and I feel that my happiness is ${happiness}, i can only dream of having my anxiety ${anxiety} and depression ${depression} but all i have is that ${life} as life.`)
console.log(typeof happiness)
// 6. Symbol
let mySymbol = Symbol("unique");
console.log(mySymbol); // Output: Symbol(unique)
console.log(typeof mySymbol)
// i dont know what this is 

// 7. BigInt
let bigNumber = 9007199254740991n;
console.log(bigNumber); // Output: 9007199254740991n
console.log(typeof bigNumber); // Output: "bigint"

// 8. Object
let person = {
    name: "Anuj",
    age: 22,
    willToLive: undefined}

console.log(person)
console.log(typeof person)

// 9. Array
    let failures =["Academics", "relationship", "family", "life", "job"];
    let damages = [200000, 40000, 100000, 300000, 80000];
    console.log(`My failures are: ${failures}`);    
    console.log(`The damages from my failures are: ${damages}`);
    console.log(typeof failures)

