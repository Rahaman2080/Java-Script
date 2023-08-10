// Write a function called "mindGame" which will take a parameter is a positive number. with this number multiply 3, then add 10, then divide with 2, then substract 5. return the output.
// sample input=5 and  output= 7.5

function mindGame(x){
    if(typeof x !== 'number'){
        return 'please provide a number';
    }
    else if( x <= 0){
        return 'Please provide a positive number'; 
    }
    else{
        const result = (((x*3)+10)/2)-5;
        return result;
    }
}
// console.log(mindGame(5));

// using if else and or
function mindGame(x){
    if(typeof x !== 'number' || x <= 0){
        return 'please provide a positive number';
    }
    else{
        const result = (((x*3)+10)/2)-5;
        return result;
    }
}
console.log(mindGame(-5));