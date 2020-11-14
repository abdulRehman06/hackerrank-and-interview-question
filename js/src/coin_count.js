function abc(arr, value) {
  let coin = [];
  let tempValue = 0;
  let reminder = value;
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(`reminder  `, reminder)
    if (reminder > arr[i]) {
      let mode = parseInt(reminder / arr[i])
      tempValue = tempValue + (mode * arr[i]);
      reminder = reminder - tempValue;
      coin.push({ count: mode, coin: arr[i] })
    }
    else if (reminder == arr[i]) {
      tempValue = tempValue + reminder

      coin.push({ count: 1, coin: arr[i] })
      break;
    }

  }
  if (value == tempValue) {
    console.log('Match ', JSON.stringify(coin))

  }
  else {
    console.log('Not Found  ', JSON.stringify(coin))
  }

}
let a = [1, 2, 3, 4, 5];
abc(a, 12)
