function searchForAnumber (numbers, actions){

    let numsToTake = actions[0];
    let numsToDelete = actions[1];
    let numsToFinde = actions[2];

    let takenNums = numbers.slice(0, numsToTake);
    takenNums.splice(0, numsToDelete);

    let count = 0;

    for (let num of takenNums){
        if (num === numsToFinde){
            count++
        }
    }
    console.log(`Number ${numsToFinde} occurs ${count} times.`);
}
searchForAnumber ([7, 1, 5, 8, 2, 7],

[3, 1, 5])