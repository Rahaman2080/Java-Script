function inchToFeet (inches){
    const feet = inches/12;
    return feet;
}
const riponsInches =108;
const riponsFeet = inchToFeet(riponsInches);
console.log('Ripons height is', riponsFeet, 'feet');


// call again with another input

const myInches = 66;
const myFeet = inchToFeet(myInches);
console.log('My height is', myFeet, 'feet')


// call again with another input

const paponInches = 72;
const paponFeet = inchToFeet(paponInches);
console.log('Papons height is', paponFeet, 'feet')