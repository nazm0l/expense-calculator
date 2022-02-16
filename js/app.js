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

document.getElementById("calculate").addEventListener("click", function () {
  //   get income value
  const incomeBalance = parseFloat(income.value);
  validation(incomeBalance);
  //   get expenses value
  const foodExpense = parseFloat(food.value);
  const rentExpense = parseFloat(rent.value);
  const clothesExpense = parseFloat(clothes.value);
  validation(foodExpense);
  validation(rentExpense);
  validation(clothesExpense);
  totalExpense = foodExpense + rentExpense + clothesExpense;

  //   update total expenses
  const totalExpenses = document.getElementById("total-expenses");
  totalExpenses.innerText = totalExpense;

  //   update balance
  const balance = document.getElementById("balance");
  balance.innerText = incomeBalance - totalExpense;
});

// savings calculate

const save = document.getElementById("save");

document.getElementById("save-button").addEventListener("click", function () {
  percentageValue = parseFloat(save.value);
});
