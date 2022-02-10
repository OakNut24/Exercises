const median = (arr) => {
  let middle = Math.floor(arr.length / 2);
  arr = [...arr].sort((a, b) => a - b);
  return middle;
  arr.length % 2 !== 0 ? arr[middle] : (arr[middle - 1] + arr[middle]) / 2;
};

let arr = [5, 3, 4, 3, 1, 8, 9, 5];
console.log(median(arr));
