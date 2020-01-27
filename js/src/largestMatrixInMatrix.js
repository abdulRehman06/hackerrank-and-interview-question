'use strict'





function largestMatrix(arr) {
    let inputArr = arr.slice();
    let arrLength = inputArr.length;
    let noOfMatrix = 1;
    let matrixWidthHeight = arrLength;
    while (matrixWidthHeight > 1) {

        console.log("arrLength ", arrLength, " matrixWidthHeight ", matrixWidthHeight, ' noOfMatrix :', noOfMatrix)
        let value = largestMatrixOf(inputArr, matrixWidthHeight, noOfMatrix);
        console.log('Ans is : ', value)
        if (value > 1) {
            return value
        }
        matrixWidthHeight = matrixWidthHeight - 1;
        noOfMatrix = ((arrLength - matrixWidthHeight) + 1)
    }


}
function largestMatrixOf(arr, matrixWidthHeight, noOfMatrix) {
    // console.log(arr);
    let maxMatrixFlag = -1;
    for (let rowStartIndex = 0; rowStartIndex < noOfMatrix; rowStartIndex++) {
        nextMatrix:
        for (let colStartIndex = 0; colStartIndex < noOfMatrix; colStartIndex++) {
            // console.log('matrix :', matrix++)
            maxMatrixFlag = -1;
            for (let r = rowStartIndex; r < rowStartIndex + matrixWidthHeight; r++) {
                for (let c = colStartIndex; c < colStartIndex + matrixWidthHeight; c++) {
                    if (arr[r][c] != 1) {
                        continue nextMatrix;
                    }
                    else {
                        maxMatrixFlag = matrixWidthHeight;
                    }
                }
            }
            if (maxMatrixFlag == matrixWidthHeight) {
                return maxMatrixFlag
            }
        }
    }
    return -1
}

let arr = [

    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 0]



    // [1, 1, 1, 0],
    // [1, 1, 1, -1],
    // [1, 1, 0, 1],
    // [1, 0, 1, 0]


    // [1, 1, 1, 1, 1],
    // [1, 0, 1, 0, 1],
    // [1, 1, 1, 0, 1],
    // [1, 0, 1, 1, 1],
    // [1, 1, 1, 1, 1]
]


// console.log('before', arr)
console.log('Ans is:', largestMatrix(arr));
