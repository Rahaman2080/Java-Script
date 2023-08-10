function factorial(number){
    let num = 1;
    let result = 1;
    while(num <= number){
        result = result * num;
        num++;
        console.log( result);
    }
    return result;
}
const fact = factorial(10);
// console.log(fact)
