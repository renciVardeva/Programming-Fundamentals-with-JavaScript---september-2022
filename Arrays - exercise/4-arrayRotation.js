function arrayRotation (array, rotatinons) {
    
    for ( let i = 0; i < rotatinons; i++){
        let movedNum = array.shift();
        array.push(movedNum);
    }
    
    console.log(array.join(' '));
}
arrayRotation ([51, 47, 32, 61, 21], 2)