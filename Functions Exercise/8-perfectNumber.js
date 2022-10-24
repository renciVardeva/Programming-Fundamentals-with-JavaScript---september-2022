function perfectNumber (num) {
    let sumDivisors = 0;
 
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            sumDivisors += i;
        }
        if (sumDivisors >= num){
            console.log(sumDivisors === num ? "We have a perfect number!" : "It's not so perfect.");
            break;
        }
    }
}
perfectNumber (6)