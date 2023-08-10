function sortMaker(arr) {
    let number1 = arr[0];
    let number2 = arr[1];
    if(number1 < 0 || number2 < 0){
        return "Invalid Input";
    }
     else if(number1 === number2){
        return "equal";
    }
     else {
        if (number1 > 0 || number2 > 0){
            let temp = number1;
            number1 = number2;
            number2 = temp;
            return [number1,number2];
        }
     }
}
console.log(sortMaker([2,3])); 
console.log(sortMaker([4,2])); 
console.log(sortMaker([4,4])); 
console.log(sortMaker([1,2])); 
console.log(sortMaker([4,-4]));