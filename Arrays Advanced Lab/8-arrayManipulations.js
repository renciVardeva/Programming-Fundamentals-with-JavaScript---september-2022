function arrayManipulations(input) {
    let arr = input.shift().split(' ').map(Number);
 
    while (input.length !== 0) {
        let command = input.shift().split(' ');
 
        if (command[0] === 'Add') {
            add(Number(command[1]));
        } else if (command[0] === 'Remove') {
            remove(Number(command[1]));
        } else if (command[0] === 'RemoveAt') {
            removeAt(Number(command[1]));
        } else if (command[0] === 'Insert') {
            insert(Number(command[1]), Number(command[2]));
        }
    }
 
    function add(num) {
        arr.push(Number(num));
    }
 
    function remove(num) {
        arr = arr.filter(x => x !== num);
    }
 
    function removeAt(num) {
        arr.splice(num, 1);
    }
 
    function insert(num, i) {
        arr.splice(i, 0, num);
    }
 
    console.log(arr.join(' '));
 
}
arrayManipulations(['4 19 2 53 6 43',

'Add 3',

'Remove 2',

'RemoveAt 1',

'Insert 8 3'])