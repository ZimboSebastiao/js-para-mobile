
// Formas tradicionais


// Sintaxe anônima associada à variável/constante.
// OBS: cuidado com a ordem, já que nesta sintaxe a funçao primeiro precisa ser declarada para somente depois ser chamada/executada
const exemplo1 = function () {
    console.log("Função anônima");
}


exemplo1();


// Sintaxe declarada/nomeada
// OBS: nesta sintaxe, você pode chamar a função antes ou depois de declará-la. portanto, a ordem não importa
exemplo2();

function exemplo2(params) {
    console.log("Função nomeada");
    
}
exemplo2();