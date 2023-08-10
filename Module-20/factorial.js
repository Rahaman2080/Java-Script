// multiplication korar system holo factiorial

function factorial(number){
    let result = 1;
    for(let i = 1; i <=7; i++){
        result = result * i;
    }
    return result;
}
const result = factorial(7);
console.log('the multiplication of 1 to 7 is =', result)


/*---------------
About factorial
-----------------
 1! = 1
 
 2! = 2*1

 3! = 3*2*1 or 3! = 3*2!  or   3! = 3*(3-1)!

 4! = 4*3*2*1  or   4! = 4*3!   or   4! = 4*(4-1)!

 5! = 5*4*3*2*1  or   5! = 5*4!   or 5* = 5*(5-1)!

*/ 