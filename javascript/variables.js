/*

# Variáveis

* Nomes simbólicos para receber algum valor
* Atalhos de código
* Identificadores
* 3 palavras reservadas paracriar uma variável
    * var
    * let
    * const

*/

var clima = 'quente';
const clima = 'frio';
let clima = 'tropical';

/*

JS é uma linguagem fracamente tipada e dinâmica
- Variáveis não precisam ter um tipo previamente definido
- Podemos mudar o conteúdo da variável

*/

let clima = true; // boolean
clima = ""; // string

console.log(typeof clima);

/*
# Scope 
Determina a visibilidade de alguma variável no JS

# Block statement (Declaração de bloco)

// vamos iniciar um bloco
{
    // aqui dentro é um bloco e posso colocar qualquer código
} // aqui fechamos o bloco

O bloco também criará um novo escopo que chamamos de 'blocked-scoped'

*/


// var é global (tudo que está executando da aplicação) e também local (só existe dentro do escopo)
// -> Hoisting (quando o JS compila todo seu código, todas as declarações de variáveis usando var são 
// levadas ao topo de suas funções/escopo local (se declaradas dentro de uma função), ou ao topo do escopo global 
// (se declaradas fora de uma função) independentemente de onde a declaração foi feita.) <-

console.log('> existe x antes do bloco?', x);

{
    var x = 0;
}

console.log('> existe x depois do bloco?', x);


// const e let são locais e só funcionam no escopo onde foi criada

console.log('> existe y antes antes do bloco?', y);

{
    let y = 0;
}

console.log('> existe y depois do bloco?', y);


/* 
# Para criar nomes
    * JS é case sensitive (sensível ao caso)
    * JS aceita a cadeia de caracteres Unicode

- Posso:
    * Iniciar com esses caracteres especiais: $ _
    * Iniciar com letras
    * Colocar acentos
    * Letras maiúsculas e minúsculas fazem diferença

- Não posso:
    * Iniciar com números
    * Colocar espaços vazios no nome

- Ideal: 
    * Criar nomes que fazem sentido 
    * Que expliquem o que a variável é ou faz
    * camelCase
    * snake_case
    * Escrever em inglês

*/
