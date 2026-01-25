// Ek array diya hai. Sab numbers ka sum nikalo.

let arr =[10, 20, 30]

let sum = 0

for(let i = 0; i< arr.length; i++){
    sum = sum+arr[i]
}

console.log(sum)


// String ko reverse karo

let hello = "hello"

function revers(r){
    let reversStr=''
    for(let i = 0; i<r.length; i++){
        reversStr =  r[i] + reversStr 
    }
    console.log(reversStr)
}
revers(hello)


// Check karo number even hai ya odd

const check = 2

function checkNum(n){
    if(!n == Array.isArray){
        for(let i = 0; i<n.length; i++){
            if(n[i] % 2 === 0){
                console.log(n[i], 'is a Even Number')
            }else{
                console.log(n[i], 'is a Odd Number')
            }
        }
    }else{
        if(n % 2 === 0){
            console.log(n, 'is a Even Number')
        }else{
            console.log(n, 'is a Odd Number')
        }
    }
}

checkNum(check)


// Array me se largest number find karo

let num = [2, 45, 12, 8]
let large = num[0]
for(let i = 0; i < num.length; i++){
    if(num[i] > large){
        large = num[i]
    }
}
console.log(large)



// Array me se sirf even numbers nikalke naya array banao


let findEven = [1,2,3,4,5,6]

let even = []

for(let i= 0; i< findEven.length; i++){
    if(findEven[i] % 2 === 0){
        even.push(findEven[i])
    }
}

console.log(even)


// String me kitne vowels hain count karo

const str = "javascript"
function findVowels(s){
    let vowels = 'aeiou'
    let count = 0
    for(let i = 0; i < s.length; i++){
        if(vowels.includes(s[i])){
            count ++
        }
    }
    console.log(count)
}
findVowels(str)



// Duplicate values remove karo

let dupli = [1,2,2,3,4,4,5]
let singlevalue = dupli.filter((value, index)=>{
    return dupli.indexOf(value) === index
})
console.log(singlevalue)

// Har word ka first letter capital karo

let frute = ["apple", "banana", "mango"]


for(let i = 0; i<frute.length; i++){
    frute[i] = frute[i][0].toUpperCase() + frute[i].slice(1)
}

console.log(frute)


// Check karo string palindrome hai ya nahi

let pali = "madam"

function palindrome(str){
    let result =''
    for(let i = 0; i<str.length; i++){
        result = str[i] + result
    }
    if(result === srt){
        console.log('palindrome')
    }else{
        console.log('Not palindrome')
    }    
}

palindrome(pali)


// Ek function likho jo bataye ki number prime hai ya nahi

// function isPrime(num){
//     if(num <= 1){
//         return false
//     }

//     for(let i = 2; i <= Math.sqrt(num); i++){
//         if(num % i == 0){
//             return false
//         }
//     }
//     return true
// }

function isPrime(num) {
    if (num <= 1) {
        return false
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false
        }
    }

    return true
}


console.log(isPrime(3))
console.log(isPrime(2))
console.log(isPrime(7))
console.log(isPrime(77))