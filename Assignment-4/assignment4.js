function cubeNumber(number) {
    if(typeof number !== 'number'){
        return 'Please provide a number';
    }
    else{
      const cube = Math.pow(number, 3);
      return cube;
    }
}

function matchFinder(string1, string2) {
  if( typeof string1 !== 'string' || typeof string2 !== 'string'){
     return 'invalid input'
  }
  else{
      const findMatching = string1.includes(string2);
      return findMatching;
  }
}

function sortMaker(arr){
  if(!Array.isArray(arr)){
    return "Please provide an array of numbers";
  }
  else{
    if(arr[0] < 0 || arr[1] < 0){
      return 'Invalid input';
    }
    else if(arr[0] === arr[1]){
        return "equal";
    }
    else{
      if(arr[0] > 0 || arr[1] > 0){
        let temp = arr[0];
        arr[0] = arr[1];
        arr[1] = temp;
        return arr;
      }
    }
  }
}

function findAddress(address){
  if(typeof address !== 'object'){
      return "Please provide a valid object";
  }
  else{
    const street = address.street || '__,';
    const house = address.house || '__,';
    const society = address.society || '__';
    return street + house + society;
  }
}

function canPay(changeArray, totalDue) {
  if(!Array.isArray(changeArray) || typeof totalDue !== 'number'){
  return 'Please, provide required input';
  }
   else{
      if(Array.isArray(changeArray) && changeArray.length === 0){
        return 'Error: Array must be contain any input.';
      }
      else{
          let sum = 0;
      for(let i = 0; i < changeArray.length; i++){
          const index = i;
          const element = changeArray[index];
          sum = sum + element;
      }
      return sum >= totalDue;
    }      
  }
}