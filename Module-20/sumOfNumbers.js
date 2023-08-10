function sumOfNumbers(){
    let sum =0;
for(let i = 1; i <= 7; i++){
    sum = sum + i;
    console.log(i, sum);
}
return sum;
}
const getSum = sumOfNumbers();
console.log('the sum of 1 to 7 is=', getSum);