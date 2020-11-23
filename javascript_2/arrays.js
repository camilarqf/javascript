var videoGames = ["switch", "ps4", "xbox", "3ds"];

//videoGames.pop(); // retira o último item do array e mostra na tela

//videoGames.push('3ds'); //adiciona elementos ao array

for (var i = 0; i < 10; i++) {
  console.log("for");
}

var i = 0;
while (i < 10) {
  console.log("while");
  i++;
}

for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
}

for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
  if (videoGames[i] === "xbox") {
    // se a posição no array tiver o item xbox ele para o loop
    break;
  }
}

var frutas = ["pera", "uva", "maçã", "abacaxi", "laranja", "limão"];

frutas.forEach(function (fruta, index, array) {
  // pode passar como argumento o item do array, o index, ou o próprio array frutas
  console.log(fruta, index, array);
});

//crie um array com os anos que o brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

var copas = ["1959", "1962", "1970", "1994", "2002"];

//interaja com array utilizando um loop, para mostrar
//noconsole a seguinte mensagem 'o brasil ganhoua copa de ${ano}

copas.forEach(function (copas) {
  console.log(`O brasil ganhou a copa de ${copas}`);
});

//interaja com um loop nas frutas abaixo e pare ao chegar em pera

var frutas = ["banana", "maçã", "pera", "uva", "melancia"];
for (var i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
  if (frutas[i] === "pera") {
    break;
  }
}

//coloque a ultima fruta da arrary acima em uma variável
// sem remover a mesma da array

var ultimoIndex= frutas.length - 1;
var ultimaFruta = frutas[ultimoIndex];
console.log(ultimaFruta);
