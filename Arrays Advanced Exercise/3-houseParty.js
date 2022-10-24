function houseParty(arr){

    let guestList = [];

    for (let name of arr){
        let command = name.split(' ');
        let guestName = command[0];
         if (command.length === 3){
            if (guestList.includes(guestName)){
                console.log(`${guestName} is already in the list!`);
            } else {
                guestList.push(guestName);
            }
         } else {
            if (!guestList.includes(guestName)){
                console.log(`${guestName} is not in the list!`);
            } else {
                let index = guestList.indexOf(guestName);
                guestList.splice(index, 1)
            }
         }

    }
    console.log(guestList.join('\n'));
}
houseParty(['Tom is going!',

'Annie is going!',

'Tom is going!',

'Garry is going!',

'Jerry is going!'])