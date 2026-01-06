function printNme(){
    console.log('A')
    console.log('N')
    console.log('K')
    console.log('I')
    console.log('T')
}

// printNme()

function addTwoNumbers(number1, number2){
    return number1 + number2
}


// console.log(addTwoNumbers(4,6))
// console.log(addTwoNumbers(5,6))
// console.log(addTwoNumbers(7,6))



function userLogin(username){
    // if(username === undefined){
    //     console.log('please enter Valid username')
    //     return
    // } ye jo if conditon hai ye undifiend ko check kar rha hai  agr undefined hai to ye message show krega

    if(!username){
        console.log('please enter Valid username')
        return
    }
    //ye jo if condition hai ye falsy value ko check kar rha hai agr user nhi hai to ye run ho ..
    return `${username} just logged in`
}

// console.log(userLogin())


function cartsCollection(...num){
    return num
}

//yha maine rest operatoe ka use kiya hai jisse me kitne bhi arguments pass kr skta hu

// console.log(cartsCollection(500, 600, 700, 300, 1200))


const user = {
    username: 'Ankit',
    price: 5000
}

function userdata(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}
userdata(user)
//yha maine object ko function me pass kiya hai
// or ek oproch hai ise use karne da direct obect pass karna  ya fir aeray
userdata({
    username: 'Sumit',
    price: 7000
})

const array = [100, 200, 300, 400, 500]

function arrayData(anyArray){
    return anyArray[3]
}
//yha maine array ko function me pass kiya hai
console.log(arrayData(array))