/*
//Exercicio 1

function minhaFuncao(variavel) {
	return variavel * 5//multiplica o numero recebido
}

console.log(minhaFuncao(2))//envia o numero 2 para a função e imprimi na tela o resultado: 10
console.log(minhaFuncao(10))//envia o numero 10 para a função e imprimi na tela o resultado 20

vai imprimir os valores 10 e 20

se tirasse o console.log irá apenas chamar e enviar os valores a função
*/

//Exercicio 2
/*
let textoDoUsuario = prompt("Insira um texto"); //Pede para o ususario retornar um valor

const outraFuncao = function(texto) { // função declarada
	return texto.toLowerCase().includes("cenoura")// converte o texto para caixa baixa e verifica se há a palavra "cenoura"
}

const resposta = outraFuncao(textoDoUsuario) // chama a função
console.log(resposta)//printa a resposta

i.   Eu gosto de cenoura//true
ii.  CENOURA é bom pra vista//true
iii. Cenouras crescem na terra//true
*/

//Exercicios escritos
//exercicio 1
/*
function usuario() {
	console.log("Eu sou Gustavo, tenho 22 anos, moro em São Leopoldo e sou estudante.");
}

usuario();
*/
//Exercicio 2

function usuario(nome , idade, cidade, profissao){

	return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`

}

const nome1 = "Gustavo";
const idade1 = 22;
const cidade1 = "São Leopoldo";
const profissao1 = "vendedor";

const result = usuario(nome1, idade1, cidade1, profissao1);
console.log(result);



//Exercicio 3
/*
function soma(a, b) {
	const soma = a + b;
	return soma;
}

function maior(a, b) {
	const maiorValor =  a > b;
	return maiorValor;
}

function parOuImpar(a) {
	numPar = a % 2;
	return numPar;
}

const num1 = Number(prompt("Digite um numero: "));
const num2 = Number(prompt("Digite outro valor: "));
let valorMaior;

console.log("A soma dos dois números é: ", soma(num1, num2));
console.log("O primeiro valor é maior que o segundo?", maior(num1, num2));
console.log("O primeiro número é par: ", parOuImpar(num1) == 0);
*/
