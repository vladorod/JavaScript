
'use scrict'

let root = document.querySelector('#root'),
    passDate = document.querySelector('#passDate'),
    d = new Date(),
    h = addZero(d.getHours()),
    m = addZero(d.getMinutes()),
    s = addZero(d.getSeconds()),
    day = addZero(d.getDay()),
    mon = addZero(d.getMonth()),
    yea = d.getFullYear();

root.innerHTML = `<h1>${h}:${m}:${s} ${day}:${mon}:${yea} > ${Day()} </h1>`;

function Day() {
    let week = ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота']; 
    let date = new Date;
    let datetoday = date.getDay();
    return  week[datetoday];
}

function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  
  

  function getDaysLeft(oDeadLineDate, d){
    return oDeadLineDate > d ? Math.ceil((oDeadLineDate - d) / (1000 * 60 * 60 * 24)) : null;
  }
  
function MkDaysLeft(sDeadLineDate){

    console.log(sDeadLineDate)
    let sTime = sDeadLineDate + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    let oDeadLineDate = new Date(sTime);
    let nDaysLeft = getDaysLeft(oDeadLineDate, d);
    
    if (nDaysLeft){
      let sDaysLeft = String(nDaysLeft);
      let sDaysText = "дней";
      let nDaysLeftLength = sDaysLeft.length;
      
      if (sDaysLeft.charAt(nDaysLeftLength - 2) != "1") {
        if (sDaysLeft.charAt(nDaysLeftLength - 1) == "2" || sDaysLeft.charAt(nDaysLeftLength - 1) == "3" || sDaysLeft.charAt(nDaysLeftLength - 1) == "4") sDaysText = "дня";
        else if (sDaysLeft.charAt(nDaysLeftLength - 1) == "1") sDaysText = "день";
      }
      
      document.write(nDaysLeft + " " + sDaysText + ".");
    } 
      else console.log('Уже прошло')
}