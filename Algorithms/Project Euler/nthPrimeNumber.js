// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, 
// we can see that the 6th prime is 13.

// What is the 10 001st prime number?

function primeAtNthNumber(num){
    var count = 1;
    var idx = 2;
    while(count<=num){
        var check = true;
        for(var i = Math.ceil(idx/2); i>1; i--){
            if(idx%i===0){
                var check = false;
            }
        }
        if(check){
            count++;
            idx++;
        } else {
            idx++;
        }
    }
    console.log(idx);
}

primeAtNthNumber(6);