// let row = ''
// for(let i = 1; i <= 5; i++){
//     row += '*'
// }
// console.log(row)

// console.log('')

// for(let i = 1; i <= 5; i++){
//     console.log('*')
// }

// console.log('')

// for(let i = 1; i <= 5; i++){
//     let row = ''
//     for(let j = 1; j <= 5; j++){
//         row += '*'
//     }
//     console.log(row)
// }

// console.log('')

// for(let i = 1; i <= 4; i++){
//     let row = ''
//     for(let j = 1; j <= 6; j++){
//         row += '*'
//     }
//     console.log(row)
// }

// console.log('')

// for(let i = 1; i <= 5; i++){
//     let row = ''
//     for(let j = 1; j <= i; j++){
//         row += '*'
//     }
//     console.log(row)
// }

// console.log('')

// for(let i = 1; i <= 5; i++){
//     let row = ''
//     for(let j = i; j <= 5; j++){
//         row += '*'
//     }
//     console.log(row)
// }

// console.log('')

// for(let i = 1; i <= 5; i++){
//     let row = ''
//     for(let j = 1; j <= i; j++){
//         row += j
//     }
//     console.log(row)
// }

// console.log('')

// for(let i = 1; i <= 5; i++){
//     let row = ''
//     for(let j = 1; j <=i; j++){
//         row += i
//     }
//     console.log(row)
// }


// for(let i = 1; i <= 5; i++){
//     console.log("*")
        
// }


// let line = 5

// let pattern = ""

// for(let n = 1; n <= line; n++){
//     //Ist inner loop
//     for(let space = 1; space <= line-n; space++){
//         pattern += ' '
//     }
//     //IInd inner loop
//     for(let num = 1; num <= 2*n-1; num++){
//         pattern += '*'
//     }
//     pattern += '\n'
// }
// console.log(pattern)


// let boxLine = 6
// let box = ''

// for(let i = 1; i = boxLine; i++){
//     for(let j = 1; j <= 5;j++){
//         if(i == 1 || i == boxLine) box += '*'
//         else{
//             if(j == 1 || j == 5){
//                 box+= '*'
//             }else{
//                 box += ' '
//             }
//         }
//     }
//     box+= '\n'
// }


// for(let i = 1; i <= 5; i++){
//     for(let j = 1; j <= 5; j++){
        
//     }
// }


// let boxline = 5
// let box = ''

// for(let i = 1; i <= boxline; i++){
//     for(let j =  1; j <= boxline; j++){
//         if(i == 1 || i == boxline){
//             box+= '*'
//         }else{
//             if(j == 1 || j == 5){
//                 box+='*'
//             }else{
//                 box+=' '
//             }
//         }
//     }
//     box+= '\n'
// }
// console.log(box)


// for(let i = 1; i <= 5; i++){
//     console.log('*')
// }


// hello

let hello =''
let line = 5


for(let i = 1; i <= 1; i++){

let h =''
for(let i = 1; i <= line; i++){
    for(let j = 1; j <= line; j++){
        if(i == 3){
            h+= "*"
        }else{
            if(j == 1 || j == 5){
                h+='*'
            }else{
                h+= ' '
            }
        }
    }
    h+='\n'
}
hello+=h

let e = ''
for(let i = 1; i <= line; i++){
    for(let j = 1; j <= line; j++){
        if(i == 1 || i == 3 || i == 5){
            e+='*'
        }else{
            if(j == 1){
                e += '*'
            }else{
                e += ' '
            }
        }
    }
    e+= '\n'
}

hello+=e

for(let a = 1; a <= 2; a++){
    let l=''
    for(let i = 1; i <= line; i++){
        for(let j = 1; j <= line; j++){
            if(j == 1 ){
                l+=('*')
            }else{
                if(i == 5){
                    l+= '*'
                }else{
                    l+=' '
                }
            }
        }
        l+='\n'
    }

    hello+=l
}


let o =''
for(let i = 1; i <= line; i++){
    for(let j = 1; j <= line; j++){
        if(i == 1 || i == line){
            o+= '*'
        }else{
            if(j == 1 || j == line){
                o+= '*'
            }else{
                o+= ' '
            }
        }
    }
    o+='\n'
}

hello+=o
}



console.log(hello)


// let line = 5
// let o =''

// for(let i = 1; i<= line; i++){
//     for(let j = 1; j <= 5; j++){
//         if(i==1||i==line){
//             o+='*'
//         }else{
//             if(j==1||j==5){
//                 o+='*'
//             }else{
//                 o+=' '
//             }
//             }
//         }
//         o+='\n'
//     }
// console.log(o)