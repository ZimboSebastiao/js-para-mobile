
/* Destructuring ou Desestruturação
Extrair os dados de arrays e objetos para variáveis/constantes individuais



/* Destructuring em arrays */

const alunas = ["Tanaka", "Zimbo", "Melissa"];

const [tanaka, zimbo, melissa] = alunas;

console.log(tanaka);
console.log(zimbo);
console.log(melissa);

console.log("===================== \n");
const unidades = ["Penha", "Tatuapé", "Itaquera", "São Miguel"];
// Pulando itaquera
const [penha, tatuape, , smp] = unidades;

console.log(penha);
console.log(tatuape);
console.log(smp);


console.log("===================== \n");

const [tesla, einstein, newton] = ["Tesla", "Einstein", "Newton"];

console.log(tesla);
console.log(einstein);
console.log(newton);

console.log("================================ \n");

const recursos = [
    ["Notebook", "Tv Led", "Desktop"],
    texto => texto.toUpperCase()

]

const exemplo3 = () => {
    console.log("Arrow Function!");
};


console.log(recursos); //  array completo

// Destructuring
const [produtos, converter] = recursos;

// Acessando através da constante que foi gerada pelo Destructuring
console.log(produtos);
console.log(produtos[1]);

for (const produto of produtos) {
    console.log("Produto: "+produto);
    
}

console.log(converter("zimbo"));
console.log(converter("AiCha"));
console.log(converter(produtos[2]));

// Destructuring em objetos

const pessoa = {
    nome: "Andre",
    idade: 19,
    bairro: "penha",
    situacao: "Crítica"
};

const { nome, idade, bairro, situacao } = pessoa;

console.log(`O aluno ${nome} está em situação ${situacao} no curso.`);
console.log(`Mora na ${bairro} e mesmo assim sempre atrasa...`);

console.log("\n\n");

// Criando um apelido para a propriedade codigo
const {codigo: pedido, cursos, preco} = {codigo: "123abc", cursos: ["Figma", "Node.js"], preco: 1000}

console.log(pedido);
console.log(cursos);
console.log(preco);

console.log("\n\n");
// Destructuring para parâmetros de função

// function exibirDadosFilmes(objeto) {
//     console.log(`Filme: ${objeto.titulo} - Ano de lançamento: ${objeto.ano} `);
// }

// const filme1 = {
//     titulo: "Vingadores",
//     ano: 2012
// }

// const filme2 = {
//     titulo: "Barbie",
//     ano: 2023
// }

// exibirDadosFilmes(filme1);
// exibirDadosFilmes(filme2);

function exibirDadosFilmes({titulo, ano}) {
    console.log(`Filme: ${titulo} - Ano de lançamento: ${ano} `);
}

const filme1 = {
    titulo: "Vingadores",
    ano: 2012
}

const filme2 = {
    titulo: "Barbie",
    ano: 2023
}

exibirDadosFilmes(filme1);
exibirDadosFilmes(filme2);