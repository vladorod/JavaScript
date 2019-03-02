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


let arr = ['137343','214848','7421', '5665345','365487']


    let pass = []
    for (let i = 0; i < arr.length; i++) { 
        let array = arr[i]
        for (let j = 0; j < array.length; j++) {
            if (array[0] == '3'|| array[0] == '7' ) 
            { 
                pass.push(array)
                break;  
            }
        }
    }
    console.log(pass)
 
 

 
 

function serch( where, what ) { 
    for ( i in where ) { 
      if ( where[0] == what ) { 
          return where[i]  
         }  else return false 
    }
}