'use scrict'

let root = document.querySelector('#root'),
  passDate = document.querySelector('#passDate'),
  d = new Date(),
  h = addZero(d.getHours()),
  m = addZero(d.getMinutes()),
  s = addZero(d.getSeconds()),
  day = addZero(d.getDay()),
  mon = addZero(d.getMonth()),
  yea = d.getFullYear(),
  input1 = document.querySelectorAll('input')[0],
  input2 = document.querySelectorAll('input')[1],
  eq = document.querySelectorAll('input')[2];

root.innerHTML = `<h1>${h}:${m}:${s} ${day}:${mon}:${yea} > ${Day()} </h1>`;

function Day() {
  let week = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
  let date = new Date;
  let datetoday = date.getDay();
  return week[datetoday];
}

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

document.querySelector('button').addEventListener('click', () => { 
  eq.value = calcDate(input1.value, input2.value);
})

function calcDate(first, second) {
  let firstTime = first.split('-'),
      firstDate = new Date(`${firstTime[0]}/${firstTime[1]}/${firstTime[2]}`),
      secondTime = second.split('-'),
      secondDate = new Date(`${secondTime[0]}/${secondTime[1]}/${secondTime[2]}`);
  
  let sec = Math.abs(firstDate.getTime() - secondDate.getTime());
  return i = Math.ceil(sec/(1000 * 3600 * 24));
}