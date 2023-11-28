/*
Comunicação assícrona (AJAX) 
para carregamento de dados 
usando fetch e a sintaxe 
async/await atráves de função(obrigatório)
*/

const apiUrl = `https://jsonplaceholder.typicode.com/photos`;
async function acessaApi() {
    try {
        const resposta = await fetch(apiUrl);
        console.log(resposta);
    } catch (error) {
        console.error("Erro: " +error.message);
    }    
}
acessaApi();
