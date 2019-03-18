// "use strict";

// let options = { 
//   width: 1366,
//   hight: 768,
//   background: 'red',
//   font: { 
//     size: '16px',
//     color: '#ccccccc'
//   }
// }

// // console.log(JSON.stringify(options)); /// приобразовывает в json
// console.log(JSON.parse(JSON.stringify(options))); /// приобразовывает в json


let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => { 
  let request = new XMLHttpRequest();

  // request.open(method, url, async, login, pass)
  request.open('GET', 'https://www.cbr-xml-daily.ru/daily_json.js');
  request.setRequestHeader('Contnet-type', 'application/js; charset=utf-8'); 
  request.send();
  //status  что с сервером 404
  //statusText  тут только текст
  //responseText  /  response - текст который посылвают
  //readyState поучает состояние 

  request.addEventListener('readystatechange', function () {
  
    // можно использовать load но он возврощает только что все хорошо
    if (request.readyState === 4 && request.status == 200) { 
        let data = JSON.parse(request.response);
        console.log(`Ответ получен ${data.data.USD.value} inputRub = ${inputRub.value}`)
        inputUsd.value = inputRub.value / data.USD.value;
    } else { 
      inputUsd.value = "Что-то пошло не так";
      console.log('Ответ не получен ошибка: ' + request.status)
    }
  });



});