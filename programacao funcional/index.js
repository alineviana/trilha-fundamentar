// PROGRAMAÇÃO FUNCIONAL

// Imperativa e Declarativa
// Função que eleva um número ao quadrado

// Imperativa: Faça da seguinte forma, como deve ser feito... (Orientação a objetos é um tipo de paradigma imperativo)
let number = 2

function square() {
    return number * number
}

number = square()


// Declarativa: O que fazer e não como fazer... (Programação funcional é um tipo de paradigma declarativo)
const square = n => n * n


// Imutabilidade
// Se precisar mudar uma variável, você não muda, você cria uma nova
// Exemplo em JS
const cart = {
    quantity: 2, 
    total: 200
}

// bad
cart.quantity = 3
// good
const newCart = {...cart, quantity: 3}

// Exemplo em ReactJs
const [amount, setAmount] = useState(0)

//bad
amount = 2
// good
setAmount(2)


// STATELESS
let number = 2;

// stateful function
function square() {
    return number * number;
}

number = square();

// stateless function 
const square = n => n * n;

// FUNÇÕES INDEPENDENTES
// deverá ter ao menos 1 argumento
// deverá retornar algo
// dados imutáveis, não guardar estado
const random = (number, Math) => Math.floor(Math.random() * number);

// recursive
// find the factorial of a number
const factorial = x => {

    // if number is 0
    if(x === 0) {
        return 1;
    }

    return x * factorial(x - 1);
}

// FUNÇÕES PURAS

// Função impura
// Exemplo 1: está dependendo de dado externo que não foi passado como parâmetro
function calculateCircumference(radius) {
    return Math.PI * (radius + radius);
}

// Exemplo 2: está alterando um dado externo
let person = {
    name: 'Rafael Carmada',
    age: 'jovem'
}

function changeName(name) {
    person.name = name;
}

// FUNÇÃO PURA
// Exemplo 1
const calculateCircumference = function(pi, radius) {
    return pi * (radius + radius);
}

// com arrow function
const calculateCircumference = (pi, radius) => pi * (radius + radius);

// Exemplo 2
const changePersonName = (person, name) => ({...person, name});


// FIRST-CLASS FUNCTION
// Podem estar em qualquer lugar, inclusive como parâmetro de outras funções
// A função poderá ser entendida como uma variável

const sayMyName = () => console.log('Mayk') ;
const runFunction = fn => fn();

runFunction(sayMyName); // Mayk
runFunction(() => console.log('discover')); // discover

console.log(runFunction(Math.random)); // 0.19273374452661818


// HIGHER-ORDER FUNCTION
// Funções que recebem funções como argumentos
// Funções que poderão retornar outras funções

// Exemplo com .map() JS
const numbers = [2, 4, 8, 16];

const square = n => n * n;

const squaredNumber = numbers.map(square)

console.log(squaredNumber) // [ 4, 16, 64, 256 ]

// Exemplo de um retorno de função
// (currying ou aplicação parcial de função)
const pause = wait => fn => setTimeout(fn, wait);

pause(600)(() => console.log('waiting 600ms')); // waiting 600ms

const wait200 = pause(200);
const wait1000 = pause(1000);

wait200(() => console.log('waiting 200ms')); // waiting 200ms
wait1000(() => console.log('waiting 1s')); // waiting 1s


// COMPOSIÇÃO DE FUNÇÕES
// Um encadeamento de funções
// Uma função que retorna um dado e vai para outra função, que retorna um dado e vai para outra função, que retorna ...
const people = ['Rapha', 'Diego', 'Dani', 'Rod']
const upperCasePeopleThatStartsWithR = people
                                        .filter(person => person.startsWith('R'))
                                        .map(rperson => rperson.toUpperCase())

console.log(upperCasePeopleThatStartsWithR) // [ 'RAPHA', 'ROD' ]

