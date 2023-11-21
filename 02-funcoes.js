
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

/* Exercício


*/ 

function calc(n1, n2, ) {
   let dif = n1 - n2;
    
   return dif;
}



let resul = calc(65,26);
let resul2 = calc(8,4);
let resul3 = calc(8,44);


console.log(resul);
console.log(resul2);
console.log(Math.abs(resul3));


