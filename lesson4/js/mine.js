'use strict'

let money, time;

let appData = {
  budjet: '',
  timeData: '',
  expenses: {},
  optionalExpenses: {},
  income: [],
  saving: true,
  //1
  chooseOptExpenses: () => {
    let i = 0;
    do {
       i++;
       let a = prompt('Статья необязательных расходов?', '');
       if ((typeof (a)) != null && (typeof (a)) != null && a != '') {
          console.log('done');
          appData.optionalExpenses[i] = a;
       } 
       else {
         i--;
       };
     }
     while (i < 3);
  },
  //2
  checkSavings: () => {
     if (appData.saving == true) {
        let save = +prompt('Какова сумма накоплений?', ''),
            percent = +prompt('Под какой процент?');
        appData.monthIncome = save / 100 / 12 + percent;
        alert(`Доход в месяц с вашего дипозита ${Math.floor(appData.monthIncome)}`);
     }
  },
  //3
  chooseIncome: () => { 
    let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
  
    if (items != '' && (typeof(items)) == 'string' && (typeof (items)) != null) {
      appData.income = items.split(', ');
      appData.income.push(prompt('Может что-то еще', ''));
      appData.income.sort(); 
     } else appData.chooseIncome()
  },
  //3 
  start: () => { 
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите вашу дату yyyy-mm-dd', '');
    appData.timeData = time;
    while (isNaN(money) || money == "" || money == null) {
      money = +prompt('Ваш бюджет на месяц?', '');
    };
  },
  //4
  chooseExpenses: () => { 
     let i = 0;
     do {
        i++;
        let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
            b = prompt(`Во сколько обойдется?`, '');
        if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
          console.log('done');
          appData.expenses[a] = b;
        } else {
          i--;
        };
     } while (i < 2);
  },
  //5
  detectLevel: () => { 
     if (appData.moneyPerDay < 100) {
        console.log('Минимальный урвоень достатка');
     } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log('Средний уровень достатка');
     } else if (appData.moneyPerDay > 2000) {
        console.log('Высокий уровень достатка');
     }
  },
  //6
  detectDayBudget: () => { 
     appData.budjet = money;
     appData.moneyPerDay = appData.budjet / 30;
     alert(`Ежедневный бюджет : ${Math.floor(appData.budjet / 30)}`);
     appData.detectLevel();
  }
   
};
  
appData.start();
appData.chooseExpenses();
appData.detectDayBudget();
appData.checkSavings();
appData.chooseOptExpenses();
appData.chooseIncome();

// for (let key in appData) { 
//    console.log(`Наша программа включает в себя ${key} :  ${appData[key]}`);
// };
for (let key in appData) { 
   console.log(`Наша программа включает в себя данные: ${appData[key]}`);
};
appData.income.forEach((item,i,mass) => { 
       console.log(`${i+1} : ${item} }`);
    });
  