function longesRepetedString(strinh) {
    if (!(typeof strinh == "string")) {
        return "not an array "
    }
    let maxCount = 0;
    let tempCount = 1;
    let characher =  ''
    for (let index = 0; index < strinh.length; index++) {
        if (strinh[index ] == strinh[index + 1 ]) {
            tempCount += 1;
            if (tempCount > maxCount) {
                maxCount = tempCount;
                characher  = strinh[index]  ;   

            }
        }
        else {
            tempCount = 1;
        }
    }
    console.log(` the count of ${characher} is ${maxCount}`)


}

let arr = "aaabbbb";
console.log(longesRepetedString(arr)) 