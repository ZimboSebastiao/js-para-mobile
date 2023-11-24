import cursos from "./modulos/cursos.js";


/*
reduce (reduzir, redução)
Passa por elementos de um array (usando uma função callback com parâmetros cpm valor inicial) e retornar um único valor/resultado. Pode ser útil para operações matemáticas que geram um único resultado
*/

// Exemplo 1

const valores = [10, 5, 50, 200, 1000];
const total = valores.reduce((acomulador, valor) => {
    return acomulador + valor
}, 0 )

console.log(valores);
console.log(total);

// Sem reduce
let acumuladora = 0;
for(let i = 0; i < valores.length; i++){
    acumuladora  += valores[i]
}

console.log(acumuladora);

// Sem reduce e com for/of

let acumuladora2 = 0;
for(let valor of valores){
    acumuladora2 += valor
}
console.log(acumuladora2);


console.log("======================================\n");

const SomaCursos = cursos.reduce((acomulador, curso) => {
    return acomulador + curso.preco
}, 0 )

console.log(SomaCursos);


console.log("================== Desafio ====================\n");

const desafio = cursos.filter(curso => curso.categoria == "Front-end" || curso.categoria == "Back-end" ).reduce((acomulador, curso) => acomulador + curso.preco, 0 );

console.log(desafio);