var lado = 10;

function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(lado));

function imc(peso, altura) {
  var imc = peso / (altura * altura);
  return imc;
}

console.log(imc(73, 1.71));

var cor = "azul";

function corFavorita(cor) {
  switch (cor) {
    case "azul":
      return "azul";
      break;
    case "verde":
      return "verde";
      break;
    default:
      return "nenhum";
  }
}
console.log(corFavorita(cor));

addEventListener("click", function () {
  console.log("clicou");
}); // ao clicar com o mouse na tela mostra no console 'clicou'

var idade = 77;

function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    return "preencha um número";
  } else if (idade >= 60) {
    return "terceira idade";
  } else {
    return "abaixo de 60 anos";
  }
}

console.log(terceiraIdade(idade));

var paisesVisitados = 7;

function visitaPaises(paisesVisitados) {
  var totalPaises = 193;

  return `Falta visitar ${totalPaises - paisesVisitados} países`;
}

console.log(visitaPaises(paisesVisitados));

//crie uma função para verificar se um valor é V
var valor = "teste";
function isTrue(valor) {
  if (valor) {
    return true;
  } else {
    return false;
  }
}

function isTrue2(valor) {
  return !!valor;
}
console.log(isTrue2(valor));
console.log(isTrue(valor));

//crie uma função matemática que retorne o perímetro de um quadrado

var lado = 2;

function perimetroQuadrado(lado) {
  return lado * 4;
}

console.log(perimetroQuadrado(lado));

//crie uma função que retorne seu nome completo

var nome = "Camila";
var sobrenome = "Rocha de Queiroz Fonseca";

function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}

console.log(nomeCompleto(nome, sobrenome));

//crie uma função que verifica se o número é par
var numero = 2;
function isPar(numero) {
  if (numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isPar(2));

//crie uma função que retorne o tipo de dado passado nela

function tipoDado(dado) {
  return typeof dado;
}

console.log(tipoDado());

//criar uma função que ao girar o scroll meu nome aparece

addEventListener("scroll", function () {
  console.log(nomeCompleto(nome, sobrenome));
});


//corrija o erro
var totalPaises = 193;
function precisoVisitar(paisesVisitados){
    
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;

}

function jaVisitei(paisesVisitados){
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

console.log(precisoVisitar(20));
console.log(jaVisitei(20));