function sum(a, b, callback){
    return callback(a, b)
}

function add(x, y){
    return x+y
}

function subt(x, y){
    return x-y
}

function multi(x, y){
    return x*y
}

function div(x, y){
    return x/y
}


console.log(sum(30, 20, add))
console.log(sum(30, 20, subt))
console.log(sum(30, 20, multi))
console.log(sum(30, 20, div))




function calculate(a, b, callback){
    return callback(a, b)
}

function addition(x, y){
    return x + y
}

console.log(calculate(10, 5, addition))

console.log('================= forEach Anonymous Callback hota hai =====================')



const nums = [1, 2, 3, 4];

nums.forEach(e => {
    let a = e+2
    console.log(a)
})
console.log('================= map =====================')


const numsMap = [1, 2, 3, 4];

numsMap.map((n)=>{
    let a = n*2
    console.log(a)
})

console.log('================= filter =====================')


const numsFilter = [1, 2, 3, 4, 5, 6];

let even = numsFilter.filter((e)=>{
    return e % 2 === 0
})

console.log(even)


console.log('================= real world callback =====================')


function userLogin(username, callback){
    console.log(username + ' Logged in')
    callback()
}

function dashboardWellcome(){
    console.log('Welcome to Dashboard')
}

userLogin('Ankit', dashboardWellcome)




