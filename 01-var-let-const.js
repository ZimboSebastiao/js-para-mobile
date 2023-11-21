var idade = 18; // ESCOPO GLOBAL

if (idade >= 18) {
    let mensagem = "É adulto"; // ESCOPO DE BLOCO

} else {
    let mensagem = "É menor"; // ESCOPO DE BLOCO

}

console.log(idade);

// Dará erro porque mensagem só existe no bloco if/else
console.log(mensagem);