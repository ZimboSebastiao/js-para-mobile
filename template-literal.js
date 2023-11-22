const nome = "Zimbo";
const sobrenome = "Sebastião";

let idade = 23;
let cidade = "São Paulo";
let estado = "SP";

/* Concatenação tradicional usando operador +

Meu nome é Zimbo Sebastião, tenho 25 anos e moro atualmente na cidade de São Paulo - SP
*/

let mensagem1 = "Meu nome é <b class=\"destaque\">"+nome+ "</b> "+sobrenome+ ", tenho "+idade+" anos e moro atualmente na cidade de "+cidade+" - "+estado+".";

console.log(mensagem1);

console.log("=====================================");
/* Template Literal/String*/

let mensagem2 = `Meu nome é ${nome.toUpperCase()} ${sobrenome}, tenho ${idade} anos e moro atualmente na cidade de ${cidade} - ${estado}. Sou ${ idade >= 18 ? 'maior' : 'menor'} de idade`;

console.log(mensagem2);