// handle with call function and getElementById
function handleOnClick(){
    const handleStatus = document.getElementById('handler-status');
    handleStatus.innerText = 'onclick এ function কে কল করে এখানে ঘটনা ঘটানো হয়েছে আর কি';
}

// another option 2
document.getElementById('event-listener').addEventListener('click', function(){
    const handlerStatus = document.getElementById('handler-status');
    handlerStatus.innerText = 'addEventListener দ্বারা button কে গুতা মেরে এই লেখাটা পরিবর্তন করা হয়েছে';
})

// option 2 recap
document.getElementById('comment-btn').addEventListener('click', function(){
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;

    const text = document.getElementById('input-text-display');
    text.innerText = inputText;
    inputField.value = '';
})