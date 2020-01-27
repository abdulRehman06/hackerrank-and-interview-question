

function quickSort(leftIndex, rightIndex) {
    if (leftIndex >= rightIndex) {
        return
    }

    let pivitIndex = leftIndex;
    for (let i = leftIndex; i < rightIndex; i++) {
        if (arr[i] < arr[rightIndex]) {
            [arr[i], arr[pivitIndex]] = [arr[pivitIndex], arr[i]] // swap 
            pivitIndex++
        }
    }
    [arr[rightIndex], arr[pivitIndex]] = [arr[pivitIndex], arr[rightIndex]] // swap 
    console.log('sorted arr :' , arr ,  pivitIndex  , arr[rightIndex], arr[pivitIndex]  )
    quickSort(leftIndex , pivitIndex - 1)
    quickSort(pivitIndex + 1 ,rightIndex)
}

let arr = [ 6, 8, 5, 4 , 7,1]
console.log('quick sort ', quickSort(0, arr.length - 1))


// murge sort 
function murge(a,b){
    let newArr = [];    
    let l =  r = 0 ;
    while( l < a.length &&  r < b.length){
        if(a[l] < b[r]){
        newArr.push(a[l]);
        l +=1;
    }
    else{
    newArr.push(b[r]);
    r +=1 ;
    }

    }
    newArr  =  ( a[l] != undefined ) ?    [...newArr , ...a.slice(l) ] :   [...newArr , ...b.slice(r) ] 
    
    console.log('sorted arr :'  , [...newArr] )
    return [...newArr]  ;
    }

    function murgeSort(params) {
        if( params.length  < 2){
            return params
        }
        let lArr  = params.splice(params.length/2);
        console.log('l : ' ,  lArr ,  'r ' ,  params)
        
        return  murge(murgeSort( lArr)  , murgeSort(params ) )
    }

  //  let l = [3 , 4 , 5 ]  , r = [1, 2 ,4 ];
    // murge(l,r)
    // murge(r, l)

    murgeSort([1,2,4,2,1,6 , 4])