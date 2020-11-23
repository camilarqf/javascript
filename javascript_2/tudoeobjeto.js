var btn = document.querySelector('.btn');
console.log(btn);


//nomeie 3 propriedades ou metodos de strings

var nome = 'Camila';
nome.charAt(1);
nome.fixed();
nome.fontcolor('blue');

//nomeie 5 propriedades ou métodos de elementos do DOM
/* addEventListener('click');
addEventListener('scroll');
addEventListener('mousedown');
addEventListener('dragstart');
addEventListener('drop');
var btn = document.querySelector('a');
btn.prepend;
btn.removeAttribute;
btn.setAttribute;
btn.firstChild;
btn.getAttribute; */

//busque na web um objeto (metodo) capaz de interagir com o clipboard
var copia = document.querySelector('a');
document.execCommand('copy');
//clipboard é a parte do seu computador que lida com o crtl c e ctrl v