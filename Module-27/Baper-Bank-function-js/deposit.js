

document.getElementById('btn-deposit').addEventListener('click', function(){
    /*
    1. get the element by id
    2. get the value from the element
    3. convert string value to a number egula just function e kora holo
    */

    const newDepositAmount = getInputValueById('deposit-field');
    /*
    1. get previous deposit total by id
    2. 
    */
   const previousDepositTotal = getElementValueById('deposit-total');
//    calculate new deposit total
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    // set deposit total value
    setTextElementValueById('deposit-total', newDepositTotal);

    // get previous balance by using the function
    const previousBalanceTotal = getElementValueById('balance-total');
    // calculate new balance total
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
})