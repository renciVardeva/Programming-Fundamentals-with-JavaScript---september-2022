function evenAndOddSubtraction (numbers){
    for (let i = 0; i < numbers.length; i++){
        numbers[i] = Number (numbers[i]);
    }
    let evenSum = 0;
    let oddSum = 0;

    for (let num of numbers){
        if (num % 2 === 0) {
            evenSum += num
        } else {
            oddSum += num
        }
        
    } 
    let totalSum = 0;
    if (evenSum > oddSum){
        totalSum = evenSum - oddSum;
    } else {
        totalSum = evenSum - oddSum;
    }
    console.log( totalSum);
} 
evenAndOddSubtraction ([3,5,7,9])