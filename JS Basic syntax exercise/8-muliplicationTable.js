function multiplicationTable(num){
    let result = 0;
    let secondNum = 0;
    for ( let secondNum = 1; secondNum <= 10; secondNum++){
        result = num * secondNum; 
        
            console.log(`${num} X ${secondNum} = ${result}`);
        
    }
}
multiplicationTable(2)