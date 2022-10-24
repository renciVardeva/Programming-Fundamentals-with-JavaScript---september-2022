function processOddNumbers (arr){

    let oddPositions = arr.filter((num, i) => i % 2 !== 0).map(num => num * 2);
    
    

    console.log(oddPositions.reverse().join(' '));

}
processOddNumbers ([3, 0, 10, 4, 7, 3])