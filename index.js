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

function usuario(nome , idade, cidade, profissao){
	console.log(`Eu sou ${nome}, tenho ${idade} anos, moro ${cidade} e sou ${profissao}.`)

}

const nome1 = prompt("Digite o seu nome: ");
const idade1 = prompt("Digite a sua idade: ");
const cidade1 = prompt("Digite a sua cidade: ");
const profissao1 = prompt("DIgite a sua profissao: ");
usuario(nome1, idade1, cidade1, profissao1);