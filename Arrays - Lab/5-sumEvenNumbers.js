function sumEvenNumbers (arr){
   
    
    
    let sum = 0;
    for (let num of arr){
        let numbers = Number(num);
        if (numbers % 2 === 0){
            sum += numbers
        }
    }
    console.log(sum);
}
sumEvenNumbers (['1','2','3','4','5','6'])