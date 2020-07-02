console.log("even odd ")

function evenOddinArray(inArr) {
    if (Object.prototype.toString.call(inArr) != "[object Array]") {
        return `input value is not Array`
    }
    let left = 0;
    let right = inArr.length - 1;
    // console.log(  "a" , left , right )
    while (left < right) {
        if (inArr[left] % 2 == 0) {
            left += 1;
        }
        if (inArr[right] % 2 == 1) {
            right -= 1;
        }
        if (inArr[left] % 2 == 1 && inArr[right] % 2 == 0) {
            [inArr[left], inArr[right]] = [inArr[right], inArr[left]]
            left += 1;
            right -= 1;
        }
    }
}
let arr =   [0,0,0,0 ];
// console.log(" Arr ", ...arr)
let newValue =  evenOddinArray(arr) ;
console.log("new Arr ", newValue )
console.log("new Arr ", arr )