



function fabonaci(inValue) {
   let first = 0;
   let sec = 1
   let next = 0;
   for (let i = 0; i < inValue; i++) {
      console.log(next);
      first = sec;
      sec = next;
      next = first + sec
   }
   // return next;

}


function recfibonacci(num) {
   if (num < 3) return 1;
   return recfibonacci(num - 1) + recfibonacci(num - 2);
}


function memoizeFabonaci(index, cache = []) {
   console.log('index :', index, '   cache:', cache)

   if (cache[index]) {
      return cache[index] 
   }
   else {
      if (index < 3) return 1
      else {
         cache[index] = memoizeFabonaci(index - 1, cache) + memoizeFabonaci(index - 2, cache)
      }
   }
   return cache[index];

}




let a = 15
console.log('Memoize febonaci', memoizeFabonaci(a))
console.log("rec : ", recfibonacci(a))
console.log("rec : ", fabonaci(a))