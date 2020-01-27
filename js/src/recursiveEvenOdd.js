let a = [2, 3, 5, 6, 7];

console.log('ans :', misingNumInSeq(a))


function misingNumInSeq(source, l = 0, r = source.length - 1) {

    if (source[l] % 2 === 0) {
        l += 1
    }
    if (source[r] % 2 != 0) {
        r -= 1
    }
    if (l >= r) {
        return source;
    }
    if (source[l] % 2 === 1) {
        [source[l], source[r]] = [source[r], source[l]]
        r -= 1
    }
   return  misingNumInSeq(source, l, r)
}