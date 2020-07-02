function charCount(inArr) {
    let oMap = new Map();
    for (const iterator of inArr) {
        if(oMap.has(iterator)){
            let temp = oMap.get(iterator)
            oMap.set(iterator , temp+=1 )
        }
        else{
            oMap.set(iterator , 1 )
        }
    }
    console.log(oMap)
}
charCount([1,2,3,2,3,4,2])