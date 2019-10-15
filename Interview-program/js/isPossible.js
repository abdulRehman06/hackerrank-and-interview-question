// 'use strict';
'use strict'
//(a,b) -> (a, a  + b)
//(a,b) -> (a+b , b)
// complete the question above weather you can convert the (a,b) to (c,d)  using the above condition

function largestMatrix(a, b, c, d) {

    let returnAns = (checkCordinate(a, b, c, d) != 'YES') ? checkCordinate(b, a, c, d) : 'YES'

    return returnAns
}


function checkCordinate(a, b, c, d) {
    let flagAC = 0, flagBD = 0;
    let newA = a;
    let newB = b;
    console.log('start  :newA', newA, '  newB', newB);

    while (newA <= c || newB <= d) {

        if (newA == c) {
            // console.log("newA", newA)
            flagAC = 1;
        }
        if (newB == d) {
            // console.log("newB", newB)
            flagBD = 1;
        }
        // console.log('before  :newA' , newA , '  newB' , newB);
        newA = newA + newB;
        newB = newB;
        [newA, newB] = [newB, newA]; // swap     
    }
    let returnAns = (flagAC == flagBD) ? 'YES' : 'NO'
    return returnAns
}



//  let a = 1, b = 4, c = 5, d = 6;
//  let a = 1, b = 4, c = 5, d = 9;
//  let a = 1, b = 4, c = 14, d = 9; 
//  let a = 1, b = 1, c = 2, d = 3; 
let a = 2, b = 1, c = 2, d = 9;

console.log(largestMatrix(a, b, c, d));