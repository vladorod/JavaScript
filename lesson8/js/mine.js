let box = document.querySelector('.box'),
    button = document.querySelectorAll('input')[0]

let width = box.clientWidth,
    height = box.clientHeight;

console.log(width, height);

document.documentElement.addEventListener('click',(e) => {
    scrollTo(0, 200); // 200 от пикселей от стр. 
    scrollBy(0, 200); // относительно того места где ты сейсас 
 } );