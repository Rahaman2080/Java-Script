function milesToKilometer(miles){
    const kilometer = miles*1.609;
    return kilometer;
}
const cycling =10;
const mylength = milesToKilometer(cycling);
console.log('I have gone about', mylength, 'kilometers');
