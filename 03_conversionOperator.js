// typeof can be written by any method

let marks = "12"
// typeof of let variable
console.log(typeof marks)
console.log(typeof(marks))
marks = "12a"
//parsing the string into Numbers
let marksAsNumber = Number(marks)
// type of the variable marksAsNumber printing as number 
console.log(typeof(marksAsNumber))
// but the string containing non-numeric characters will be converted to NaN 
console.log(marksAsNumber)
//"33" > 33
// "33 abc"  >  NaN

 {
    console.log("Null to numbers")
    marks = null 
    console.log(typeof marks)
    console.log(marks)
    marksAsNumber = Number(marks)
    console.log(typeof marksAsNumber);
    console.log(marksAsNumber)    
}
// conversion to undefined to number 
{
    // when converting it to the string, the undefined value converts into NaN 
    //
    console.log("Undefined to numbers")
    marks = undefined 
    console.log(typeof marks)
    console.log(marks)
    marksAsNumber = Number(marks)
    console.log(typeof marksAsNumber);
    console.log(marksAsNumber)    
}
{   //conversion of boolean to numbers 
    // true > 1 vice versa using Boolean(marksAsNumber)
    // false > 0 
    // "" > results in false
    // " hello " > reslts in true
    console.log("Boolean to numbers")
    marks = true 
    console.log(typeof marks)
    console.log(marks)
    marksAsNumber = Number(marks)
    console.log(typeof marksAsNumber);
    console.log(marksAsNumber)    
}
{
    console.log("String to numbers")
    marks = "Anuj" 
    console.log(typeof marks)
    console.log(marks)
    marksAsNumber = Number(marks)
    console.log(typeof marksAsNumber);
    console.log(marksAsNumber)    
}

//----------------------------------Operators-----------------------------------------------------
let value = 7
let negValue = -value
console.log(negValue)

// arithmetic operator 
let a = 6
let b = 2
console.log(a+b) //addition
console.log(a-b) //subtraction
console.log(a * b) // multiplication
console.log(a/b) // division
console.log(a**b) // power
console.log(a%b) // modulus (remainder)


//conversion
let str1 = "Hello"
let str2 = " World"
let str3 = str1 + str2; 
console.log(str3)
console.log("1" +2)
console.log(1 + "2") 
console.log("1" + " 2") 
console.log(1 + 3+ " 2"); // Numbers add prior to concatination 
console.log(true) // prints true
console.log(+true) // prints 1 
console.log (+"") // prints 0 as the empty string in Number returns 0

let num1 ,num2 , num3;
num1 = num2 = num3 = 2 + 2; // not good practice writing this way

let gameCounter = 100;
gameCounter++;
++gameCounter;  
console.log(gameCounter)

// postfix and prefix
let a1 = 7
let b1 = a1++
console.log(a1++ + " " + --b1)
console.log(a1++ + " " + --b1)
console.log(a1)


