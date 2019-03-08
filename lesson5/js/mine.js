window.onload = () => { 
// let box = document.querySelectorAll("span");

// Перебор псевдо массива

// box.forEach((item, i, boxs) => { 
//   box[i].style.backgroundColor = 'red';
// })

// Создание елемента

let div = document.createElement('div'), // создает элемент
    text = document.createTextNode('тут был я'),
    container = document.querySelector('.container'),
    heart = document.querySelector('.heart')

div.classList.add('red') // создает cтиль элементу  

// heart.innerHTML = '<h1>Hello world</h1>' // вставка элемента текста
// heart.textContent = 'Hello World' // добовляем только тест

container.appendChild(div); // в конец елемента
document.body.appendChild(div); // тоже самое только в боди
document.body.insertBefore(div, container); // добовляет до элемента контаинер в тег боди
// document.body.removeChild(container); // удаление элемента в нутри боди 
// document.body.replaceChild(heart, container); // замена элемента 

}