function countingSort(arr) {
  let sortedArray = arr.sort((a, b) => a - b);
  let intArr = [];
  for (let j = 0; j < 100; j++) {
    intArr.push(0);
  }

  for (let i = 0; i <= parseInt(sortedArray.length); i += 2) {
    if (sortedArray[i] === sortedArray[i + 1]) intArr[sortedArray[i]] += 2;
    else {
      intArr[sortedArray[i]]++;
      intArr[sortedArray[i + 1]]++;
    }
  }

  return intArr;
}