'use strict'

let money = ''
let date = ''

// объект с данными приложения  

let appData = { 
    budget: '', 
    timeData: getDate(),
    expenses: {},
    optionlExpenses: {},
    income: [],
    saving: false,
}

const container = document.querySelector(".container")

// page это объект в котором хранятся значения с 
// с функциями для рендера блоков 
// которые будут отображаться на страничке 

let page = {
    "first": () => { 
        container.innerHTML = 
        `<h1 id='title'>Ваш бюджет на месяц?</h1>
        <input type="text" id="input"> </input>
        <input type="button" onclick="forFirst()" value="SEND">
        <h2 id='err'></h2>`;
     },
     "second": () => { 
        container.innerHTML = 
        `<h1 id='title'>Сеодня ${ appData.timeData }?</h1>
        <input type="button" onclick=" page.expenses()  "  value="ДА" id="next"></input>
        <input type="button" onclick=" page.third() " value="НЕТ" id='button'>`;
     },
     "third": () => { 
        container.innerHTML =   
        `<h1 id='title'> Укажите дату 
        <input type="date" id='input'></input>?</h1>
        <input type="button" onclick="forthird()" value="СОХРАНИТЬ" id='button'> `;
     }, 
    
    "expenses": () => { 
        container.innerHTML =   
        `<h1 id='title'>Введите обязательную статью расходов в этом месяце</h1>
        <input type="text" id='consumption'>
        <h1 id='title'> Во сколько обойдется? </h1>
        <input type="text" id="price"><br>
        <input type="button" onclick="expenses()" id="send" value='отправить'> 
        `
    },

     "budget": () => { 
        container.innerHTML =   
        `<h1 id='title'>Твой бюджет на день ${Math.ceil(appData.budget/30)} руб</h1>` 
        // тут просто делим бюджет на 30 дней (я так пологаю, 
        // что он должен взаимодействовать с теми вопросами о затратах,
        // но в задании этого не написанно по этому пока вот так c: )
     },
}

// Рендор первого блока 

page.first()

const input = document.querySelector('#input')
const button = document.querySelector('#button')

// функции для смены блоков на страничке и присваивания значений в объект с данными

function forFirst() {

        appData.budget = input.value 
        page.second()  
   
}
function forthird() { 
    appData.timeData = input.value
    page.expenses()  
}
 

function expenses ()  
{ 
    let consumption = document.querySelector('#consumption').value
    let price = document.querySelector('#price').value
    new passData(consumption, price)
    console.log(consumption,price)              
    page.budget()
    // в задании сказанно что запись в нем должна быть такого типа вопрос1 : вопрос2 
    // но я не понял как назначить ключь для объекта 
}


 // Функция для получения даты

function getDate() { 
    return new Date().toLocaleDateString()
}

//Команды для консоли 

// Функция для отображения всех существующих блоков и с ссылками на них 

 function getMenu() { 
    pages = { } 
    for (let key in page) {
    container.insertAdjacentHTML('afterend',`<h1 onclick="page.${ key }()">${ key } </h1>`)
    }
 } 

// Для отоброжения базы приложения в красивой табличке (консоль)

 function getAppData() { 
    console.table(appData, 12)
 }

 //Конструктор для добовления expenses в базу приложения
 
 function passData(consumption,price) { 
    appData.expenses[consumption] = price;
}