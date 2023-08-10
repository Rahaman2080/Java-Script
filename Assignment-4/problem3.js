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
console.log(sortMaker([2, 3]));
console.log(sortMaker([2, 4]));
console.log(sortMaker([4, 4]));
console.log(sortMaker([4, -2]));


