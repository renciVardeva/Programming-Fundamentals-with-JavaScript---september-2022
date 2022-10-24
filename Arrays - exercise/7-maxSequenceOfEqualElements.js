function maxSequenceOfEqualElements (arr){
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        let current = [];
        for(let j = ++i; j < arr.length; j++) {
            if (arr[i] === arr[j]){
                current.push(arr[i]);
            } else {
                i = ++j;
                break;
            }
        }
        current.length > result.length ? result = current : result;
    }
    console.log(result.join(" "));
}
maxSequenceOfEqualElements ([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])