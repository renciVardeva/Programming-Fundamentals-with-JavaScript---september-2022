function lastKNumbersSequence (arrLength, countTosum){
    let sequence = [1];

    for (let i = 1; i < arrLength; i++){
        let currentIndex = Math.max(sequence.length - countTosum, 0);
        let lastElements = sequence.slice(currentIndex);
        let sum = 0;

        for (let element of lastElements){
            sum += element;
        }
        sequence.push(sum)
    } 
    
    console.log(sequence.join(' '));
}
lastKNumbersSequence (6, 3)