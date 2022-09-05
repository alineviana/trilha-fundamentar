/*

String

* Cadeia de caracteres

"" aspas duplas
'' aspas simples
`` template literals ou templates strings

*/

console.log('Aline');
console.log(`{1 + 1}`); // interpolação
console.log(1 + 1);

/*

Numbers

33 // inteiros
12.5 // reais - float
NaN // not a number
Infinity // infinito

*/

console.log(33 + 12.5);
console.log(33 / 'aaaa');
console.log(12.5 === Infinity);

/* 
Boolean

- Somente dois valores
    true // verdadeiro
    false // falso

*/

console.log(true);
console.log(false);

/* 

- Undefined // indefinido

- Null // nulo 
Objeto que não possui nada dentro

*/

console.log(null === undefined);

/*

Object
* Objeto (tipo de dado estrutural / estrutura os dados)
* Propriedades / atributos
* Funcionalidades / Métodos

{ propriedade: "valor" }

*/

console.log({
    name: 'Aline',
    idade: 36,
    andar: function() {
        console.log('andar')
    }
})


/*

Array (Vetores)
    * Uma lista
    * Agrupamento de dados

    ["Aline", 34]

*/

console.log(['Aline', 34]);


/* 

# Tipos de dados
Conforme o ECMAScript standard temos 9 tipos de dados

* Data types
    * Primitive / Primitive value
    * Structural
    * Structural Primitive

# Primitivos
    * String
    * Number
    * Boolean
    * Undefined
    * Symbol
    * BigInt

# Estruturais
    - Object
        * Array
        * Map
        * Set
        * Date

    - Function

## Primitivo Estrutural / Structural Root Primitive
    * null

*/