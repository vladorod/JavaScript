 
   'use strict'

   let money, time; 
   money = +prompt('Ваш бюджет на месяц?',''); 
   time =  prompt('Введите вашу дату yyyy-mm-dd','');

   while(isNaN(money) || money == "" || money == null) { 
     money = +prompt('Ваш бюджет на месяц?',''); 
   }

  
let appData = { 
     budjet: '', 
     timeData: '',
     expenses: {},
     optionlExpenses: {},
     income: [],
     saving: false,
    }  


appData.budjet = money

// for (let i = 0; i < 2; i++)
// {
//    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
//        b = prompt(`Во сколько обойдется?`, '')


//    if ( (typeof(a)) === 'string' && (typeof(b)) != null && a != '' && b!='' && a.length < 50 ) {
//       console.log('done');
//       appData.expenses['"'+ a +'"'] = b 
//     } else continue;

// }

// let i = 0; 

// while (i < 2) {
//    i++
//    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
//          b = prompt(`Во сколько обойдется?`, '')


//    if ( (typeof(a)) === 'string' && (typeof(b)) != null && a != '' && b!='' && a.length < 50 ) {
//       console.log('done');
//       appData.expenses['"'+ a +'"'] = b 
//     } else continue;
//  }

let i = 0; 

do {
   i++
   let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
       b = prompt(`Во сколько обойдется?`, '')

   if ( (typeof(a)) === 'string' && (typeof(b)) != null && a != '' && b!='' && a.length < 50 ) {
      console.log('done');
      passData(a,b)
    } else continue;
 }
 
 while (i < 2)

appData.moneyPerDay = appData.budjet / 30

alert(`Ежедневный бюджет : ${appData.budjet / 30}`)

if (appData.moneyPerDay < 100) { 
   console.log('Минимальный урвоень достатка')
}
else if (appData.moneyPerDay > 100 && appData.moneyPerDay< 2000 ) { 
   console.log('Средний уровень достатка')
} 
else if (appData.moneyPerDay > 2000  ) { 
   console.log('Высокий уровень достатка')
}

function passData(consumption,price) { 
   appData.expenses[consumption] = price;
}

 



