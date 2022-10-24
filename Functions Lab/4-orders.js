function orders(product, count) {
  let total = 0;

  switch (product) {
    case "coffee":
      total = count * 1.5;

      break;
    case "water":
      total = count * 1.0;
      break;
    case "coke":
      total = count * 1.4;
      break;
    case "snacks":
      total = count * 2.0;
      break;

    
  }
  return total.toFixed(2)
}
console.log(orders ("water", 5));
