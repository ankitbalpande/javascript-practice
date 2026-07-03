// let line = 5
// let pattern = ''

// // for(let a = 1; a <= line; a++){
// //     for(let b = 1; b <= line-a; b++){
// //         pattern+= ' '
// //     }
// //     for(let c = 1; c <= 2*a-1; c++){
// //         pattern += '*'
// //     }
// //     pattern += '\n'
// // }

// // console.log(pattern)



// console.log('===================================')





// for(let outer = 1; outer <= 1; outer++){
//     for(let i = 1; i <= line; i++){
//         for(let space = 1; space <= line-i; space++){
//             pattern+=" "
//         }
//         for(let star = 1; star <= 2*i-1; star++){
//             pattern+='*'
//         }
//         pattern+='\n'
//     }
//     for(let j = line-1; j >= 1; j--){
//         for(let space = 1; space <= line-j; space++){
//             pattern+=" "
//         }
//         for(let star = 5; star <= 2*j+3; star++){
//             pattern+='*'
//         }
//         pattern+='\n'
//     }
// }

// console.log(pattern)




// let leftPlain =''

// for(let i = 1; i <= line; i++){
//     for(let j = 1; j <= i; j++){
//         leftPlain += "*"
//     }
//     leftPlain += "\n"
// }

// console.log(leftPlain)

// let leftBottom =''

// for(let i = 5; i >= 1; i--){
//     for(let j = 1; j <= i; j++){
//         leftBottom += '*'
//     }
//     leftBottom += '\n'
// }
// console.log(leftBottom)



// let rightTop = ''

// for(let i = 1; i <= line; i++){
//     for(let space = 1; space <= line-i; space++){
//         rightTop += ' '
//     }
//     for(let star = 1; star <= i; star++){
//         rightTop += '*'
//     }
//     rightTop += '\n'
// }

// console.log(rightTop)

// let rightBottom = ''
// for(let i = 1; i <= 5; i++){
//     for(let space = 1; space != i; space++){
//         rightBottom += ' '
//     }
//     for(let str = i; str <= 5; str++){
//         rightBottom+="*"
//     }
    
//     rightBottom+= '\n'
// }
// console.log(rightBottom)

// let hPyramid = ''

// for(let i = 1; i <= 5; i++){

//     for(let space = 1; space <= 5-i; space++){
//         hPyramid+= ' '
//     }
//     for(let j = 1; j <= i; j++){
//         if(i === 1 || i === line || j === 1 || j === i) {
//             hPyramid+='. '
//         }else{
//             hPyramid+='  '
//         }
//     }
//     hPyramid+='\n'
// }
// console.log(hPyramid)



// let line1 = 5;
// let hPyramid1 = '';

// for (let i = 1; i <= line1; i++) {

//     // spaces
//     for (let space = 1; space <= line1 - i; space++) {
//         hPyramid1 += ' ';
//     }

//     // stars and inner spaces
//     for (let j = 1; j <= i; j++) {

//         if (i === line1 || i === 1 || j === 1 || j === i) {
//             hPyramid1 += '* ';
//         } else {
//             hPyramid1 += '  ';
//         }
//     }

//     hPyramid1 += '\n';
// }

// console.log(hPyramid1);

// let hPyramid2 =''
// for(let i = 1; i <= line; i++){
//     for(let space = 1; space <= line - i; space++){
//         hPyramid2+=" "
//     }
//     for(let j = 1; j <= 2 * i-1; j++){
//         if(j === 1|| i === line || j === 2 * i-1){
//             hPyramid2+='*'
//         }else{
//             hPyramid2+=' '
//         }
//     }
//     hPyramid2+='\n'
// }

// console.log(hPyramid2)







let plus =''

for(let outer = 1; outer >= 10; outer++){
    plus+='*'
    // for(let inner1 = 1; inner1 >= 10; inner1++){
    // }
    // plus+='\n'
}

console.log(plus)