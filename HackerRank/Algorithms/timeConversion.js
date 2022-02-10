function timeConversion(s) {
  // Write your code here
  let isAM = s.includes("AM");
  let time = "";
  if (isAM) {
    time = s.split("AM")[0];
  } else {
    time = s.split("PM")[0];
  }
  let hour = parseInt(time.split(":")[0]);
  let min = time.split(":")[1];
  let sec = time.split(":")[2];
  if (!isAM) {
    //PM
    if (hour === 24) {
      hour = "00";
    } else {
      if (hour === 12) {
        hour = "12";
      } else {
        hour += 12;
      }
    }
  } else {
    // AM
    if (hour === 12) {
      hour = "00";
    } else {
      if (hour < 10) {
        hour = "0" + hour;
      }
    }
  }

  return hour + ":" + min + ":" + sec;
}
