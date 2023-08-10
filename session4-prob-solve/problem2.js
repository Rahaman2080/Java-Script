// একটি ফাংশন লিখ যার নাম হবে "isJavaScriptFile" । প্যারামিটার হিসেবে একটি ‍ স্ট্রিং থাকবে। যদি  এটি জাভাস্ক্রিপ্ট ফাইল হয় তাহলে true return করবে নতুবা false return করবে। 
function isJavaScriptFile(filename){
    if(typeof filename !== 'string'){
        return 'Please provide valid file name (string)';
    }
    else{
        return filename.toLowerCase().endsWith('.js');
    }
}
console.log(isJavaScriptFile('Problem2.js'));