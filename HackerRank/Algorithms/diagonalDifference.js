function diagonalDifference(arr) {
  // Write your code here
  let pri = 0;
  let sec = 0;
  for (let i = 0; i < arr.length; i++) {
    pri += arr[i][i];
  }
  for (let j = 0; j < arr.length; j++) {
    sec += arr[arr.length - j - 1][j];
  }
  console.log(sec);

  if (sec < 0) {
    sec * -1;
  }
  if (pri < 0) {
    pri * -1;
  }
  let sum = pri - sec;

  return sum > 0 ? sum : sum * -1;
}
