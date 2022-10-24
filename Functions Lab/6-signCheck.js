function signCheck(num1, num2, num3) {
  console.log(
    [num1, num2, num3].filter((num1) => num1 < 0).length === 2 ||
      [num1, num2, num3].filter((num1) => num1 > 0).length % 2 === 1
      ? "Positive"
      : "Negative"
  );
}
signCheck(
  5,

  12,

  -15
);
