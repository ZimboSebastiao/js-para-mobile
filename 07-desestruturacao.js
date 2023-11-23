
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
