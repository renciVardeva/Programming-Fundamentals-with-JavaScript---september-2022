function loadingBar (number){

    let persentCount = '%'.repeat(number /10);
    let pointsCount = '.'.repeat(10 - (number / 10));

    if (number === 100) {

        console.log('100% Complete!');
        console.log(`[${persentCount}]`);
    } else {
        console.log(`${number}% [${persentCount}${pointsCount}]`);
        console.log('Still loading...');
    }

    
}
loadingBar (100)