function sort(inStr){

    if(inStr.length <= 1 ){
        return  inStr
    }
    let tempValue = inStr[0];
    return  ( sort(inStr.slice(1))  + tempValue )
}
let str  = "dam"
console.log('sort arr ' , sort(str))
console.log('sort arr ' , str )