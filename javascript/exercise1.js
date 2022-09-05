/* 1. Declare uma variável de nome weight
*/
let weight;


/* 2. Que tipo de dado é a variável acima
*/ 
console.log(typeof weight); // undefined


/* 3. Declare uma variável e atribua valores para cada um dos dados:
     * name: String
     * age: Number (integer) -> inteiro
     * stars: Number (float) -> quebrado
     * isSubscribed: boolean
*/
let name = 'Aline';
let age = 34;
let stars = 4.8;
let isSubscribed = true;


/* 4. A variável student abaixo é que tipo de dados? // object
   
   4.1 Atribua a ela as mesmas propriedades e valores do exercício 3

   4.3 Mostre no console.log a seguinte mensagem:
   <name> tem <age> de idade e pesa <weight> kg.
   
*/

let student = {
    name: 'Aline',
    age: 34,
    weight: 60
};

console.log(`${student.name} tem ${student.age} anos e pesa ${student.weight} kg.`);


/* 5. Declare uma variável do tipo Array, de nome students e atribua a ela um valor,
ou seja, somente o Array vazio
*/
let students = [];


/* 6. Reatribua valor para a variável acima, colocando dentro dela o obejto student da questão 4.
(Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)

*/

students = [
    student
];

console.log(students);


/* 7. Coloque no console o valor da posição zero do Array acima.
*/

console.log(students[0]);


/* 8. Crie um novo student e coloque na posição 1 do Array students.
*/

const john = {
    name: 'John',
    age: 36,
    weight: 80
};

students = [
    student,
    john
];

// ou

students[1] = john;

console.log(students);


/* 9. Qual é a resposta do código abaixo e por que?

console.log(a)
var a = 1

*/

console.log(a); 
var a = 1;


/* Resposta

Variável 'a' vai sofrer um hoisting

var a // undefined
console.log(a)
a = 1


*/