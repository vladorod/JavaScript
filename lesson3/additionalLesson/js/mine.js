'use strict'

let str = 'урок-3-был слишком легким';

// 1

str = str[0].toUpperCase() + str.substr(1, str.length);
str = str.split('');

// 2

for (let i = 0; i < str.length; i++) { 
  if (str[i] == " ") { 
    str.splice(i, 1, '-' );
  }; 
};
str = str.join('');
console.log(str);

//3 

str = str.split('-');
let o = str[str.length - 1].split('');
o.splice(o.length-2 , 2,"о","о");
o = o.join('');
str.splice(str.length - 1, 1, o);
str = str.join('-');

console.log(o);
console.log(str);

//4 

let arr = [20, 33, 1, 'Человек', 2, 3];

arr.splice(3,1);

let result = arr.reduce((sum, current) => {
return sum + Math.pow(current, 3)
 }, 0)

console.log(` 4 : ${Math.sqrt(result)}`);

  // 5

function delSpace (space) { 
  if ((typeof(space)) != 'string' && space == null ) { 
    console.log('not string');
} else { 
    space = space.trim();
    space = space.split('');
    
    if (space.length - 1 > 50) { 
      space.splice(50, space.length - 50, '...');
    }
  
   return space.join('');
   }
}