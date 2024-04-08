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