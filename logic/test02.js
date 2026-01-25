// // Array me total elements count karo

// let arr1 = [4, 8, 12, 16]

// function arrCount(n){
//     count = 0
//     for(let i = 0; i < n.length; i++){
//         if(n[i]){
//             count++
//         }
//     }
//     console.log(count)
// }
// arrCount(arr1)


// // String me spaces remove karo

// let str1 = "  hello world  "
// let result1 = str1.replace(/^\s+|\s+$/g, '')
// console.log(result1)

// let res2 = str1.trim()
// console.log(res2)

// Kisi number ka factorial nikalo
function fac(n){
    let res = 1
    for(let i = 1; i <= n; i++){
        res = res * i

    }
    console.log(res)
}
fac(5)

