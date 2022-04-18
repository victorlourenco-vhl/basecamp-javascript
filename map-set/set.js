const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

// Retorna um array com valores únicos
function valoresUnicos(arr){
    const mySet = new Set(arr);
    return [...mySet] ;// argumento spread (Serve para retornar um array)
}
console.log(valoresUnicos(meuArray));