// 11-promises-com-fetch.js

/* Comunicação assíncrona (AJAX) para 
carregamento de dados usando fetch/then/catch */

const apiUrl = `https://jsonplaceholder.typicode.com/users/3`;

// Conecte/Acesse...
fetch(apiUrl)

// ... e então capture a resposta da API no formato JSON
.then(resposta => resposta.json())

// ... e então capture os dados contidos na resposta
.then( dados => console.log(dados) )

// em caso de erro (rede, acesso. no json, gerais)
.catch(error => console.error("Erro na operação: "+error.message));