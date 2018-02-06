// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

function largestPrimeFactor(num) {
    var factors = [];
    for (var i = 2; i <= num / 2; i++) {
        var prime = true;
        if (num % i === 0) {
            for (var k = Math.ceil(i / 2); k > 2; k--) {
                if (i % k === 0) {
                    prime = false;
                    break;
                }
            }
            if (prime) {
                console.log(i);
                factors.push(i);
            }
        }

    }
    console.log(factors);
    console.log(factors[factors.length - 1]);
}

largestPrimeFactor(600851475143);