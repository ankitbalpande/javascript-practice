// conversion Datatype kuch nhi hai bus hum yaha number ko string me convert kar rhe hai 
// string number me convert hoti hai ya nhi check karke dekh rhe hai 
// number or string se kya hum boolean me convert kar sakte hai ya nhi 
// 

// console.log("ANkit Balpande")

let score = "Ankit"
// console.log(score)//Ankit

let valueInNumber = Number(score)
// console.log(valueInNumber)//NAN

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

// let loogedIn = "" //if i check on empty string output geting false
// let loogedIn = "Ankit" // if i check on string output geting true
// let loogedIn = 0 //if i  check number of 0  on boolean output is false
let loogedIn = 1 // if i check number of 1 on boolean output is true

let booleanLoogedIn = Boolean(loogedIn)
// console.log(booleanLoogedIn)



let someNumber = 33
let stringNumber = String(someNumber)

// console.log(stringNumber) // this value is showing is number type but it is string 
// console.log(typeof stringNumber) // see it is a string 



// --------------------------Operations----------------------------

let value = 4
let negetiveValue = -value
// console.log(negetiveValue)

// simpale operations
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3)

let str1 = "Ankit"
let str2 = " Balpande"

let str3 = "Hello " + str1 + str2
console.log(str3) 

// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);1
// console.log(+"");0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);