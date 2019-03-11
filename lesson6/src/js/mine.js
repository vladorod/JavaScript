'use strict';

let startCalculating = document.getElementById('start'),
    budget = document.querySelector('.budget-value'),
    daybudget = document.querySelector('.daybudget-value'),
    level = document.querySelector('.level-value'),
    expenses = document.querySelector('.expenses-value'),
    optionalexpenses = document.querySelector('.optionalexpenses-value'),
    income = document.querySelector('.income-value'),
    monthsavings = document.querySelector('.monthsavings-value'),
    yearsavings = document.querySelector('.yearsavings-value'),
    expensesItem = document.querySelectorAll('.expenses-item'),
    buttonApprove1 = document.getElementsByTagName('button')[0],
    buttonApprove2 = document.getElementsByTagName('button')[1],
    buttonCalculate = document.getElementsByTagName('button')[2],
    optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    chooseIcon = document.querySelector('.choose-income'),
    savings = document.querySelector('#savings'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');

    let money, time;
    
    let appData = {
      budjet: '',
      timeData: '',
      expenses: {},
      optionalExpenses: {},
      income: [],
      saving: false,
      yearIncome: 0,
    };
      
startCalculating.addEventListener('click',() => { 
  time = prompt('Введите вашу дату yyyy-mm-dd', '');
  money = +prompt('Ваш бюджет на месяц?', '');
  
  
  while (isNaN(money) || money == "" || money == null) {
    money = +prompt('Ваш бюджет на месяц?', '');
  };
  appData.budjet = money;
  appData.timeData = time;
  budget.textContent = money.toFixed();
  year.value = new Date(Date.parse(time)).getFullYear();
  month.value = new Date(Date.parse(time)).getMonth() + 1; 
  day.value = new Date(Date.parse(time)).getDate();  
});

buttonApprove1.addEventListener('click', () => { 
  let sum = 0;
  for (let i = 0; i < expensesItem.length; i++) {
    let a = expensesItem[i].value,
        b = expensesItem[++i].value;

    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
      console.log(a,b);
      appData.expenses[a] = b;
      sum += +b; 
    } else {
      i--;
    };
   };
  expenses.textContent = sum;
});

buttonApprove2.addEventListener('click',() => { 
  for (let i = 0; i < optionalexpensesItem.length; i++) {
    let a = optionalexpensesItem[i].value;
    if ((typeof (a)) != null && (typeof (a)) != null && a != '') {
      console.log('done');
      appData.optionalExpenses[i] = a;
      optionalexpenses.textContent += appData.optionalExpenses[i] + ' '; 
    } 
    else {
      i--;
    };
  }
});

buttonCalculate.addEventListener('click', () => {

  if (appData.budjet != undefined && appData.budjet != 0 ) {

    appData.moneyPerDay = (appData.budjet / 30).toFixed();

    daybudget.textContent = appData.moneyPerDay;

    if (appData.moneyPerDay < 100) {
      level.textContent = 'Минимальный урвоень достатка';
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      level.textContent = 'Средний уровень достатка';
    } else if (appData.moneyPerDay > 2000) {
      level.textContent = 'Высокий уровень достатка';
   };
   } else {
    daybudget.textContent = 'Произошла ошибка';
  }
});

chooseIcon.addEventListener('change', ()=> { 
  let itmes = chooseIcon.value;
  
  appData.income = itmes.split(', ');
  income.textContent = appData.income;
});

savings.addEventListener('click', () => { 
  if ( appData.savings == true ) {
    appData.savings = false; 
  } else appData.savings = true;
});
    
chooseSum.addEventListener('input', () => { 
  if( appData.savings == true ) { 
    let sum = +chooseSum.value,
        percent = +choosePercent.value;

    appData.monthIncome = sum/100/12*percent;
    appData.yearIncome = sum/100*percent;
    
    monthsavings.textContent = appData.monthIncome.toFixed(1);
    yearsavings.textContent = appData.yearIncome.toFixed(1);
  }
});

choosePercent.addEventListener('input', () => { 
  if( appData.savings == true ) { 
    let sum = +chooseSum.value,
        percent = +choosePercent.value;
  
     appData.monthIncome = sum/100/12*percent;
     appData.yearIncome = sum/100*percent;
      
     monthsavings.textContent = appData.monthIncome.toFixed(1);
     yearsavings.textContent = appData.yearIncome.toFixed(1);
     }
  });
