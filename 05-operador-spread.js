// spread -> espalhar
// Copiar elementos/dados de um array/objeto para dentro de outro array/elemento


// Spread com Arrays
const bandas = ['Pink Floyd', ' Rush', 'Yes'];
const maisBandas = [ ...bandas, "Slayer", "Nightwist"];

console.log(bandas);
console.log(maisBandas);

// Spread com Objetos

const cliente = {
    nome: "Seu Madruga",
    cidade: "São Paulo",
    idade: 55
}

const novosDados = {
    ...cliente, //copiando as props. do cliente pra cá
    // ...maisBandas,
    estado: "SP",
    pedido: "76873RDF",
    total: 50098,
    idade: 60 // sobreescrevendo valores de propriedades
}

console.log(novosDados);