// // // Create a variable named city and store "Pune"
// // let city = "pune"

// // // Store your age in a variable using let
// // let agr = 26

// // // Store PI value (3.14) using const
// // const pi = 3.14

// // // Change score to 80
// // let score = 50;
// // score = 80
// // console.log(score)

// // // 5. Find Output
// // let a = 10;
// // let b = a;

// // b = 20;
// // console.log(a); //10
// // console.log(b); //20


// // // 6. Find Output
// // let name = "Ankit";

// // console.log("Hello " + name); //Hello Ankit


// // // 7. Error or Not?
// // const country = "India";

// // // country = "USA"; //Error :- becous const is hold constant variable



// // // Data Types Questions

// // // 8. Identify Data Type

// // let a2 = "JavaScript"; //string

// // // 9. Identify Data Type
// // let b2 = 100 //number


// // // 10. Identify Data Type
// // let c2 = true; //boolean

// // // 11. Identify Data Type
// // let d2 = null; //object

// // // 12. Identify Data Type
// // let e; //undefined 

// // // 13. Identify Data Type
// // let f = {
// //     name: "Ankit",
// //     age: 25
// // };//object

// // // 14. Identify Data Type
// // let g = [1, 2, 3, 4]; //ye array hai but iska data type is object

// // // 15. Identify Data Type
// // let h = function() {
// //     console.log("Hello");
// // }//function




// // // typeof Questions
// // // 16. Predict Output
// // console.log(typeof "Hello");//string
// // // 17. Predict Output
// // console.log(typeof 100);//number
// // // 18. Predict Output
// // console.log(typeof true);//boolean
// // // 19. Predict Output
// // console.log(typeof undefined); //undefing
// // // 20. Predict Output
// // console.log(typeof null);//object
// // // 21. Predict Output
// // console.log(typeof [1,2,3]);//object
// // // 22. Predict Output
// // console.log(typeof {});//object
// // // 23. Predict Output
// // console.log(typeof function(){});//function


// // // Mixed Practice Questions
// // // 24.
// // let name = "Ankit";
// // let age = 25;

// // console.log(name + " is " + age + " years old"); //Ankit is 25 years old


// // // 25.
// // let x = "10";
// // let y = 5;

// // console.log(x + y); //105


// // // 26.
// // let x = "10";
// // let y = 5;

// // console.log(x - y); //5


// // // 27.
// // let isLoggedIn = false;

// // console.log(typeof isLoggedIn);//boolean


// // // 28.
// // let data = null;

// // console.log(data); //null
// // console.log(typeof data); //object


// // // 29.
// // let person = {
// //     name: "John",
// //     age: 30
// // };

// // console.log(typeof person);//object


// // // 30.
// // let fruits = ["Apple", "Banana", "Mango"];

// // console.log(typeof fruits);//object


// // // Difference between var, let, and const? let is mordean way to declear variables 1) can be reassingn, 2) can not be redeclear, 3) let is the block scope;;; const is store only constant variable  1)can not be redeclear, 2) can not be reassingn, 3) block scrope;;; var is a old way to declear variables, 1) can be reassingn, 2) can  be redeclear, 3) functions scope
// // // What is hoisting in JavaScript? hoisting is the javascript macanisum and scoping 
// // // What are primitive data types? string, number, boolean, null, undefing, bigint, symboll
// // // What is the difference between null and undefined? null  empty value and undefined variable is declar bu value is not assign
// // // Why does typeof null return "object"? 
// // // Difference between primitive and non-primitive data types? primitive store single value and non-primitive store collectons of value like array object function
// // // Can we change a const object? //no
// // // What is dynamic typing in JavaScript?




// let num = 2;
// let result = num % 2 === 0 ? 'even':'odd'
// console.log(result)


let num = -10;

if(num > 0){
    console.log('Positive')
}else(
    console.log('Negetive')
)


let num1 = 25;

if(num % 5 === 0) console.log('Divisible by 5');else console.log('Notdivisible by 5')

let age = 17;

if(age >= 18) console.log('Eligible to Vote');else console.log('Not Eligible to Vote')

let ageCheck = 16;

