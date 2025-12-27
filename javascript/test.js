let numbers = [12, 5, 78, 34, 9, 100];

let max = numbers[0]

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > max){
        max = numbers[i]

    }
}
console.log("The largest number is: " + max);

// for(let i = 0; i<numbers.length; i++){
//     let store;
//     for(let j = 0; j < numbers.length; j++){
//         if(numbers[j] >= numbers[i]){
//             let bigNumber = numbers[j]
//             store = bigNumber
//         }
//     }
//     console.log(store)
// }