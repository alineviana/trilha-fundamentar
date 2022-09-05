// Create a motivational phrases app

// Function Statement 
function createPhrases() {
    console.log('Estudar é muito bom!');
    console.log('Paciência e persistência!');
    console.log('Revisão é mãe do aprendizado!');
};

createPhrases(); // execute, run, call, invoke 
createPhrases();
createPhrases();

console.log('Fim do programa!');


// Functions anonymous or function expression
const sum = function(number1, number2) {
    let total = number1 + number2;
    return total;
}

let number1 = 34;
let number2 = 22;  

console.log(`O número 1 é ${number1}`);
console.log(`O número 2 é ${number2}`);
console.log(`A soma é ${sum(number1, number2)}`);


// Função é um liquidificador
function fazerSuco(fruta1, fruta2) {
    return 'suco de: ' + fruta1 + ' e ' + fruta2;
}

const copo = fazerSuco('banana', 'maçã');

console.log(copo);


// Function Scope
let subject = 'create video';

function createThink(subject) {
    subject = 'study';
    return subject;
}

console.log(subject);
console.log(createThink(subject));


// Function Hoisting
sayMyName();

function sayMyName() {
    console.log("Aline");
}


// Arrow Functions
const sayMyName = (name) => {
    console.log(name);
}

sayMyName('Aline');