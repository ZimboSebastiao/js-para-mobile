import cursos from "./modulos/cursos.js";
/*
map (mapear, mapeia - transformar em outra coisa)
Passa por elementos de um array e realiza operações em cada um deles através de uma função (callback), gerando um  novo array.
*/

// Exemplo 1
const numeros = [10, 20, 5, 12, 66, 50];
console.log(numeros);
const numerosDobrados = numeros.map(numero => numero * 2);

console.log(numerosDobrados);

console.log("\n");
console.log(cursos);

// Exemplo 2: Gerar um novo array apenas com os nomes dos cursos
const titulos = cursos.map(curso => curso.titulo);

console.log(titulos);

// Exercício
const precos = cursos.map(curso => curso.preco * 0.9);

console.log(precos);

// Desafio
const blackFriday = cursos.map(curso => {
    
    return {...curso, preco: curso.preco * 0.9}
});

console.log(blackFriday);

// Simplificar a arrow function: é necessário envolver o código de return implícito com parênteses
const blackFriday2 = cursos.map(curso => 
    
    ({...curso, preco: curso.preco * 0.9})
);

console.log(blackFriday2);