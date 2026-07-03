// for(let i = 1; i <= 3; i++){
//     console.log(i)
// }


// let i = 1
// while(i<=5){
//     console.log(i)
//     i++
// }

// let j = 5
// do{
//     console.log(j)
//     j++
// }while(j<=5)




// for(let i = 5; i>= 1; i--){
//     console.log(i)
// }



// let i = 1;
// while(i <= 5){
//     if(i === 3){
//         break
//     }
//     console.log(i)
//     i++
// }


// for(let i = 1; i <= 5; i++){
//     if(i === 3){
//         continue
//     }
//     console.log(i)
    
// }


// let i = 3

// while(i>=0){
//     console.log(i)
//     i--
// }


// for(let i = 1; i <= 10; i++){
//     if(i % 2 == 0){
//         continue
//     }
//     console.log(i)
// }


// for(i = 10; i>= 1; i--){
//     console.log(i)
// }



// for(let i = 1; i <= 10; i++){
//     console.log('square of '+ i +' = ' + i*i )
// }
// console.log('')
// console.log('')
// console.log('')
// console.log('')
// console.log('')
// console.log('')

// for(let i = 1; i <= 10; i++){
//     console.log(i + " = " + '(' + i + ' * ' + i + ')' + ' = ' + i*i)
// }


// for(let i = 1; i <= 10; i++){
//     console.log('cube of ' + i + ' = ' + i**3)
// }

console.log("**********************print number**********************")
console.log(" ")

for(let i = 1; i <= 10; i++){
    console.log(i)
}

console.log(" ")
console.log(" ")
console.log("**********************revers print number**********************")
console.log(" ")

for(let i = 10; i >= 1; i--){
    console.log(i)
}
console.log(" ")
console.log(" ")
console.log("**********************even number**********************")
console.log(" ")

for(let i = 1; i <= 20; i++){
    if(i % 2 == 0){
        console.log(i)
    }
}
console.log(" ")
console.log(" ")
console.log("**********************odd number**********************")
console.log(" ")


for(let i = 1; i <= 20; i++){
    if(i % 2 != 0){
        console.log(i)
    }
}


console.log(" ")
console.log(" ")
console.log("**********************squares number**********************")
console.log(" ")

for(let i = 1; i <= 10; i++){
    console.log('square of ' + i +  ' = ' + i*i )
}

console.log(" ")
console.log(" ")
console.log("**********************sum of numbers from 1 to 10**********************")
console.log(" ")

let sum = 0
for(let i = 1; i <= 10; i++){
    sum = sum + i

}

console.log(sum)


console.log(" ")
console.log(" ")
console.log("**********************sum of even numbers from 1 to 20**********************")
console.log(" ")

let evenSum = 0
for(let i = 1; i <= 20; i++){
    if(i % 2 == 0){
        evenSum = evenSum + i
    }
}
console.log(evenSum)


console.log(" ")
console.log(" ")
console.log("**********************sum of odd numbers from 1 to 20**********************")
console.log(" ")

let oddSum = 0
for(let i = 1; i <= 20; i++){
    if(i % 2 != 0){
        oddSum = oddSum + i
    }
}

console.log(oddSum)


console.log(" ")
console.log(" ")
console.log("**********************sum of numbers from 1 to 100**********************")
console.log(" ")

let numSum = 0

for(let i = 1; i <= 100; i++){
    numSum = numSum + i
}
console.log(numSum)

console.log(" ")
console.log(" ")
console.log("**********************Print table of 5**********************")
console.log(" ")

for(let i = 1; i <= 10; i++){
    console.log('5 * ' + i + ' = ' + 5*i)
}

console.log(" ")
console.log(" ")
console.log("**********************Print table of any number stored in a variable**********************")
console.log(" ")

let num7 = 7
for(let i = 1; i <= 10; i++){
    console.log(`${num7} X ${i} = ${num7*i}`)
}

console.log(" ")
console.log(" ")
console.log("**********************Print tables from 1 to 10**********************")
console.log(" ")


for(let i = 1; i <= 10; i++){
    for(let j = 1; j <= 10; j++){
        console.log(j*i)
    }
    console.log("\n");
}

console.log(" ")
console.log(" ")
console.log("**********************Print Patterns**********************")
console.log(" ")

for(let i = 1; i <= 5; i++){
    let row = ''
    for(let j = 1; j <= i; j++){
        row += '*'
    }
    console.log(row)
}


// for (let i = 1; i <= 10; i++) {
//     let row = ""; // Har naye table ke liye ek khali string banayein
    
//     for (let j = 1; j <= 10; j++) {
//         row += (i * j) + "\t"; // Numbers ke beech mein barabar gap (Tab space) dene ke liye '\t'
//     }
    
//     console.log(row); // Poora ek table (row) ek sath print hoga
// }

for(let i = 1; i <= 5; i++){
    let row = ''
    for(let j = i; j <= 5; j++){
        row += '*'
    }
    console.log(row)
}


console.log(" ")
console.log(" ")
console.log("**********************Print Patterns number**********************")
console.log(" ")

for(let i = 1; i <= 5; i++){
    let row = ''
    for(let j = 1; j <= i; j++){
        row += j
    }
    console.log(row)
}

console.log(" ")
console.log(" ")

for(let i = 1; i <= 5; i++){
    let row =''
    for(let j = 1; j <= i; j++){
        row += i
    }
    console.log(row)
}

console.log(" ")
console.log(" ")
console.log("**********************Count how many numbers are divisible by 3 from 1 to 100**********************")
console.log(" ")



let count = 0
for(let i = 1; i <= 100; i++){
    if(i % 3 === 0){
        count++
        // console.log(i)
    }
}
console.log(count)

console.log(" ")
console.log(" ")
console.log("**********************Print all numbers divisible by 5 from 1 to 50**********************")
console.log(" ")

for(let i = 1; i <= 50; i++){
    if(i % 5 === 0){
        console.log(i)
    }
}


console.log(" ")
console.log(" ")
console.log("**********************Find factorial of 5**********************")
console.log(" ")



let result = 1
for(let i = 5; i >= 1; i--){
    result *= i
}
console.log(result)


console.log(" ")
console.log(" ")
console.log("**********************Reverse counting from 100 to 1**********************")
console.log(" ")


for(let i = 100; i >= 1; i--){
    console.log(i)
}





for(let i = 1; i <= 5; i++){
    let row = ''
    for(let j = 1; j <= i; j++){
        row += '*'
    }
    console.log(row)
}

for(let i = 1; i <= 5; i++){
    let row = ''
    for(let j = i; j <= 5; j++){
        row += '*'
    }
    console.log(row)
}

