function formatGrade (grade) {
    let result = ''
    //  if (grade < 3) {
    //     console.log('Fail (2)');
    //  } else if (grade < 3.5) {
    //     console.log(`Poor (${grade.toFixed(2)})`);
    //  } else if (grade >= 3.50 && grade < 4.50){
    //     console.log(`Good (${grade.toFixed(2)})`);
    //  } else if (grade >= 4.50 && grade < 5.50){
    //     console.log(`Very good (${grade.toFixed(2)})`);
    //  } else if (grade >= 5.50){
    //     console.log(`Excellent (${grade.toFixed(2)})`);
    //  }

     if (grade < 3) {
        result = 'Fail'
        grade = 2;
     } else if (grade < 3.5) {
        result = 'Poor'
     } else if (grade < 4.50){
        result = 'Good'
     } else if (grade < 5.50){
        result = 'Very good'
     } else {
        result = 'Excellent'
     }
     console.log(`${result} (${grade.toFixed(2)})`);
    
}
formatGrade (3.33)