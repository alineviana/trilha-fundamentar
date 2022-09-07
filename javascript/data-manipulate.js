// Manipulando Strings e Números
let string = "123";
console.log(Number(string));

let number = 321
console.log(String(number));


// Contar quantos carcteres tem uma palavra e quantos dígitos tem um número
let word = "paralelepípedo";
console.log(word.length);

let number2 = 1234;
console.log(String(number2).length);

// Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula
let number3 = 4345.33452345
console.log(number3.toFixed(2).replace(".", ",")); // retorna uma string


// Transforme letras minúsculas em maiúsculas e vice-versa
let words = 'Programar é muito bacana!'

console.log(words.toUpperCase());
console.log(words.toLowerCase());


// Serpara um texto que contém espaços, em um novo array onde cada texto é uma posição do array.
// Depois transforme o arrau em u texto e onde eram espações coloque _
let phrase = 'Eu quero viajar!';
let myArray = phrase.split(" ");
let phraseWithUnderscore = myArray.join("_");

console.log(myArray);
console.log(phraseWithUnderscore);


// Verificar se o texto contém a palavra Amor
let phrase1 = 'Eu quero viver!';
console.log(phrase1.includes('Amor')); // incluse case sensitive (diferença entre maiúsculas e minúsculas)


// Criar Array com construtor
let array = ['a', 'b', 'c'];
console.log(array);

let array1 = new Array('a', 'b', 'c');
console.log(array1);


// Manipulando Arrays
// Contar elementos de um array
console.log(['a', 'b', 'c'].length);


//Transformar uma cadeia de caracteres em elementos de um array
let word1 = 'manipulação';
console.log(Array.from(word1));


// Manipulando Arrays
let techs = ['html', 'css', 'js'];

// Adicionar um item no fim
techs.push('nodejs');

// Adicionar um item no início
techs.unshift('sql');

// Remover um item do fim
techs.pop();

// Remover um item do começo
techs.shift();

// Pegar somente alguns elementos do array
console.log(techs.slice(1, 3));

// Remover 1 ou mais itens em qualquer posição do array
techs.splice(1, 3);

// Encontrar a posição de um elemento do array
let index = techs.indexOf('css');

console.log(techs);