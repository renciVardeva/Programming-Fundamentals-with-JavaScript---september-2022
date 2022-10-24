function sorting(arr) { 
    let sortedArr = [];
    arr.sort((a,b) => a - b);
    
    while (arr.length !== 0) {
        sortedArr.push(arr.pop())
        sortedArr.push(arr.shift());
    }
    console.log(sortedArr.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])