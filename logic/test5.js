let arr = [1, 2, 3, 2, 4, 1, 5];
let uniqueArr = [];

for (let i = 0; i < arr.length; i++) {
  let isDuplicate = false;

  for (let j = 0; j < uniqueArr.length; j++) {
    if (arr[i] === uniqueArr[j]) {
      isDuplicate = true;
      break; // yahan break PERFECT hai
    }
  }

  if (!isDuplicate) {
    uniqueArr.push(arr[i]);
  }
}

console.log(uniqueArr);
