/*
    Function() constructor

    * Expressão new
    * Criar um novo objeto
    * This Keyword
*/

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + ' está andando'
    }
};

const aline = new Person("Aline");
const joao = new Person ('João');
console.log(aline.walk());
console.log(joao.walk());


let name = new String('Aline');
console.log(name);