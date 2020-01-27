var fibo = function(computed, number) {
    if (number < 3) {
     return 1;
     }
     // If fibonacci for this this position is calculated just return.
     // This is called memoization (Dynamic Programming)
     if (computed[number]) {
    console.log('computed[number] = ' , computed[number])
     return computed[number]
     } else {
        console.log(' else computed[number] = ' , computed[number])
     computed[number - 1] = fibo(computed, number - 1);
     computed[number - 2] = fibo(computed, number - 2);
     return computed[number - 1] + computed[number - 2];
     }
    }