function canPay(changeArray) {
    if(!Array.isArray(changeArray)){
    return 'Please, provide required input';
    }
     else{
        if(Array.isArray(changeArray) && changeArray.length === 0){
            return 'Error: Array must be contain any input.'
        }
        else{
            let sum = 0;
        for(let i = 0; i < changeArray.length; i++){
            sum += changeArray[i];
        }
        return sum;
      }      
    }
}
const firstArray = [1, 2, 5];
const twoInput = canPay(firstArray);
console.log(twoInput);

