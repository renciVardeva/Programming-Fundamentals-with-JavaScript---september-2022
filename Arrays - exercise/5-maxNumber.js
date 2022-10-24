function maxNumber (arr){
    let newArr = [];

    for (let i = 0; i < arr.length; i++){
        let isMax = true;
        let currentNum = arr[i];

        for (let j = i + 1; j < arr.length; j++){
            if (currentNum <= arr[j]){
                isMax = false;
            }
        }
        if (isMax){
            newArr.push(arr[i])
        }
        
    }
    console.log(newArr.join(' '));
}
maxNumber ([1, 4, 3, 2])