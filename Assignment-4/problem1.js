function cubeNumber(number) {
    if(typeof number !== 'number'){
        return 'Please provide a number';
    }
    else{
        // const cube = Math.pow(number, 3);
        const cube = number*number*number;
        return cube;
    }
}
console.log(cubeNumber(4));