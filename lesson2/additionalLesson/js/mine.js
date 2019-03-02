'use strict'

let week = ['понедельник','вторник','среда','четрвег', 'пятница','суббота','воскресенье']; 
let root = document.querySelector('#root')
let i = 0

for(let i in week) { 
    if (week[i] == day()) { root.insertAdjacentHTML('afterbegin', `<span style="font-style: italic;"> > ${ week[i] } </span> <br>`); continue;}
   switch(week[i]) 
    {
        case 'суббота' :
        root.insertAdjacentHTML('afterbegin', `<span style="font-weight: bolder"> ${ week[i] } </span> <br>`);
        continue;
        case 'воскресенье' :
        root.insertAdjacentHTML('afterbegin', `<span style="font-weight: bolder"> ${ week[i] } </span> <br>`);
        continue;
        default: root.insertAdjacentHTML('afterbegin', `<span > ${ week[i] } </span> <br>`);

    }
    
}


function day() 
{
    let week = ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота']; 
    let date = new Date
    let datetoday = date.getDay()
    return  week[datetoday]
}



// 2) Создать массив arr = []


arr = []


 
for ( let i = 0; i < 7; i++ ) { 
    arr.push(randomInteger(1,50))
}

 

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    toString(rand)
    return rand;
  }

function serch( where, what ) { 
    for ( i in where ) { 
      if ( where[0] == what ) { 
          return where[i]  
         }  else return false 
    }
}