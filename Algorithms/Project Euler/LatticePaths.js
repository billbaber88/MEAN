// Starting in the top left corner of a 2×2 grid, and only 
// being able to move to the right and down, there are exactly 
// 6 routes to the bottom right corner.

// How many such routes are there through a 20×20 grid?

//Assumption: all grids are perfect squares

function latticePaths(gridSize) {
    var x = gridSize * 2;
    var y = gridSize;
    var xFactorial = 1;
    var yFactorial = 1;
    var xMinusYFactorial = 1;

    for (var i = x; i > 1; i--) {
        xFactorial *= i;
    }
    // console.log("x factorial: " + xFactorial);

    for (var k = y; k > 1; k--) {
        yFactorial *= k;
    }
    // console.log("y factorial: " + yFactorial);
    console.log(x - y);
    for (var c = (x - y); c > 1; c--) {
        xMinusYFactorial *= c;
    }
    // console.log("xminusY factorial: " + xMinusYFactorial);

    var numberOfPaths = (xFactorial) / (yFactorial * (xMinusYFactorial));
    console.log(numberOfPaths);

}

latticePaths(20);