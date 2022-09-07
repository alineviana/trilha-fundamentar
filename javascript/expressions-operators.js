/*

    Expressões e operadores

    - Expressions
    - Operators
        * Binary
        * Unary
        * Ternary

*/

// Operador binário
let number = 1;
console.log(number + 1);

// Operador unário
let number1 = 1;
console.log(++number1);

// Operador Ternário
let number2 = 1;
console.log(true ? 'alo' : 'nada');


/* New

* left-hand-side expression
* Criar um novo objeto

*/

let name = new String('Aline');
name.surName = 'Viana';
let age = new Number(34);
console.log(name.surName, age);


/*
    Operadores unários
    typeof
    delete
*/
console.log(typeof 'Aline');

const person = {
    name: 'Aline',
    age: 25
};

delete person.age;

console.log(person);


/*
    Operadores Aritméticos

    * Soma
    * Subtração
    * Multiplicação
    * Divisão
    


    * Resto da divisão
    * Incremento
    * Decremento
    * Exponencial
*/

// Soma
console.log(3+3);

// Subtração
console.log(9-3);

// Multiplicação
console.log(3.2*2);

// Divisão
console.log(12/2);

// Resto da divisão
console.log(15%2);

// Incremento
let increment = 0;
increment++
console.log(increment);

// Decremento
let decrement = 7;
decrement--
console.log(decrement);

// Exponencial
console.log(3**3);


// Grouping operator ()
let total = (2 + 3) * 5
console.log(total);


// Operadores de Comparação
// Irá comparar valores e retornar um boolean como resposta da comparação

// == igual a 
let one = 1;
let two = 2; 

console.log( two == 1 ); // false
console.log( one == "1" ); // true

// != diferente de 
console.log(one != two); // true
console.log(one != 1); // false
console.log(one != "1"); // false

// === estritamente igual a 
console.log(one === "1"); // false
console.log(one === 1); // true

// estritamente diferente de 
console.log(two !== "2"); // true
console.log(two !== 2); // false

// > Maior que  
console.log(one > two); // false

// <= Maior ou igual a 
console.log(one >= 1); // true
console.log(two >= 1); // true

// < Menor que
console.log(one < two); // true

// <= Menor ou igual a 
console.log(one <= two); // true
console.log(one <= 1); // true
console.log(one <= 0); // false


// Operadores de atribuição
let x

// Assignment 
x = 1

// Addition assignment
x += 2

// Subtraction assignment
x -=1

// Multiplication assignment
x *= 2

// Division assignment
x /= 2

// remainder, exponetiation
x %= 2 
x **=2

console.log(x);


// Operadores lógicos (logical operators)
// 2 valores booleanos quando verificados resultará em verdadeiro ou falso

let pao = true
let queijo = true

// AND &&
console.log(pao && queijo); // true

// OR ||
console.log(pao || queijo); // true

// NOT !
console.log(!pao); // false


// Operador Condicional Ternário
// Dependendo da condição, podemos receber valores diferentes

// Condição então valor 1 se não valor 2
// condition ? value1 : value2

// Café da manhã top
 let cafe = true
 let cake = false

 const niceBreakfast = cafe && cake ? 'Café top' : 'Café ruim';
 console.log(niceBreakfast);

 // Maior de 18 anos
 let age = 16;
 const canDrive = age >= 18 ? 'Can Drive' : 'Cannot drive';
 console.log(canDrive);


// String Operator
// Comparation
console.log('a' === 'a');

// Concatenation
// Retorna a união de duas strings
let alpha = 'alpha';
console.log(alpha + 'bet');

/*
    FALSY
    Quando um valor é considerado false em contextos onde um booleano é obrigatório (condicionais e loops)

    false
    0
    -0
    ""
    null
    undefinde
    NaN

*/

console.log(true ? 'verdadeiro' : 'falso');

/*
    TRUTHY
    Quando um valor é considerado true em contextos onde um booleano é obrigatório (condicionais e loops)

    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity

*/

console.log(true ? 'verdadeiro' : 'false');


/* Operator precedence 

* grouping                         ( )
* negação e incremento             ! ++ --
* multiplicação e divisão          * /
* adição e subtração               + -
* relacional                       < <= > >=
* igualdade                        == !== === !==
* AND (lógico)                     &&
* OR  (lógico)                     ||
* condicional                      ? :
* assignment                       = += -= *=

*/

console.log(2 + 5 * 10);

console.log(3 > 2 && 2 > 1);