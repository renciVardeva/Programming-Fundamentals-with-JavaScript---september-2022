function distinctArray(numbersArr){

    let unicNumbers = [];
    for (let num of numbersArr){
        if (!unicNumbers.includes(num)){
            unicNumbers.push(num)
        }
    }
    console.log(unicNumbers.join(' '));
}
distinctArray([1, 2, 3, 4])