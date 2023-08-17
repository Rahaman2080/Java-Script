//subhanallah card er js function
const subhanallahDisplay = document.getElementById('subhanallahDisplay')
// subhanallah increment button
const subhanallahIncrementBtn = document.getElementById('subhanallahIncrementBtn')

let subhanallahInitialValue = 0;
subhanallahIncrementBtn.addEventListener('click', function(){
    if(subhanallahInitialValue === 33){
        return alert('সুবহানাল্লাহ শেষ। পরের টা গুণতে পারেন।')
    }
    subhanallahInitialValue += 1;
    subhanallahDisplay.innerText = subhanallahInitialValue;
})
// subhanallah decrement button
const subhanallahDecrementBtn = document.getElementById('subhanallahDecrementBtn')
subhanallahDecrementBtn.addEventListener('click', function(){
    if(subhanallahInitialValue === 0){
        return alert('শূন্যের নিচে গণনা হয় না।')
    }
    subhanallahInitialValue -= 1;
    subhanallahDisplay.innerText = subhanallahInitialValue;
})

// Alhamdulillah card er js function
const alhamdulillahDisplay = document.getElementById('alhamdulillahDisplay')
// Alhamdulillah increment button
const alhamdulillahIncrementBtn = document.getElementById('alhamdulillahIncrementBtn')
let alhamdulillahInitialValue = 0;
alhamdulillahIncrementBtn.addEventListener('click', function(){
    if(alhamdulillahInitialValue === 33){
        return alert('আলহামুদলিল্লাহ শেষ। পরের টা গুণতে পারেন।')
    }
    alhamdulillahInitialValue += 1;
    alhamdulillahDisplay.innerText = alhamdulillahInitialValue;
})
// Alhamdulillah Decrement button
const alhamdulillahDecrementBtn = document.getElementById('alhamdulillahDecrementBtn')
alhamdulillahDecrementBtn.addEventListener('click', function(){
    if(alhamdulillahInitialValue === 0){
        return alert('শূন্যের নিচে গণনা হয় না।')
    }
    alhamdulillahInitialValue -= 1;
    alhamdulillahDisplay.innerText = alhamdulillahInitialValue;
})

// AllahuAkbar card er js function
const allahuAkbarDisplay = document.getElementById('AllahuAkbarDisplay')
// AllahuAkbar Increment button
const allahuAkbarIncrementBtn= document.getElementById('allahuAkbarIncrementBtn')
let allahuAkbarInitialValue = 0;
allahuAkbarIncrementBtn.addEventListener('click', function(){
    if(allahuAkbarInitialValue === 34){
        return alert('মাশাআল্লাহ! আল্লাহ আপনাকেে উত্তম প্রতিদান দিক।')
    }
    allahuAkbarInitialValue += 1;
    allahuAkbarDisplay.innerText = allahuAkbarInitialValue;
})
// AllahuAkbar Decrement button
const allahuAkbarDecrementBtn = document.getElementById('allahuAkbarDecrementBtn')
allahuAkbarDecrementBtn.addEventListener('click', function(){
    if(allahuAkbarInitialValue === 0){
        return alert('শূন্যের নিচে গণনা হয় না।')
    }
    allahuAkbarInitialValue -= 1;
    allahuAkbarDisplay.innerText = allahuAkbarInitialValue;
})
// Reset button
resetBtn.addEventListener('click', function(){
    subhanallahDisplay.innerText = 0;
    alhamdulillahDisplay.innerText = 0;
    allahuAkbarDisplay.innerText = 0;
    subhanallahInitialValue = 0;
    alhamdulillahInitialValue = 0;
    allahuAkbarInitialValue = 0;
})

