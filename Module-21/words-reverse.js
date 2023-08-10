// word reversed with function and for loop

function reverseWords (str){
    let words = str.split(' ');
    const result = [];
    for (let i = words.length-1; i >= 0; i--){
        const element = words[i];
        result.push(element);
    }
    const reversed = result.join(' ');
    return reversed;

}
const myString = 'I am a good boy';
 const outPut= reverseWords(myString);
console.log(outPut);