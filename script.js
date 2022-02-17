function getInput(inputValue) {
    let inputCost = document.getElementById(inputValue + '-cost');
    let inputNumber = parseFloat(inputCost.value);
    if (inputNumber > 0 || inputNumber == 0) {
        return inputNumber;
    }
    else if (inputNumber < 0) {
        alert('Please enter a valid amount');
        return false;
    }
    else if (isNaN(inputNumber)) {
        alert('Please do not use any text here');
        return false;
    }
}
document.getElementById('calculate-btn').addEventListener('click', function () {
    let inputFoodCost = getInput('food');
    let inputRentCost = getInput('rent');
    let inputClothCost = getInput('cloth');
    let totalCost = inputFoodCost + inputRentCost + inputClothCost;
    let totalExpenses = document.getElementById('total-expenses');
    totalExpenses.innerText = totalCost;
    let incomeInput = document.getElementById('income-input');
    let incomeTotal = parseFloat(incomeInput.value);
    let balance = document.getElementById('balance');
    balance.innerText = incomeTotal - totalCost;

})
document.getElementById('save-btn').addEventListener('click', function () {
    let savingInput = document.getElementById('percentage-of-saving');
    let saving = parseFloat(savingInput.value);
    if (saving <= 100 || saving == 0) {
        let savingTotal = (saving / 100) * balance.innerText;
        let savingAmount = document.getElementById('saving-amount');
        savingAmount.innerText = savingTotal;
        let remainingBalance = document.getElementById('remaining-balance');
        remainingBalance.innerText = balance.innerText - savingTotal;
    }
    else if (isNaN(saving)) {
        alert('Percentage can not be a text,Please enter a number');
    }
    else if (saving > 100 || saving < 0) {
        alert('Enter a valid percentage');
    }
})
