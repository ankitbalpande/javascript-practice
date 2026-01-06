let str = "ashish";

let rev=''
for(let i = 0; i<str.length; i++){
    rev = str[i] + rev
}

if(rev === str){
    console.log(`${str} is a palindrome`);
}else{
    console.log(`${str} is not a palindrome`);
}