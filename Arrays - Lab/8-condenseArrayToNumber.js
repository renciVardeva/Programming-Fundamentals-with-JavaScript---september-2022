function condenseArrayToNumber (arr){
    
        // if (arr.length === 1) {
        //     console.log(arr[0]);
        //     return;
        // }
        // for (let i = 0; i < arr.length - 1; i++) {
        //     arr[i] = Number(arr[i]) + Number(arr[i + 1]);
        // }
        // arr.pop();
        // condenseArrayToNumber(arr);

        let result = [];

        for (let el of arr){
            result.push(el);
        }
        while (result.length > 1){
            let tempArr = [];
            for (let i = 0; i < result.length - 1; i++){
                tempArr[i] = result[i] + result[i + 1];
            }
            result = tempArr;
        }
        console.log(result.join());
    
}
condenseArrayToNumber ([2,10,3])