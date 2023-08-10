// একটি ফাংশন লিখ যার নাম "isInteger" ইনপুট হিসেবে একটি নাম্বার থাকবে। নাম্বারটি integer কিনা চেক কর।

function isInteger(x){
    if(typeof x !== 'number'){
        return 'Please provide a number';
    }
    else{
        return x % 1 ===0; 
        }
    }
console.log(isInteger(4));
// remainder 0 asle seti integer hobe. thokon output true.remainder 0 na hole output false.