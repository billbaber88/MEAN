// A palindromic number reads the same both ways. The 
// largest palindrome made from the product of two 
// 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product 
// of two 3-digit numbers.

function largestPalindromeProduct() {
    var i = 100;
    var max = 0;
    while (i < 1000) {

        for (var k = 100; k < 1000; k++) {
            var check = String(i * k);
            var palindrome = true;
            for (var c = 0; c < check.length / 2; c++) {
                if (check[c] !== check[check.length - (1 + c)]) {
                    palindrome = false;
                    break;
                }
            }
            if (palindrome && parseInt(check) > max) {
                max = parseInt(check);
                console.log(max);
            }
        }
        i++;
    }
    console.log(max);
}

largestPalindromeProduct();