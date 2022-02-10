let time = "07:05:45PM";

function convertTime(s) {
  // Write your code here
  let time = s.split(":");
  let hour = time[0];
  let min = time[1];
  let sec = time[2].split("AM");
  return s.length;
}

console.log(convertTime(time));
