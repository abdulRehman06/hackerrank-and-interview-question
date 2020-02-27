function maxValue(startIndex, endIndex, indexValue) {

    if( startIndex ===  endIndex){
        return arr[indexValue];
    }
    let pevit = startIndex;
    for (let i = startIndex; i < endIndex; i++) {
        if(arr[i] > arr[endIndex] ){
        
                [arr[i] , arr[pevit]] = [arr[pevit] , arr[i]   ] ;  // swap 
                ++pevit;
        }
    }

    [arr[pevit] ,  arr[endIndex] ] = [arr[endIndex] , arr[pevit] ]

    console.log(`sort arr = ${arr}  , pevit = ${pevit}  , endIndex = ${endIndex} `) 
    if(pevit > indexValue ){
       return   maxValue(startIndex    , pevit - 1, indexValue)
    }
    else if(pevit < indexValue ){
       return   maxValue(pevit + 1    , endIndex  , indexValue)
    }
    else{
        return arr[indexValue];
    }
}

// let arr = [3,1, 2, 6, 4, 8, 5];
let arr = [ 6,  8, 5,  4,3,1, 7];
// let arr = [ 6,  8, 5];
let index = 5 ;
console.log(`max value at index ${index}  = `, maxValue(0, arr.length - 1, index)) 