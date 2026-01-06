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

console.log(userLogin())