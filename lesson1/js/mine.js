let money 
let date 

appData = { 
    budget: money, 
    timeData: getDate(),
    expenses: {},
    optionlExpenses: {},
    income: [],
    saving: false,
}



function getDate() { 
    return new Date().toLocaleDateString()
}


