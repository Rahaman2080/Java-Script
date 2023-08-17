
// get the withdraw button event handler
document.getElementById('btn-withdraw').addEventListener('click', function(){
    /*
    1. get the element by id
    2. get the value from the element
    3. convert string value to a number egula just function e kora holo
    */

    const newWithdrawAmount = getInputValueById('withdraw-field');
    /*
    1. get previous deposit total by id
    2. 
    */
   const previousWithdrawTotal = getElementValueById('withdraw-total');
//    calculate new deposit total
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    // set deposit total value
    setTextElementValueById('withdraw-total', newWithdrawTotal);

    // get previous balance by using the function
    const previousBalanceTotal = getElementValueById('balance-total');
    // calculate new balance total
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
})