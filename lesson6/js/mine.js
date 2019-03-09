
 let btn = document.getElementsByTagName('input'),
     link = document.getElementsByTagName('a');
//  btn[0].onclick = function () { alert('asdfasdf') }

// document.body.addEventListener('click', (e) => { 
//     e.preventDefault(); // отмена дефолтных событий
// })

document.body.addEventListener('mouseleave', (e) => { console.log(e.target)} )

