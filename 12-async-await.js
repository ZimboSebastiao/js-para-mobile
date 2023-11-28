/*
Comunicação assícrona (AJAX) 
para carregamento de dados 
usando fetch e a sintaxe 
async/await atráves de função(obrigatório)
*/

const apiUrl = `https://jsonplaceholder.typicode.com/users`;
async function acessaApi() {
    try {
        const resposta = await fetch(apiUrl);
        if (!resposta.ok) {
            throw new  Error (
                `Erro na requisição: ${resposta.status} - ${resposta.statusText}`
            )
        }
        const dados = await resposta.json();
        console.log(dados);

        const lista = document.querySelector("div")
        for(const dado of dados){

                let item = document.createElement("p");
                item.innerHTML = `Nome completo: ${dado.name}  ${dado. username}`;
                lista.appendChild(item);
            
        }
    } catch (error) {
        console.error("Erro: " +error.message);
    }    
}

acessaApi();

