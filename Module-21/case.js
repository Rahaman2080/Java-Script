// check string using toLowerCase / toUpercase or toLocalLowerCase / toLocalUperCase.

const userName = 'blackPink';
const userInput = 'blackPinK';

if( userName.toLowerCase() === userInput.toLowerCase()){
    console.log('valid user');
}
else{
    console.log('invalid user');
}
// output: invalid user. that means userName and userInput value is not equal because of their character difference. the differnce between userName and userInput is 'k'.

// when i use .toLowerCase() with both variable name then the output is showing valid user.