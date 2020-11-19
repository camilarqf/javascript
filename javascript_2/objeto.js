var quadrado = {
    lados: 4,
    area: function(lado){
        return lado * lado;
    },
    perimetro: function(lado){
        return lado * 4;
    }
}

var quadrado = {
    lados: 4,
    area(lado){
        return lado * lado;
    },
    perimetro(lado){
        return lado * 4;
    },
}


console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

console.log(Math.random());
console.log(Math.PI);

console.table(quadrado);

var height = 50;
var menu = {
    height: 30,
    background:'#000',
    menuHeight(){
        return this.height = 80;
    },
}

console.log(menu.menuHeight());

//crie um objeto com os seus dados pessoais

var dados = {
    nome: 'Camila',
    sobrenome: 'Rocha',
    idade: 30,
    sexo: 'feminino',
    cidade: 'brasília',
    nomeCompleto(){
        return `${this.nome} ${this.sobrenome}`;
    }
}

console.log(dados);
console.log(dados.nomeCompleto());

//deve possuir pelo menos duas propriedades nome e sobrenome

//crie um método no objeto anterior, que mostre o seu nome completo

//modifique o valor da propriedade preco para 3000

var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
    modificaPreco(){
        return this.preco = 3000;
    }
}

console.log(carro.modificaPreco());

//crie um objeto de um cachorro que represente um labrador preto com 10 anos, que late ao ver um homem

var cachorro = {
    cor: 'preto',
    idade: 10,
    raca: 'labrador',
   latir(pessoa){
       if(pessoa === 'homem'){
           return 'latir';
       }else{
           return 'nada';
       }
   }
}

console.log(cachorro);
console.log(cachorro.latir('homem'));

