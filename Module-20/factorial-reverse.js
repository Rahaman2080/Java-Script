// factorial reverse using function with for loop

function factorial(number){
    let result = 1;
    for (let i =number; i >= 1; i--){
        result = result * i;
        console.log(i);
    }
    return result;
}

const number = 10;
const fact = factorial(number);
console.log( number, 'er factorial holo ', fact)