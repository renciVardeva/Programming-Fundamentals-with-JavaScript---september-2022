function train(arr) {
  let passInTrain = arr.shift().split(" ").map(Number);
  let maxPassInWagon = Number(arr.shift());
  let arrLength = arr.length;

  for (let i = 0; i < arrLength; i++) {
    let currentCommand = arr[i].split(" ");
    if (currentCommand[0] === "Add") {
      let newWagon = Number(currentCommand[1]);
      passInTrain.push(newWagon);
    } else {
      for (let j = 0; j < passInTrain.length; j++) {
        let currentWagonPass = passInTrain[j];
        if (currentWagonPass + Number(currentCommand[0]) <= maxPassInWagon) {
          passInTrain[j] += Number(currentCommand[0]);
          break;
        }
      }
    }
  }
  console.log(passInTrain.join(" "));
}

train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
