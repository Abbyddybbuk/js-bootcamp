const account = {
    name: 'Abhijeet Kulshreshtha',
    expenses: [],
    incomes:[]
}

const addExpense = function(expenseType, amount) {
    let expense = {
        expenseType: expenseType,
        amount: amount
    }    
    account.expenses.push(expense)    
}

const addIncome = function(incomeType, amount) {
    let income = {
        incomeType: incomeType,
        amount: amount
    }

    account.incomes.push(income)
}

const getAccountSummary = function(account) {

    let expenseSum = 0
    account.expenses.forEach(function(expense) {
        expenseSum = expenseSum + expense.amount
    })
        
    let incomeSum = 0
    account.incomes.forEach(function(income) {
        incomeSum = incomeSum + income.amount
    })

    const balance = incomeSum - expenseSum
    console.log(`${account.name} has a balance of Rs.${balance}. Rs.${incomeSum} in income, Rs.${expenseSum} in expenses`)
}

addExpense('Amazon Shopping', 2000)
addExpense('Petrol', 2700)
addExpense('Vegetable Shopping', 500)
addExpense('Medicines', 570)

addIncome('Gold Shares', 10000)
addIncome('Salary', 10000)
addIncome('Normal Shares', 30000)


console.log(account)
getAccountSummary(account)



