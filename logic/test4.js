let str = "javascript";

let vowels = ['a', 'e', 'i', 'o', 'u'];
let count = 0

for(let i = 0; i<str.length; i++){
    if(str[i]==='a' || str[i]==='e' || str[i]==='i' || str[i]==='0'|| str[i]==='u'){
        count++;
    }
}
console.log(`Number of vowels in ${str} is ${count}`);

