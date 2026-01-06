let nums = [2, 5, 7, 10, 12, 15];

let evenCount = 0
let oddCount = 0
// for(let i= 0; i < nums.length; i++){
//     if(nums[i] % 2 === 0){
//         evenCount = evenCount +1
//     }
// }
// console.log(evenCount, 'even numbers found');

// for(let i= 0; i < nums.length; i++){
//     if(nums[i] % 2 !== 0){
//         oddCount++
//     }
// }

// console.log(oddCount, 'odd numbers found');


for(let i = 0; i<nums.length; i++){
    if(nums[i] % 2 === 0){
        evenCount++
    }else{
        oddCount++
    }
}

console.log(evenCount, 'even numbers found');
console.log(oddCount, 'odd numbers found');