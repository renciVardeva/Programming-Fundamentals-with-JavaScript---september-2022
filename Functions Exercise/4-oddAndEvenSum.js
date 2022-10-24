function oddAndEvenSum (number){
     
    let numToString = number.toString();
    let evenSum = 0;
    let oddSum = 0;
    let stringLength = numToString.length;

    for (let i = 0; i < stringLength; i++){
        let currentNum = Number (numToString[i]);
         if (currentNum % 2 === 0){
            evenSum += currentNum;
         } else {
            oddSum += currentNum;
         }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum (3495892137259234)