if(ageCheck >= 18){
    console.log('Adult')
}else{
    console.log('Minor')
}


let marks = 53;

// 90+ → A
// 75-89 → B
// 50-74 → C
// Below 50 → Fail

if(marks >= 90){
    console.log('A')
}else if(marks >= 75 && marks <= 89){
    console.log("B")
}else if(marks >= 50 && marks <= 74){
    console.log('C')
}else{
    console.log('Fail')
}

// Find the largest of three numbers.
let a = 20;
let b = 15;
let c = 30;

if(a >= b && a >= c){
    console.log(a +' is largest')
}else if(b >= a && b >= c){
    console.log(b + ' is largest')
}else{
    console.log(c + ' is largest')
}

// 30 is largest




let temp = 20;

// Above 40 → Very Hot
// 30-40 → Hot
// 20-29 → Normal
// Below 20 → Cold

if(temp > 40){
    console.log('Very Hot')
}else if(temp >= 30 && temp <= 40){
    console.log('Hot')
}else if(temp >= 20 && temp <= 29){
    console.log('Normal')
}else{
    console.log('cold')
}


let day = 2;

if(day === 0){
    console.log('Sunday')
}else if(day === 1){
    console.log('Monday')
}else if(day === 2){
    console.log('Tuseday')
}else if(day === 3){
    console.log('wednasday')
}


let num11 = 10;
let num22 = 5;
let operator = "%";

switch(operator){
    case '+':
        console.log(num11 + num22)
        break;
    case '-':
        console.log(num11 - num22)
        break;
    case '*':
        console.log(num11 * num22)
        break;
    case '/':
        console.log(num11 / num22)
        break;
    case '%':
        console.log(num11 % num22)
        break;
    default:
        console.log('Invalid Operator')
}

let monthNumber = 10

switch(monthNumber){
    case 1:
        console.log('January')
        break;
    case 2:
        console.log('February')
        break;
    case 3:
        console.log('March')
        break;
    case 4:
        console.log('April')
        break;
    case 5:
        console.log('May')
        break;
    case 6:
        console.log('June')
        break;
    case 7:
        console.log('July')
        break;
    case 8:
        console.log('August')
        break;
    case 9:
        console.log('September')
        break;
    case 10:
        console.log('October')
        break;
    case 11:
        console.log('November')
        break;
    case 12:
        console.log('December')
        break;
    default:
        console.log('please enter proper number')
}

let checkNumber = 9

let resultNum = checkNumber % 2 === 0 ? 'even' : 'odd';

console.log(resultNum)


let voteAge = 17

let resultAge = voteAge >= 18 ? 'Eligible' : 'Not Eligible';
console.log(resultAge)


for(let i = 1; i <= 10; i++){
    if(i === 6){
        break
    }
    console.log(i)
}

for(let i = 1; i <= 10; i++){
    if(i === 5){
        continue
    }
    console.log(i)
}



let year = 2016

if((year % 4 === 0 && year % 100 !== 0) || (year % 400 ===0)){
    console.log('leap year ')
}else{
    console.log('it is not a leap year ')
}


//  A, E, I, O, U
let word = 'a'

if(word === 'a' || word === 'e' || word === 'i' || word === 'o' || word === 'u'){
    console.log('it is vowel')
}else{
    console.log('it is consonant')
}


let numA = 10
let numB = 45
let numC = 999
let numD = 90

if(numA >= numB  && numA >= numC && numA >= numD){
    console.log(numA)
}else if(numB >= numA  && numB >= numC && numB >= numD){
    console.log(numB)
}else if(numC >= numA  && numC >= numB && numC >= numD){
    console.log(numC)
}else if(numD >= numA  && numD >= numB && numD >= numC){
    console.log(numD)
}else{
    console.log('Please enter corect value')
}


let username;
let password = '1234';

if(username === undefined && password === undefined && username === '' && password === ''){
    console.log('please enter username and password')
}else {
    console.log('Login Successful')
}


let marksA = 75

switch(true){
    case (marksA >= 90):
        console.log('A')
        break
    case (marksA >= 70):
        console.log('B')
        break
    case (marksA >= 50):
        console.log('C')
        break
    default:
        console.log('Fail')
}