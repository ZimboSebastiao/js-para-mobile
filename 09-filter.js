import cursos from "./modulos/cursos.js";

/*
filter (filtar)
Passa por elementos de um array (usando uma função callback) e retorna valores de acordo com uma ou mais condições gerando um novo array.
*/

// Exemplo 1
const vendas = [1500, 3000, 1000, 500, 750];
const meta = 1000;
console.log(vendas);

// Gerando um array com valores que bateram a meta
const vendasAcimaDaMeta = vendas.filter( (venda) => {
    return venda >= meta;
} )

console.log(vendasAcimaDaMeta);

// Exemplo 2
const alunos = ["Nicolas", "Eliel", "Andre", "Kaue", "Barbosa", "Aline", "Melissa", "Marina", "mônica", "Marcelo"];

// filtrando alunos que começam com "M" e terminam com "o". Faz difereçam usar maiusculas ou minuscula
const  resultados = alunos.filter(aluno => aluno.startsWith("M") && aluno.endsWith("o")
);

console.log(resultados);
console.log("\n\n");

