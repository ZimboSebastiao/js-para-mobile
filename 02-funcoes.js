
// Formas tradicionais


// Sintaxe anônima associada à variável/constante.
// OBS: cuidado com a ordem, já que nesta sintaxe a funçao primeiro precisa ser declarada para somente depois ser chamada/executada
const exemplo1 = function () {
    console.log("Função anônima");
}


exemplo1();


// Sintaxe declarada/nomeada
// OBS: nesta sintaxe, você pode chamar a função antes ou depois de declará-la. portanto, a ordem não importa
exemplo2();

function exemplo2(params) {
    console.log("Função nomeada");
    
}
exemplo2();

/* ======= Exercício =======*/ 


// function calc(n1, n2, ) {
//    let dif = n1 - n2;
    
//    return Math.abs(dif);
// }



// let resul = calc(65,26);
// let resul2 = calc(8,4);
// let resul3 = calc(8,44);


// console.log(resul);
// console.log(resul2);
// console.log(resul3);


/* ======= Refatoração =======*/ 

const calc = (n1, n2 ) =>  Math.abs(n1 - n2);


let resul = calc(65,26);
let resul2 = calc(8,4);
let resul3 = calc(8,44);


console.log(resul);
console.log(resul2);  
console.log(resul3);

/* ======= Fim Exercício =======*/ 


/* Sintaxe arrow Function */

const exemplo3 = () => {
    console.log("Arrow Function!");
};

exemplo3();

// const saudacao = (cliente) => {
//     console.log("Olá " + cliente);
// }

// Omitir os parênteses do parâmetro (SOMENTE QUANDO FOR 1)
// const saudacao = cliente => {
//     console.log("Olá " + cliente);
// }

// Omitir as {} (SOMENTE QUANDO FOR UMA ÚNICA INSTRUÇÃO)
const saudacao = cliente => console.log("Olá " + cliente);

saudacao("Aicha!");



const calculaMetadeOriginal = (valor) => {
    return valor / 2;
}


// Arrow Function com retorno IMPLÍCITO
const calculaMetade = valor => valor / 2;


let resulA = calculaMetade(100);
let resulB = calculaMetade(666);

console.log(resulA);
console.log(resulB);

console.log("===============================================");

const dados = (nome) => nome.toUpperCase()




console.log(dados("aicha"));
console.log(dados("zimbo"));
console.log(dados("aline"));