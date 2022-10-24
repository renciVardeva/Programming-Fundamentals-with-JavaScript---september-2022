function mergeArrays (firstArr, secondArr){
    let newArr = [];
    
    for (let i = 0; i < firstArr.length; i++){
        if (i % 2 === 1 ){
            
            newArr.push((firstArr[i] + secondArr[i]).toString()); 
        } else {
             
            newArr.push(Number (firstArr[i]) + Number (secondArr[i]));
        }
        
            
        
    }
    console.log(newArr.join(' - '));
}
mergeArrays (['5', '15', '23', '56', '35'],

['17', '22', '87', '36', '11'])