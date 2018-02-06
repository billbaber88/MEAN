function threeAndFive(num){
    var count = 0;
    for(var i = 0; i<num; i++){
        if(i%3 === 0 || i%5 === 0){
            count+=i;
        }
    }
    return count;
}

count(1000);
