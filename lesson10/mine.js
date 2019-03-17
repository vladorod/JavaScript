// let name = "ivan", 
//     age = 13,
//     mail = "ex@gmail.com"; 

// document.write(`Польователю ${name}  ${age}лет. Его почтовый адрес ${mail}`);

// function makeArray() { 
//     var itmes = [];

//     for(let i = 0; i < 10; i++) { 
//         var item = function () { 
//             console.log(i); 
//         };
//         itmes.push(item)
//     }

// return itmes; 
// }

// var arr = makeArray();

// arr[1]();
// arr[3]();
// arr[7]();

// let fun = () => { 
//      console.log(this)
// };

// let obj = {
//     number: 0,
//     sayNumber: function() { 
//         let say = () => { 
//             console.log(this)
//         };
//         say();
//     },
    
// };

// obj.sayNumber();






// let btn = document.querySelector('#button');

// btn.addEventListener('click',(e) => { 
//     let show = () => { 
//         console.log(this);
//      };
//      show();
//  });

//  function calcOrDuble(number, basis = 2) { 
//     //  basis = basis || 2; // проверка передан ли аргумент 
//      console.log(number*basis);
//  }

//  calcOrDuble(6);





// class Rectangle { 
//     constructor(height, width = 20)  { 
//         this.height = height;
//         this.width = width;
//     }

//     calcArea() { 
//         return this.height * this.width;
//     }

// }

// const square = new Rectangle(10,10);

// console.log(square.calcArea())

// let video = ['youtobe', 'video', 'rutube'],
//     blogs = ['wordpress', 'livejarnal', 'bloger']
//     internet = [...video, ...blogs, 'vk', 'facebook']; // spret operator

// console.log(internet)

// function log(a,b,c) { 
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// let nunmbers = [2,3,4]

// console.log(log(...nunmbers));

class options {
  constructor(height = 20 + 'px', width = 20 + 'px', bg = 'red', fontSize = 10 + 'px', textAlign = 'center') { 
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.textAlign = textAlign;
  }

  halo() { 
    return console.log('hi')
  }

  create(text = 'none') { 
    let div = document.createElement('div');
    div.textContent = text;
    div.style.cssText= 
    `background: ${this.bg} \
    width: ${this.width}; \
    height: ${this.height}; \
    text-align: ${this.textAlign}; \
    font-size: ${this.fontSize}; \ `;

    document.body.append(div);
  }
}
// тут он записывает не все стили и я не понимаю в чем прикол) 
// И появился вопрос можно ли отслеживать как-то созданные элементы через конструктор?? ну напримемр, если хочешь чтобы все созданные элементы поменяли bg
let i = new options();

i.create('LOLIK');