// 11-promises-com-fetch.js

/* Comunicação assíncrona (AJAX) para 
carregamento de dados usando fetch/then/catch */

const apiUrl = `https://jsonplaceholder.typicode.com/users/3`;

// Conecte/Acesse...
fetch(apiUrl)

// ... e então capture a resposta da API no formato JSON
.then(resposta => {
    // se a resposta da requisição não for bem sucedida
    if (!resposta.ok) {
        throw new Error (
            `Erro na requisição: ${resposta.status} - ${resposta.statusText}`
        )
    }
    return resposta.json()
})

// ... e então capture os dados contidos na resposta
.then( dados => console.log(dados) )

// em caso de erro (rede, acesso. no json, gerais)
.catch(error => console.error("Erro na operação: "+error.message));