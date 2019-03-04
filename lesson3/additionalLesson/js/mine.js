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
let sum = [];
for (let i = 0; i < arr.length; i++) {
    if (i + 1 < arr.length) { 
    sum.push(arr[i]**3 + arr[i + 1]**3)
}else break;
}
let end = 0;
for (let i = 0; i < sum.length; i++) {
    end = end + sum[i];
}
console.log(end);
console.log(Math.sqrt(end));

// 4 

function delSpace (space) { 
if ((typeof(space)) != 'string') { 
    console.log('not string')
}
space = space.split('');
if ( space[0] == ' ' ) {
    delete space[0]
  } 

if ( space[space.length - 1] == ' ' ) {
    console.log('work')
    delete space[space.length -1 ]
  }
 return space.join('')

}