function misingNumInSeq(source) {
    source.sort((a, b) => a - b)
    let first = source[0];
    let last = source[source.length - 1];
    let sum = source.reduce((sum, value) => sum += value)
    console.log('Sum :', sum)
    let newArr = [];
    for (let index = first; index <= last; index++) {
        newArr.push(index)
    }
    console.log('newArr :', newArr)

    let tempCounter = 0;
    newArr.map((value, index, arr) => {
        if (arr[index] == source[tempCounter]) {
            tempCounter++;
        }
        else{
            console.log('Missing Value :' , arr[index] )
        }

    })

}
let a = [2, 4];
// let a = [2, 3, 6,9, 4];

console.log('call: ', a)
console.log('call: ', misingNumInSeq(a))