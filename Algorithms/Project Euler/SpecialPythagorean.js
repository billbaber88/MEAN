// A Pythagorean triplet is a set of three natural 
// numbers, a < b < c, for which, a2 + b2 = c2
// For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

// There exists exactly one Pythagorean triplet 
// for which a + b + c = 1000. Find the product abc.

function specialPythagorean(){
    var a,b,c;
    
    for(a=1; a<1001; a++){
        for(b=1; b<1001-a; b++){
          var match = false;
            for(c=1001-a-b; c>0; c--){
                if(a+b+c===1000 && ((a*a) + (b*b))===(c*c)){
                    console.log("winner!");
                    console.log(a);
                    console.log(b);
                    console.log(c);
                    console.log(a*b*c);
                }
            }
        }
    }
    
}

specialPythagorean();