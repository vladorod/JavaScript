'use scrict'

window.onload = function()  { 

let canv = document.querySelector('#canvas'), 
    ctx = canv.getContext('2d'),
    isMouseDown = false,
    arr = [],
    radius = 5

canv.width = window.innerWidth;
canv.height = window.innerHeight;

// // Созадиние квадрата 
// let x = 10;

// ctx.strokeStyle = 'red';
// ctx.lineWidth = 10
// ctx.strokeRect(x, 38, 299, 200);

// // Анимация через setInterval 
// setInterval (() => { 
//     ctx.fillStyle = 'white'
//     ctx.fillRect(0, 0, canv.width, canv.height)

//     ctx.fillStyle = 'red'
//     ctx.fillRect(x++, 38, 299, 200);
//  },15)

// // Создание круга 
// ctx.arc(canv.width / 2, canv.height / 2, 100 , 0 /* начало угла */, Math.PI /* (для полного круга) * 2 */ ) // 1: кардинаты круга 2: Радиус 3: стартовый угол, и как далеко 4: будет ли рисоваться против или по часовой дефолт false  
// ctx.fill()
// // 360 гр. pi * 2 

// // // Создание триугольника 
// ctx.scale(3, 3) // размер
// ctx.rotate( 10 * Math.PI /180 ) // для поворота в градусах, а по дефолту в радианах 
// ctx.strokeStyle = 'red' //цвет 
// ctx.beginPath() // начинает путь 
// ctx.moveTo(50, 50) // ставит кардинаты точики от куда вести 
// ctx.lineTo(25,100) // прокладывает путь до кординат
// ctx.lineTo(75,100)
// // ctx.lineTo(50,50)
// ctx.closePath()
// ctx.stroke()

// // Создание градиента 

// var grad = ctx.createLinearGradient(0, 0, 200, 0)
// grad.addColorStop('0', 'black')
// grad.addColorStop('.50', 'blue')
// grad.addColorStop('1', 'red')

// // Вывод текста
// ctx.fillStyle= grad;

// // ctx.textAlign = 'center' // для выравнивания по центру 
// ctx.font = ' 20px Merida'
// ctx.fillText("Hello World!", 60, 50) // текст и кардинаты 



// Приложения PAINT

canv.addEventListener ('mousedown', (e) => { 
    isMouseDown = true; 
}) 

canv.addEventListener ('mouseup', (e) => { 
    isMouseDown = false; 
    ctx.beginPath(); // збрасываем путь при нажатии 
    arr.push('mouseup')
}) 

ctx.lineWidth=radius * 2; // размер линии 


canv.addEventListener ('mousemove', (e) => { // mousemove and mousedown

 if (isMouseDown ) { 
     arr.push([e.clientX, e.clientY])
     //рисует линию 
     ctx.lineTo( e.clientX, e.clientY);
     ctx.stroke()
     // Ресует круг
     ctx.beginPath()// сбрасывает путь который рисуется
     ctx.arc(e.clientX, e.clientY, radius, 0, Math.PI *2)
     ctx.fill() 

    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);

     }
})

getClear = () => { 
    ctx.fillStyle='white';
    ctx.fillRect(0, 0, canv.width, canv.height);

    ctx.beginPath();
    ctx.fillStyle = 'black'
    console.log('clear')
}

function save() {
    localStorage.setItem('cordinate', JSON.stringify(arr))
    console.log('saved')
 }

 function repaly () { 
    let timer = setInterval( () => { 
        if ( !arr.length ) 
        { 
        clearInterval(timer)
        ctx.beginPath()
        return;
        }

        let crd = arr.shift(),
        e = { 
            clientX: crd['0'],
            clientY: crd['1']
        }
        
        ctx.lineTo( e.clientX, e.clientY);
        ctx.stroke()
        // Ресует круг
        ctx.beginPath()// сбрасывает путь который рисуется
        ctx.arc(e.clientX, e.clientY, radius, 0, Math.PI *2)
        ctx.fill() 
   
       ctx.beginPath();
       ctx.moveTo(e.clientX, e.clientY);
    }, 30 ) 
} 

document.addEventListener('keydown', (e) => { 

if (e.keyCode == 83) { 
    save()
}  

if (e.keyCode == 82) { 
    arr = JSON.parse(localStorage.getItem('cordinate'))
    getClear()
    repaly()
    ctx.beginPath()
}  

if (e.keyCode == 67) { 
    getClear()
}  })



}

