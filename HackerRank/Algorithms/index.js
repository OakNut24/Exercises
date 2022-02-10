// 1. Write a JavaScript function isPrime(n) that
// returns 1 if n is a prime number and 0 otherwise.
// 2. Write a function that takes two arguments
// (named start and end) and returns an array
// containing all the numbers from start and up to
// (and including) end.

//1.

function isPrime(n) {
  for (let i = 2; i < n / 2; i++) {
    if (n % i == 0) {
      return 0;
    }
  }
  return 1;
}

//2.
function arrayCreator(start, end) {
  let array = [];
  for (let index = start; index <= end; index++) {
    array.push(index);
  }
  return array;
}

console.log(isPrime(23));
