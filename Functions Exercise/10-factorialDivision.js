function factorialDivision (firstNum, secondNum){
    function calculateFactorial() {
        let num1 = 1;
        let num2 = 1;
        for (let i = firstNum; i > 0; i--) {
            num1 *= i;
        }
        for (let i = secondNum; i > 0; i--) {
            num2 *= i;
        }
        return `${(num1 / num2).toFixed(2)}`;
    }
    console.log(calculateFactorial());
}

factorialDivision (5,

    2)