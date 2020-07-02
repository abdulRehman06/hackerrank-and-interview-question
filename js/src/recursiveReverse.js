function sort(inStr){

    if(inStr.length <= 1 ){
        return  inStr
    }
    let tempValue = inStr[0];
    return  ( sort(inStr.slice(1))  + tempValue )
}


function recReverse(inValue){
    if(inValue.length <= 1 ){
        return  inValue
    }
    else{
        let    tempValue = inValue[0]
         return  recReverse(inValue.slice(1)) + tempValue 
    }
    // console.log(tempValue)
}
let str  = "dam"
console.log('sort arr ' , sort(str))
console.log('sort arr ' , str )
 str  = "hello"
console.log('sort arr ' , recReverse(str))
console.log('sort arr ' , str )