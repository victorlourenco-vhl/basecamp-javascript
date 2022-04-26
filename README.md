# Basecamp JavaScript

O basecamp de javascript ofereicodo pela Digital Innovation One abordou tópicos de JS como:

* Map e Set
* ECMAScript Error - Erros que ocorrem em tempo de execução
* DOMExpcepition - Erros relacionados ao Document Object Model
* Throe, try/Catch e Finally
* Object Error - (Message, fileName, lineNumber)
* Promisses - (resolve, reject)
* fetch - (url, options)

 *************** MAP, FILTER E REDUCE ***************
* map() - cria uma nova matriz preenchida com os resultados da chamada de uma função fornecida em cada elemento da matriz de chamada.
-------------------------------------------------------------
   const numbers = [1, 2, 3, 4, 5];                              

    const numbersMultiplyByTwo = numbers.map(function(number){  
       return number * 2
    });

    console.log(numbersMultiplyByTwo);

    RESULTADO ESPERADO --> [2, 4, 6, 8, 10]
-------------------------------------------------------------

* filter() - cria uma nova matriz com todos os elementos que passam no teste implementado pela função fornecida.

-------------------------------------------------------------
    const ages = [8, 13, 27, 30, 22, 40];

    const evenAges = ages.filter(function(age){
        return age % 2 == 0;
    })

    console.log(evenAges)

     RESULTADO ESPERADO --> [8, 30, 22, 40]
-------------------------------------------------------------

* reduce() - executa uma função redutora (fornecida por você) em cada elemento da matriz, resultando em um único valor de saída.

-------------------------------------------------------------
    const ages = [8, 13, 27, 30, 22, 40];

    const sumOfAges = ages.reduce(function(age, accumalator){
        return accumalator + age;
    }, 0);

    console.log(sumOfAges)
-------------------------------------------------------------
