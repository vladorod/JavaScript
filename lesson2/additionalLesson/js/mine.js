'use script'

let week = ['понедельник','вторник','среда','четрвег', ,'пятница','суббота','воскресенье']; 
let root = document.querySelector('#root')
let i = 0 
for(let i in week) { 
    if (week[i] == day()) { root.insertAdjacentHTML('afterbegin', `<span style="font-syle: italic"> > ${ week[i] } </span> <br>`); continue;}
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