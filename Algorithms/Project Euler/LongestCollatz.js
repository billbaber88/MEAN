// the following iterative sequence is defined 
// for the set of positive integers:

// n → n/2 (n is even)
// n → 3n + 1 (n is odd)

// Using the rule above and starting with 13, we 
// generate the following sequence:

// 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// It can be seen that this sequence (starting 
// at 13 and finishing at 1) contains 10 terms. 
// Although it has not been proved yet (Collatz Problem), 
// it is thought that all starting numbers finish at 1.

// Which starting number, under one million, produces 
// the longest chain?
var maxCount = 0;
var maxDex;
var newMax = false;

function longestCollatz(num, count = 0) {
    console.log("num is " + num);
    console.log("count is " + count);
    if (num === 1) {
        return count;
    }
    if (num % 2 === 0) {
        num = num / 2;
        // console.log("new num is " + num);
    } else {
        num = ((3 * num) + 1);
        // console.log("new num is " + num);
    }
    count++;
        // console.log("New count is " + count);
    if (count > maxCount) {
        maxCount = count;
        newMax = true;
        // console.log("true");
    }

    longestCollatz(num, count);
}

function abc(num) {
    for (var i = 0; i <= num; i++) {
        console.log(i);
        longestCollatz(num);
        if (newMax) {
            maxDex = i;
        }
    }
    console.log("Max count is " + maxCount);
    console.log("Maxdex is " + maxDex)
}

abc(1000000);
