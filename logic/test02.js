// // Array me total elements count karo

let arr1 = [4, 8, 12, 16]

function arrCount(n){
    count = 0
    for(let i = 0; i < n.length; i++){
        if(n[i]){
            count++
        }
    }
    console.log(count)
}
arrCount(arr1)


// String me spaces remove karo

let str1 = "  hello world  "
let result1 = str1.replace(/^\s+|\s+$/g, '')
console.log(result1)

let res2 = str1.trim()
console.log(res2)

// Kisi number ka factorial nikalo
function fac(n){
    let res = 1
    for(let i = 1; i <= n; i++){
        res = res * i

    }
    console.log(res)
}
fac(5)



// Array me check karo value exist karti hai ya nahi

let arr2 = [10, 20, 30]

function existValue(n){
    for(let i = 0; i< arr2.length; i++){
        if(n === arr2[i]){
            console.log('value is exist')
        }
    }

    // second opting
    console.log(arr2.includes(n), 'value is exist' )
}

existValue(20)

// Array ke sabhi numbers ko double karo (use map)

let arr3 = [1, 2, 3, 4]

let result3 = arr3.map(n => n*2)
console.log(result3)


// String me longest word find karo

let str = "I am learning JavaScript daily"

function findLongest(w){
    let x = w.split(' ')
    // console.log(x)
    let longestWord = ''
    for(let i = 0; i < x.length; i++){
        if(x[i].length > longestWord.length){
            longestWord = x[i]
        }
    }
    console.log(longestWord)
}

findLongest(str)


// Two arrays ko merge karo bina duplicate ke

let arr4= [1,2,3] 
let arr5 = [2,3,4,5]

let merge = arr4.concat(arr5)


let result44 = merge.filter((item, index)=>{
    return merge.indexOf(item) === index
})

console.log(result44)


// Object ke sabhi values ka sum nikalo

let obj = {a: 10, b: 20, c: 30}

function sumvalue(x){
    let sum = 0
    for(let key in x){
        sum = sum + x[key]
    }
    console.log(sum)
}
sumvalue(obj)

// Array ko sort karo bina sort() use kiye
let arr6 = [5, 3, 8, 1];

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort(arr6));


// Ek function likho jo check kare

// string me sab characters unique hain ya nahi

let str5 = "abcdefa"

function unique(str){
    return new Set(str).size === str.length
}
// yaha a dubara aa rha hai or hum unicqe value dekh rhe hai har ek 

console.log(unique(str5))



// Ek function likho jo bataye

// Do strings anagram hain ya nahi

// 


function isAnagram(str1, str2){
    if(str1.length !== str2.length){
        return false
    }

    let sorting1 = str1.split('').sort().join('')
    let sorting2 = str2.split('').sort().join('')

    
        return sorting1 === sorting2
}

console.log(isAnagram("ankit" , "taikn"), 'ok')