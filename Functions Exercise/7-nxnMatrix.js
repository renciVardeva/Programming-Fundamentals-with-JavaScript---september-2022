function nxnMatrix(number) {

    // let arr = [];

    // for (let i = 0; i < number; i++){
    //     let result = '';

    //     for (let j = 0; j < number; j++){
    //         result += `${number} `
    //     }
    //     arr.push(result)
    // }
    // console.log(arr.join('\n'))

    let rowGenerdtor = () => {
        let singleRow = '';
        for (let k = 1; k <= number; k++){
            singleRow += `${number} `;
            
        }
        return singleRow;
    };
    for (let i = 1; i <= number; i++){
        console.log(rowGenerdtor());
    }
}
nxnMatrix (3)