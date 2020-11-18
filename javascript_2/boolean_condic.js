var possuiGraduacao = false;
var possuiDoutorado = true;

if (possuiGraduacao) {
  console.log("possui graduacao");
} else if (possuiDoutorado) {
  console.log("possui graduacao e doutorado");
} else {
  console.log("nao possui nada");
}

var nome = "camila";

if (nome) {
  console.log(nome);
} else {
  console.log("esse nome não existe");
}

if (!!possuiDoutorado) {
  //verifica se é verdadeiro
  console.log("é verdadeiro");
} else {
  console.log("é falso");
}

var teste = "Gato";

console.log(teste === "gato"); // '===' verifica estritamente

var cor = "Preto";

switch (cor) {
  case "azul":
    console.log("azul");
    break;
  case "verde":
    console.log("verde");
    break;
  case "preto":
    console.log("preto");
    break;
  default:
    console.log("nenhum");
}

var minhaIdade = 30;
var idade = 50;

if (minhaIdade > idade) {
  console.log("é maior");
} else if (minhaIdade === idade) {
  console.log(" é igual");
} else if (minhaIdade < idade) {
  console.log("é menor");
}
