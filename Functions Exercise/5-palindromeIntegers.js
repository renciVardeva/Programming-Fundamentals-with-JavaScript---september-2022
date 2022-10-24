function palindromeIntegers (numbersArr){

    let numArrLength = numbersArr.length;

    for (let i = 0; i < numArrLength; i++){
        let numAsString = numbersArr[i].toString();
        let reversedString = numAsString.split('').reverse().join('');

        if (reversedString === numAsString){
            console.log(true);
        } else {
            console.log(false);
        }
    }
}
palindromeIntegers ([123,323,421,121])