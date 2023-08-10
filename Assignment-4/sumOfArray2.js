function canPay(changeArray) {
    if(!Array.isArray(changeArray)){
    return 'Please, provide required input';
    }
     else{
        if(Array.isArray(changeArray) && changeArray.length === 0){
            return 'Array is empty. Please, Provide any input.'
        }
        else{
            let sum = 0;
        for(let i = 0; i < changeArray.length; i++){
            const index = i;
            const element = changeArray[index];
            sum = sum + element;
        }
        return sum;
      }      
    }
  }
  console.log(canPay([10,20,30]));