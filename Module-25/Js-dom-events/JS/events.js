console.log('this is js file')
// option 1 index file e yellow button e directly kora hoyece
/* <button onclick="document.body.style.backgroundColor='yellow'">Make yellow</button> line-13 */

// option 2 onclick e function call kore
// Important : [sometime we will use this system]
// <button  onclick="makeRed()">Make red</button> line-14
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// option 3 getElementById diye dhore function creat kora line-15
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// option 3 another system with getElementById line-16
const makePurpleButton = document.getElementById('make-purple');
makePurpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple'
}

// option 4
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink);

function makePink() {
    document.body.style.backgroundColor = 'pink';
}

// option 4 another
const greenButton = document.getElementById('make-green');
greenButton.addEventListener('click', function() {
    document.body.style.backgroundColor = 'green';
});

// option-4 final [it is important. we will use this system sometime]
    document.getElementById('make-orange').addEventListener('click', function(){
        document.body.style.backgroundColor = 'orange';
})


