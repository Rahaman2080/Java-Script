// find minimum number using function and math.min()
function findMin (a, b, c){
    return Math.min(a, b, c);
}
const result = findMin(2384, 2832, 2109);
console.log(result, 'is the minimum number');



// find out min number using function parameter and if-else
function findMinimum (ami, tumi, shey){
    if( ami < tumi && ami < shey){
        return ami;
    }
    else if ( tumi < ami && tumi < shey){
        return tumi;
    }
    else {
        return shey;
    }
}
let findOut = findMinimum(10, 17, 9);
// console.log(findOut, 'is the Minimum number');