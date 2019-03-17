// function User(name,id) { 
//     this.name = name;
//     this.id = id; 
//     this.human = true;
//     this.hello = () => { 
//         console.log(`Hello! ${this.name}`)
//     }
// }

// let ivan = new User('ivan',1),
//     alex = new User('alex', 20);

// User.prototype.exit = function (name) { 
//     console.log(`Пользователь ${this.name} ушел` )
// }

// class User { 

//   constructor(name,id) { 
//       this.name =name; 
//       this.id = id;
//       this.human = true;
//   }

//   hello () { 
//       console.log(`Hello! ${this.name}`);
//   };
   
//    exit() { 
//        console.log(`User ${this.name} exit`);
//    }

// }

// let ivan = new User("ivan", 20)

// function showThis() { 
//     console.log(this);
//     function sum() { 
//         console.log(this);
//         return a + b
//     }
//     console.log(sum())
// }
// showThis(3,4)
// showThis(2,3)

// let obj = { 
//     a: 20,
//     b: 18,
//     sum: function() {
//         return this.a + this.b;
//     }
// }

// let user = { 
//     name: "John"
// }


// function sayName(surname) { 
//     console.log(this);
//     console.log(this.name + surname)
// }

// // методы привязки для this 
// //1
// console.log(sayName.call(user, 'Smit')); 
// //2
// console.log(sayName.apply(user, ['Snow']));
// //3
// function conunt(number) { 
//     return this * number;
// }

// let double = conunt.bind(2)

// console.log(double(3))
// console.log(double(10))

// 1) Просто выхов функции - window/undifind
// 2) Метод объекта - this = объект
// 3) Конструкор (new) - this = новый создонный объект
// 4) Указания конкретного котекста - call, apply, bind

let btn = document.querySelector('button');

btn.addEventListener('click', () => { 
    console.log(this);
    this.style.backgroundColor = red;
})