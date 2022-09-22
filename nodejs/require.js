// Require é uma maneira de chamar módulos que já são nativos do nodejs ou módulos que podem ser criados ou instalados
// módulos nativos
const path = require('path');

console.log(path.basename(__filename)); // retorna require.js

// meus módulos
const myModule = require('./exports')

console.log(myModule)