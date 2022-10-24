function printAndSum (startNum , endNum){
    let sum = 0;
    let result = '';

    for (let num = startNum; num <= endNum; num++){
        sum += num;
        result += `${num} `;
    }
    console.log(result);
    console.log(`Sum: ${sum}`);


}
printAndSum (5 , 10)