import {pessoa, livro} from "./modulos/dados.js";

console.log(pessoa);
console.log(pessoa.nome);

for (const prop in pessoa) {
    console.log(pessoa[prop]);
    
}
console.log(livro);