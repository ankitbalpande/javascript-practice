let numbers = [12, 5, 78, 34, 9, 100];

let max = numbers[0] //isme 12 ke uper ki value dega break lagaya hai to 12 se bada jo bhi milenga use dedenga or agr break nhi lagaya to 100 dega
// let max = 0 //isme ye 12 ko hi print karenga agr break  lagaya hai  to nhi to 100 

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > max){
        max = numbers[i]
        break

    }
}
console.log("The largest number is: " + max);

// output hai 78 q ki break laga hua hai nhi to 100