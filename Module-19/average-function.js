function make_avg (number1, number2, number3){
    const total = number1 + number2 + number3;
    const avg = total/3;
    return avg;
}

const myAvg = make_avg(120, 144, 150);
console.log('average is', myAvg);