
/*Conceito
Usando o ... como "rest operator"
podemos mesclar
*/ 
const cientistas = ["Tesla", "Einstein", "Newton", "Darwin"];
const artistas = ["Tayc", "Ya Levis", "Dadju", "Paulo Flores", "Yola Semedo", "CEF"];
                    // rest
const classificar = (...parametro) => parametro.sort();


console.log(classificar(...cientistas)); // Spread
console.log(classificar(...artistas)); // Spread