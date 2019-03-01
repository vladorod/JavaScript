let money 
let date 

// объект с данными 

appData = { 
    budget: '', 
    timeData: '',
    expenses: {},
    optionlExpenses: {},
    income: [],
    saving: false,
}

const container = document.querySelector(".container");

// page это объект в котором хранятся значения с 
// с функциями для рендера блоков 
// которые будут отображаться на страничке 

page = {
    "first": () => { 
        container.innerHTML = 
        `<h1 id='title'>Ваш бюджет на месяц?</h1>
        <input type="text" id="input"> </input>
        <input type="button" onclick="forFirst()" value="SEND">
        <h2 id='err'></h2>`;
     },
     "second": () => { 
        container.innerHTML = 
        `<h1 id='title'>Сеодня ${ getDate() }?</h1>
        <input type="button" onclick=" page.budget() "  value="ДА" id="next"></input>
        <input type="button" onclick=" page.third() " value="НЕТ" id='button'>`;
     },
     "third": () => { 
        container.innerHTML =   
        `<h1 id='title'> Укажите дату 
        <input type="date" id='input'></input>?</h1>
        <input type="button" onclick="forthird()" value="СОХРАНИТЬ" id='button'>`;
     }, 
    
     "budget": () => { 
        container.innerHTML =   
        `<h1 id='title'>Твой бюджет на день ${Math.ceil(appData.budget/30)} руб</h1>` // делим бюджет на 30 дней 
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
    page.budget()  
}
function forbudget() { 
    appData.budget = input.value 
    page.budget()  
 }

 // Функция для получения даты

function getDate() { 
    return new Date().toLocaleDateString()
}

// Функция для отображения всех существующих блоков и с ссылками на них

 function getMenu() { 
    pages = { } 
    for (let key in page) {
    container.insertAdjacentHTML('afterend',`<h1 onclick="page.${ key }()">${ key } </h1>`)
    }
 } 