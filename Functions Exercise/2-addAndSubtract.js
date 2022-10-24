function addAndSubtract(firstNumber, secondNumber, thirdNumber){

    function add (firstNum, secondNum){
        let sumOfTwo = firstNum + secondNum;
        return sumOfTwo;
    }
    let sum = add(firstNumber, secondNumber);

    function subtract (sumOfTwo, thirdNum){
        let result = sum - thirdNum;
        return result;
    }
    let finalResult = subtract (sum, thirdNumber);
    console.log(finalResult);
}
addAndSubtract (23, 6, 10)