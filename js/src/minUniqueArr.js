console.log('min unique arr')


function minUniqueArr(arr) {
    let inputArr = arr.slice();
    let duplicateCount = 0;
    inputArr.sort((a, b) => a - b); // sort in ascending  order
    let maxValue = inputArr[inputArr.length - 1] 
    // console.log(inputArr)

    //remove duplicate from arr
    let newArr = inputArr.filter((value, index, arr) => {
        if (value != arr[index + 1]) {
            return value;
        }
        else {

            //counting duplicate value
            duplicateCount++;
        }
    });

    console.log(newArr);
    console.log( 'maxValue' , maxValue);
    console.log('duplicateCount', duplicateCount);

    //finding/inserting missing value  in newArr
    for (let i = 1;  duplicateCount > 0  ; i++) {
        // console.log('i', i, newArr.indexOf(i))
        if (newArr.indexOf(i) == -1) { //if value is not present in arr then insert into newArr
            newArr.push(i);
            duplicateCount--;
            console.log('duplicateCount' , duplicateCount)
            // console.log("missingValue", i)
            // console.log(newArr);
            // if (duplicateCount < 1) {
            //     break;
            // }

        }

    }
    console.log('newArr' , newArr);
    let sumOfArr = newArr.reduce((sum , value) => sum + value )
    return sumOfArr ;



}

let arr = [  2, 2 ,2 ];
// let arr1 = [1, 2, 2, 7, 8 ,8, 12];
console.log('before ', arr)
console.log('ans is ', minUniqueArr(arr))