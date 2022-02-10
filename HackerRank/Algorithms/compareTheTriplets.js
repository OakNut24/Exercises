function compareTriplets(a, b) {
  // Write your code here
  let score = [0, 0];
  console.log(score.length);
  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) {
      //Alice receives a point
      score[0] = score[0] + 1;
    } else {
      if (a[i] < b[i]) {
        //Bill receives a point
        score[1] = score[1] + 1;
      }
    }
  }
  return score;
}
