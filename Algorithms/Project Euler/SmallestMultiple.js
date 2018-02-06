// 2520 is the smallest number that can be divided by each 
// of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly 
// divisible by all of the numbers from 1 to 20?

function smallestMultiple(num){
    var check = num;
    var confirm = false;

    while(!confirm){
        for(var k = num; k>=1; k--){
            if(k === 1){
                confirm = true;
            }

            if(check%k!==0){
                check += num;
                break;
            }
        }
    }
    if(confirm){
      console.log(check);
    }
}

smallestMultiple(20);