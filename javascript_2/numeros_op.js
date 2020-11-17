var soma = 1 + 1;
console.log(soma);

var sub = 20 - 10;
console.log(sub);

var multi = 20 * 20;
console.log(multi);

var mod = 10 % 2;
console.log(mod);


console.log('========');
//qual o resultado da seguinte expressao
var total = 10 + 5 * 2/ 2 + 20;
console.log(total);

//crie duas expressoes que retornem NaN
var peso = 70 + 'kg';
var altura = 1.71 + 'm';
console.log(isNaN(peso));
console.log(isNaN(altura));

//somar a string '200' com o numero 50 e retornar 250
var valor = +"200" + 50; // o + na frente da string transforma em numero
console.log(valor);

//incremente o numero 5 e retorne o valor incrementado
var x = 5;
console.log(++x);

//como dividir o peso por 2?
var numero = '80' / 2;
var unidade = 'kg';
var peso = numero + unidade; //80kg
//var pesoPorDois = peso / 2; // 80kg/2
console.log(peso); //NaN
