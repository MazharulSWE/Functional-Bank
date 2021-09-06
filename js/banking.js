// Function for getting deposit and withdraw input value 
function getInputValue(inputId) {
const inputField = document.getElementById(inputId);     
const inputAmountText= inputField.value;   
const amountValue = parseFloat(inputAmountText);
//clear input  field
inputField.value = '';
return amountValue;
};
// Function for updating deposit and withdraw value (add)
function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText =previousTotal + amount;
}
// Get current balance ( this one for protecting more withdraw amount than balance )
   function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
   return previousBalanceTotal;
   };
// Update balance for for deposit and withdraw
function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal +amount;
    }
    else{
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
};
//Deposit amount part...
document.getElementById('deposit-button').addEventListener('click', function () {
    const depositAmount = getInputValue('deposit-input'); 
    if (depositAmount > 0) {
        updateTotalField('deposit-total',depositAmount);
        updateBalance(depositAmount, true);    
    }
});
// Withdraw amount part 
document.getElementById('withdraw-button').addEventListener('click', function () {   
    const withdrawAmount = getInputValue('withdraw-input');
    const curretBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < curretBalance ) {
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);    
    }
    if (withdrawAmont > currentBalance) {
        console.log('You can not withdraw more than what you have in your account');
    }
});