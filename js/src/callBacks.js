

// logMessage(great(() => great(() => 'hi'))) // solve this question .....?


(() => {
    let x = y = 1;
    try {
        throw new Error();
    } catch (x) {
        (x = 1), (y = 2);
        console.log(x);
    }
    console.log(x);
    console.log(y);
})();


let inValue = 0;

function addTen(inValue) {
    return inValue += 10
}
function addTwen(inValue) {
    setTimeout(() => {
        inValue += 20
        inValue  =  addTher(inValue)
        console.log('Total :',  inValue )
        return  inValue
    }, 1000);
}
function addTher(inValue) {
    return inValue += 30
}
function doTotal(inValue) {
    let a = addTen(inValue)
    a = addTwen(a)


}
doTotal(inValue)



function logMessage(callBack){
    console.log("hello " , callBack)
}

const great = (callBack) => {
    return callBack()
}
logMessage(great(() =>  great( function(){ return  "hi greate" } ) ));