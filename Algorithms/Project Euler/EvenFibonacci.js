// Each new term in the Fibonacci sequence is generated by adding 
// the previous two terms. By starting with 1 and 2, the first 10 
// terms will be:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// By considering the terms in the Fibonacci sequence whose values 
// do not exceed four million, find the sum of the even-valued terms.

function FibEven(num) {
    var fibArr = [0, 1];
    var i = 1;
    var total = 0;
    while (fibArr[i] <= num) {
        fibArr.push(fibArr[i] + fibArr[i - 1]);
        i++;
    }
    console.log(fibArr);
    console.log(fibArr.length);

    for (var k = 0; k < fibArr.length - 1; k++) {
        if (fibArr[k] % 2 === 0) {
            total += fibArr[k];
        }
    }
    console.log(total);
}

FibEven(4000000);
  //4613732