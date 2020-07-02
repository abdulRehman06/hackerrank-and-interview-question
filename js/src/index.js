// const evenOdd  = require('./counterCharFreq');


function minFind(inArr) {
    let left = 0;
    let right = inArr.length - 1;
    let max = inArr[0];
    while (left < right) {
        if (inArr[left] > inArr[right]) {
            max = inArr[left];
            right -= 1;
        }
        if (inArr[left] <  inArr[right]) {
            max = inArr[right];
            left += 1;
        }
        if (inArr[left] ==  inArr[right]) {
            left += 1;
        }
    }
    console.log(`max :  ${max}`)
}
minFind([111,9999, 2, 3,999999 ]);
