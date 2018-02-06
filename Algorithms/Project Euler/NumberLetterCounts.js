// If the numbers 1 to 5 are written out in words: one, two, three, 
// four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used 
// in total.

// If all the numbers from 1 to 1000 (one thousand) inclusive were
//  written out in words, how many letters would be used?


// NOTE: Do not count spaces or hyphens. For example, 342 
// (three hundred and forty-two) contains 23 letters and 115 
// (one hundred and fifteen) contains 20 letters. The use of "and" 
// when writing out numbers is in compliance with British usage.

var letters = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,x,w,y,z];
var numberToWords = require('number-to-words');
var count = 0;
function lettersCount(num){
    for(var i = 1; i<=num; i++){
        var string = numberToWords(i);
        for(var j = 0; j<string.length; j++){
            for (var k = 0; k<letters.length; k++){
                if(letters[k]==iToString[j]){
                    count++;
                }
            }
        }
    }
    console.log(count);
}

lettersCount(5);