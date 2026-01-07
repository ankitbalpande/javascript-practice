// this ko smajhne ke liye hume object se suruwat karna padta hai 

const user ={
    username: 'Ankit',
    price: 1000,
    message: function(){
        console.log(`Hello ${this.username}, welcome to the site!`);
        // this kya karta hai ki ye current context ko target karta hai 
        console.log(this);
    }
}
// user.message()
// user.username = 'Ashish'
// user.message()

//console.log(this)
//  // yaha this kya kar rha hai ki node envorment ka current context bta rha ha jo ki empty object hai  {} par yhi hum browser me run karenge to window object show hoga

function myFunction(){
    console.log(this) // yaha par bhi this global context ko point kar rha hai 
}
// myFunction()

// arrow function me this ka behaviour thoda alag hota hai 
const myArrowFunction = () =>{
    console.log(this) // yaha par bhi this global context ko point kar rha hai 
}
myArrowFunction()