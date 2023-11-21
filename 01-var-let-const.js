var idade = 18; // ESCOPO GLOBAL

if (idade >= 18) {
    // let mensagem = "É adulto"; // ESCOPO DE BLOCO

} else {
    // let mensagem = "É menor"; // ESCOPO DE BLOCO

}

console.log(idade);

// Dará erro porque mensagem só existe no bloco if/else
// console.log(mensagem);

const meuNome = "Zimbo";
console.log(meuNome);



// Reatribuição NÃO é possível em constantes
// meuNome = "Zimbo Al";
console.log(meuNome);

// Constantes sempre são declaradas com algum valor
// e este valo não pode ser Modificado
const escola = "Senac";