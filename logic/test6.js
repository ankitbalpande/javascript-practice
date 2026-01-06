let arr = [1, 2, 2, 3, 3, 3, 4];

let maxCount = 0;
let mostFrequent ;

for(let i =0; i< arr.length; i++){
    let count =0

    for(let j =0; j< arr.length; j++){
        if(arr[i] === arr[j]){
            count++
        }
    }
    if(count > maxCount){
        maxCount = count;
        mostFrequent = arr[i]
    }
}

console.log(`Most frequent element is ${mostFrequent} and it appeared ${maxCount} times`);

