
// Изминение бг 

document.body.style.background = "url('./img/apple_true.jpg')"; 

// Изминение навбара

let menuItem = document.querySelectorAll('.menu-item'),
    menu = document.querySelector('.menu');

menu.insertBefore(menuItem[2],menuItem[1]);

// Добовление в навбар блока

liItemMenu = document.createElement('li');
liItemMenu.classList.add('menu-item');
liItemMenu.textContent = 'Пятый Элемент';

menu.append(liItemMenu);

// Поменять заголовок

let title = document.querySelector('#title'),
    adv = document.querySelector('.adv'),
    prompt = document.querySelector('.prompt');
    
title.textContent = "Мы продаем только подлинную технику Apple";

adv.remove();

// Вопрос 

// вот так не получилось выводит ошибку что prompt is not a function 

//prompt.textContent = prompt('Какое у вас отношение к эпл?','');

// по этому вот так..  вроде задание не нарушил..

promptinput = document.createElement('input'); 
promptButton = document.createElement('button');
divText = document.createElement('div');

divText.innerHTML = "</br> <h3>Как вы относитесь к APPLE?</h3>"

promptinput.type = 'text';
promptinput.style.width = '250px';
promptinput.style.height = '50px';
promptinput.style.fontSize = '15px';

prompt.style.fontSize = '25px';

promptButton.textContent = 'save';
promptButton.onclick = () => { prompt.textContent = promptinput.value }; // вот тут почему-то функцию не захотел встовлять
promptButton.style.width = '50px';
promptButton.style.height = '50px';
 

prompt.append(divText,promptinput,promptButton);



