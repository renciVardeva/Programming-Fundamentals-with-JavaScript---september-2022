function charactersInRange (charOne, charTwo){

    let StartRange = Math.min(charOne.charCodeAt(),charTwo.charCodeAt());
    let EndRange = Math.max(charOne.charCodeAt(),charTwo.charCodeAt());

    let finalString = '';

    for (let currentChar = StartRange + 1; currentChar < EndRange; currentChar++){
        let singleChar = String.fromCharCode(currentChar);
        finalString += `${singleChar} `
    }
    console.log(finalString);
}
charactersInRange ('#',

':')