// iife : immediately invoked function expression

//ye function defind hote hi call ho jata hai 
//ye function global scope ko pollute nahi kata hai 

//ye function ko hum ek bracket me wrap karte hai or uske baad uske baad fir se bracket lagate hai jisse wo call ho jata hai

// (function dbRun(){
//     console.log('DB connected')
// })()


// ye function global scope me kuch bhi add nahi karega

// hum isme parameters bhi pass kar sakte hai
(function dbRun(dbName){
    console.log(`DB connected to ${dbName}`)
})('myDatabase');

// hum isme return bhi kar sakte hai
const result = (function dbRun(dbName){
    console.log(`DB connected to ${dbName}`)
    return true
})('myDatabase');



((name)=>{
    console.log(`Hello ${name}`)
})('Ankit');


// yaha par har IIFE ke bad semeicolon ka use karna jaruri hai taki agar koi aur code ho to wo sahi se execute ho jaye