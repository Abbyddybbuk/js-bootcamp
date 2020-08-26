let myAccount = {
    name: 'Abhijeet Kulshreshtha',
    expenses: 0,
    income: 0
}

let addIncome = function(account, income) {
   account.income = account.income + income;
}

let addExpense = function(account, expenses) {
    account.expenses = account.expenses + expenses
}

let getAccountSummary = function(account) {
    return `Account for ${account.name} has Rs.${account.income} in income, Rs.${account.expenses} in expenses`
}

let resetAccount = function(account) {
    account.expenses = 0
    account.income = 0
}

addIncome(myAccount, 350000)
addIncome(myAccount, 250000)
addExpense(myAccount, 20000)
addExpense(myAccount, 40000)

let accSummary = getAccountSummary(myAccount)
console.log(accSummary)

resetAccount(myAccount)
let accSummary1 = getAccountSummary(myAccount) 
console.log(accSummary1)