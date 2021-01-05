function gcd(val1, val2){
    var tmp;

    if(val1 < val2){
        tmp = val1;
        val1 = val2;
        val2 = tmp;
    }

    for(;val2 != 0;){
        tmp = val1 % val2;
        val1 = val2;
        val2 = tmp;
    }

    return val1;
}

function lcm(val1, val2){
    return val1 * val2 / gcd(val1, val2);
}

console.log(gcd(10, 15));
console.log(lcm(7, 15));