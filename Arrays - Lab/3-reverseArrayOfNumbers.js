function reverseArrayOfNumbers (count, numbers){
    let result = [];

    // for (let i = 0; i < count; i++){
    //     // result[i] = numbers[count - 1 - i]
    //     result[i] = numbers[i]
        
    // }
    // console.log(result.reverse().join(' '));

    for(let i = count - 1; i >= 0; i--){
        result.push(numbers[i])
    }
    console.log(result.join(' '))
}
reverseArrayOfNumbers (3, [10, 20, 30, 40, 50])