/*
step-1: get button deposit using id and handle with addEventListener
step-2: get deposit amount from deposit input field
step-2.2: convert it to number using parseFloat
step-3: have to empty deposit field and if deposit value is NaN give an alert
step-4: get the current total deposit and set total deposit
 */
// step-1
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step-2 
    const depositField = document.getElementById('deposit-field');
    const depositAmountString = depositField.value;
    // step-2.2
    const newDepositAmount = parseFloat(depositAmountString);
    // step-3
    depositField.value = '';

    if(isNaN(newDepositAmount)){
        alert('please, provide a valid number');
        return;
    }
    // step-4:
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString= depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;

    // step-5
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    // set total balance
    const currentBalanceTotal = previousBalanceTotal +newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;
})