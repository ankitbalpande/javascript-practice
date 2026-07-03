let ss= ''


for(let outer = 1; outer <= 11; outer++){
    for(let inner1 = 1; inner1 <= 11; inner1++){
        if((outer <= 5 && inner1 <= 3) || 
            (outer >= 5 && outer <= 7) || 
            (outer >= 8 && inner1 >= 9) || 
            (outer >= 9 && inner1 <= 4) ||
            (inner1 >= 5 && inner1 <= 7) ||
            (outer <= 3 && inner1 >= 5 && inner1 <= 11)){
            ss+= '* '
        }else{
            
                ss+= '  '
            
        }
    }
    ss+='\n'
}
console.log(ss)


let name = 'Ankit'
let rev= ''
for(let i = 0; i<name.length; i++){
    rev = name[i] + rev
}
console.log(rev)


let  num = 3

if(num % 2 === 0){
    console.log(num + ' even number')
}else{
    console.log(num + ' odd number')
}

let a = 10;
let b = 20;
let c = 99;

if(a > b){
    console.log(a + ' is biger number')
}else if(b > c){
    console.log(b + ' is biger number')
}else if(c > a){
    console.log(c + ' is biger number')
}


let evenNum =''
for(let i = 2; i <= 100; i++){
    if(i % 2 === 0){
        evenNum += `${i},`
    }
}

console.log(evenNum)


    let a1 = 10;
    let b1 = 30;
    [a1, b1] = [b1, a1]
    console.log(`a  ${a1}`)
    console.log(`b  ${b1}`)


let count = 0 
while(count <= 4){
    console.log(count)
    count++
}

console.log(' ')

let doCount= 0

do{
    console.log(doCount)
    doCount++
}while(doCount<= 4)



    // 

    let on = 1
    let off = 0

    let lightStatus = off

    if(lightStatus === on){
        console.log('light is on')
    }else if(lightStatus === off){
        console.log('light is off')
    }else{
        console.log('light gye hai linemain ko call karo ')
    }