const num1 = 67;
const num2 = 88;
const num3 =97;
function maxNumber(number1, number2, number3){

    if(number1 > number2 && number1 > number3){
        console.log(num1, 'is the largest number')
    }
    else if( number2 > number1 && number2 > number3){
        console.log(num2, 'is the largest number')
    }
    else {
        console.log(num3, 'is the largest number')
    }
    
}
const largestNumber = maxNumber(num1, num2, num3);