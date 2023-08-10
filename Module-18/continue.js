// showing a loop for continue . it means skip according to condition
var numbers = [45, 84, 89, 56, 32, 51, 25];

for( var i=0; i < numbers.length; i++){
    var number = numbers[i];
    
    if( number > 50 ){
        continue;
    }
    console.log(number);
}