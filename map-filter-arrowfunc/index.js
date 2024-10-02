// Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

const arr = [3, 6, 8, 2];

// solution

const newArrr = [];

for (let index = 0; index < arr.length; index++) {
  newArrr.push(arr[index] * 3);
}

// other solution

function transform(i) {
  return i * 2;
}

const ans = arr.map(transform);
// console.log(ans);

// filter

// give me an input arr, given me back all  the even values from it

const newArr = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    newArr.push(arr[i]);
  }
}
console.log(newArr);

// filtering logic

function filtering(n) {
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

filtering();

// create a map function that create an arr n
