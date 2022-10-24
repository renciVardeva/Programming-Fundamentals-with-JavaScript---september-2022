function spiceMustFlow(num) {
  let day = 0;
  let sum = 0;
  while (num > 0) {
    if (num < 100) {
      if (sum < 26) {
        break;
      }
      sum -= 26;
      break;
    }
    sum += num - 26;
    num -= 10;
    day++;
  }
  console.log(day);
  console.log(sum);
}
spiceMustFlow (111)
