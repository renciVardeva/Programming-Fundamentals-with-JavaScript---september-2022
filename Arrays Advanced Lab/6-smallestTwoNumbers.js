function smallestOfTwoNumbers(arr){
     let sortedArr = arr.sort((a,b) => a - b).slice(0, 2);
    // console.log(sortedArr.slice(2).join(' '));
    console.log(sortedArr.join(' '));
}
smallestOfTwoNumbers([30, 15, 50, 5])