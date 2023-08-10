function kiloToMeter (kilometers){
    const meter = kilometers*1000;
    return meter;
}
const length = 12;
const convMeter = kiloToMeter(length);
console.log('It is about', convMeter, 'meters');