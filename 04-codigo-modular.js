// Podemos usar "alias/apelidos" com o comando "as" para evitar conflitos entre módulos de mesmo nome
import {pessoa, livro, alunos as reprovados} from "./modulos/dados.js";
import alunos from "./modulos/alunos.js";
import { converteMaiuscula, converteMinuscula, formaMoeda } from "./modulos/funcoes.js";


console.log(pessoa);
console.log(pessoa.nome);

for (const prop in pessoa) {
    console.log(pessoa[prop]);
    
}
console.log(livro);

console.log(alunos);
console.log(reprovados);

console.log(converteMaiuscula(reprovados[0]));
console.log(formaMoeda(1899));