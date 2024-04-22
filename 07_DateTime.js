// dateime in javascript

let mydate = new Date();
// printing the variable with date init
console.log(mydate);//2024-04-22T07:27:34.604Z

// to string method
console.log(mydate.toString());//Mon Apr 22 2024 12:57:34 GMT+0530 (India Standard Time)

// to localeString 
console.log(mydate.toLocaleString());//22/4/2024, 12:57:34 pm

// locale string in us making the mm/dd/yy date format
console.log(mydate.toLocaleString("en-US"));//4/22/2024, 12:57:34 PM

// to dateString
console.log(mydate.toDateString());//Mon Apr 22 2024

// to ISOstring
console.log(mydate.toISOString()); //"2024-04-22T07:27:34.604Z"

// to UTCstring
console.log(mydate.toUTCString());//Mon, 22 Apr 2024 07:27:34 GMT

//to timestring
console.log(mydate.toTimeString());//12:57:34 GMT+0530 (India Standard Time)


let createdDate = new Date(2023, 3, 15, 10, 30, 0);

console.log(createdDate);
console.log(createdDate.toDateString());
