let a = [2, 3, 5, 6, 7];

console.log('ans :', misingNumInSeq(a))


function misingNumInSeq(source, l = 0, r = source.length - 1) {

    if (source[l] % 2 === 0) {
        l += 1
    }
    if (source[r] % 2 != 0) {
        r -= 1
    }
    if (l >= r) {
        return source;
    }
    if (source[l] % 2 === 1) {
        [source[l], source[r]] = [source[r], source[l]]
        r -= 1
    }
   return  misingNumInSeq(source, l, r)
}


// let tempValue = [] ;
// function recEvenOdd(invalue) {
//     if (!invalue.length) {
//         return
//     }
//     if (invalue[0] % 2 == 0) {
//         console.log('Even :', invalue[0])

//         tempValue.push( 'even :' + recEvenOdd(invalue.slice(1)))
//     }
//     else {
//         console.log('Odd :', invalue[0])
//         // recEvenOdd(invalue.slice(1))
//         tempValue.push( 'Odd :' + recEvenOdd(invalue.slice(1)))
//     }
//     return   invalue[0]
// }

// let a = [1, 2, 3, 4, 5, 6 , 8];
// let tempValue = [];
// console.log('newArr :', recEvenOdd(a, tempValue))
// console.log('new arr :', tempValue)




// ---------------------------------------------------------------------------------------------------------
function recEvenOdd(invalue, inArr) {
    if (!invalue.length ) {

        return 
    }
    if (invalue[0] % 2 == 0) {
        inArr.push("Even :", invalue[0])
        recEvenOdd(invalue.slice(1), inArr)

    }
    else {
        inArr.push("Odd :", invalue[0])
        recEvenOdd(invalue.slice(1), inArr)
    }
    console.log('invalue[0] :', invalue[0])
}







let a = [1, 2, 3, 4, 5, 6 , 8];
let tempValue = [];
console.log('newArr :', recEvenOdd(a, tempValue))
console.log('new arr :', tempValue)