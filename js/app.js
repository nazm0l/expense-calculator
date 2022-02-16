// Expenses calculate
const food = document.getElementById("food");
const rent = document.getElementById("rent");
const clothes = document.getElementById("clothes");
const income = document.getElementById("income");

// validation function
function validation(variableName) {
  if (isNaN(variableName) || variableName < 0) {
    return alert("please input correct amount");
  }
}

// total expense function
function expenseCalc() {
  //   get expenses value
  const foodExpense = parseFloat(food.value);
  const rentExpense = parseFloat(rent.value);
  const clothesExpense = parseFloat(clothes.value);
  validation(foodExpense);
  validation(rentExpense);
  validation(clothesExpense);

  let totalExpense = foodExpense + rentExpense + clothesExpense;
  return totalExpense;
}

// balance update function
function balanceUpdate() {
  //   get income value
  const incomeBalance = parseFloat(income.value);
  validation(incomeBalance);
  //   update balance
  const balance = document.getElementById("balance");
  let totalBalance = incomeBalance - expenseCalc();
  balance.innerText = totalBalance;
  return totalBalance;
}

// calculate button handler

document.getElementById("calculate").addEventListener("click", function () {
  const totalExpenses = document.getElementById("total-expenses");
  totalExpenses.innerText = expenseCalc();

  balanceUpdate();
});

// savings calculate

const save = document.getElementById("save");

// save button handler

document.getElementById("save-button").addEventListener("click", function () {
  const incomeBalance = parseFloat(income.value);
  percentageValue = parseFloat(save.value);
  let savingAmount = (percentageValue / 100) * incomeBalance;

  //   update saving amount
  const savingTotal = document.getElementById("saving-amount");
  if (savingAmount < balanceUpdate()) {
  } else {
    return alert("please input valid saving percent");
  }
  savingTotal.innerText = savingAmount;

  //   update remaining balance
  const remainingBalance = document.getElementById("remaining-balance");

  remainingBalance.innerText = balanceUpdate() - savingAmount;
});
