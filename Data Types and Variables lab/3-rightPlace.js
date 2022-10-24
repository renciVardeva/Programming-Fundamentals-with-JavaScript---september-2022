function rightPlace (firstWord, char, secondWord){
    let result = firstWord.replace ('_', char);
    let finalResult = result === secondWord? 'Matched': 'Not Matched';
    console.log(finalResult);
}
rightPlace ('Str_ng', 'I',

'Strong')