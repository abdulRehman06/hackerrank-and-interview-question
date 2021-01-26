function minimumAbsoluteDifference(n, arr) {
    arr.sort((a, b) => Math.abs(a) - Math.abs(b))
    let sum = 0, firrst = arr[0];
    for (let index = 1; index < arr.length; index++) {
        sum = sum + Math.abs(firrst - arr[index])
        firrst = arr[index]
    }
    return sum
}

function main() {
    let n = 5;
    let arr = [1, 3, 3, 2, 4]
    // let arr = [5, 1, 3, 7, 3]
    var result = minimumAbsoluteDifference(n, arr);
    console.log(`result  ${result}`)

}
// main()
function minimumAbsoluteDifference(arr) {
    console.log(`arr :`, arr)
    arr.sort((a, b) => Math.abs(a) - Math.abs(b))
    console.log(`after sort arr :`, arr)
    let min = Number.MAX_VALUE, firrst = arr[0];
    for (let index = 1; index < arr.length; index++) {
        min = Math.min(min, Math.abs(firrst - arr[index]))
        firrst = arr[index]
    }
    console.log(`min  ${min}`)
    return min;
}
let arr = [3, -7, 0]
minimumAbsoluteDifference(arr)

