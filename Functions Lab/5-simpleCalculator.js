function simpleCalculator (num1, num2, operator){
    switch (operator) {
        case "multiply":
            let multiply = (num1, num2) => num1 * num2;
            console.log(multiply(num1, num2));
            break;
        case "divide":
            let divide = (num1, num2) => num1 / num2;
            console.log(divide(num1, num2));
            break;
        case "add":
            let add = (num1, num2) => num1 + num2;
            console.log(add(num1, num2));
            break;
            case "subtract":
                let subtract = (num1,num2) => num1- num2;
                console.log(subtract(num1,num2));
                break;
    }
}
simpleCalculator (5,

    5,
    
    'multiply')