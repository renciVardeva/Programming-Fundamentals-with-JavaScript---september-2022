function bombNumbers (numberArr, specialNumber){

    let bomb = specialNumber[0];
    let detonation = specialNumber[1];

    while (numberArr.includes(bomb)) {
        let bombIndex = numberArr.indexOf(bomb) - detonation;
        if (bombIndex < 0){
            bombIndex = 0;
        }
        let detonationArr = detonation * 2 + 1;
        numberArr.splice(bombIndex, detonationArr);
    }
    console.log(numberArr.reduce((a, b) => a + b, 0));
    
}
bombNumbers ([1, 2, 2, 4, 2, 2,

    2, 9],
    
    [4, 2])