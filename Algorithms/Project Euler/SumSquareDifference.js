// Hence the difference between the sum of the squares of 
// the first ten natural numbers and the square of the sum 
// is 3025 − 385 = 2640.

// Find the difference between the sum of the squares of 
// the first one hundred natural numbers and the square 
// of the sum.

function squareDifference(num){
    var squareSquare = 0;
    var totalSquare = 0;
    for(var i = 1; i<=num; i++){
        squareSquare += i*i;
        totalSquare += i;
    }
    totalSquare = totalSquare*totalSquare;
    console.log(totalSquare - squareSquare);
}

squareDifference(100);