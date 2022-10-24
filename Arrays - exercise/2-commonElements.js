function commonElements(firstArr, secondArr) {
//   for (let firstIndex = 0; firstIndex < firstArr.length; firstIndex++) {
//     for (let secondIndex = 0; secondIndex < secondArr.length; secondIndex++) {
//       if (firstArr[firstIndex] === secondArr[secondIndex]) {
//         console.log(firstArr[firstIndex]);
//       }
//     }
//   }
for (let firstIndex of firstArr){
    if (secondArr.includes(firstIndex)){
        console.log(firstIndex);
    }
}
}
commonElements(
  ["Hey", "hello", 2, 4, "Peter", "e"],

  ["Petar", 10, "hey", 4, "hello", "2"]
);
