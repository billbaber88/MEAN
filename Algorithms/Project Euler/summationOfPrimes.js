// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.


function summationOfPrimes(num) {
    var count = 3;
    var sum = 2;
    while (count <= num) {
        var check = true;
        var i = Math.floor(count / 2);
        while (i > 1) {
            if (count % i === 0) {
                check = false;
            }
            if (i % 2 === 1) {
                i -= 2;
            } else {
                i--;
            }
        }
        if (check) {
            // console.log(count);
            sum += count;
            //   console.log(sum);
        }
        count += 2;
    }
    console.log(sum);
}

summationOfPrimes(2000);