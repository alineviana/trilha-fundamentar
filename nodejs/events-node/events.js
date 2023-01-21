/*

Event Module

É um mecanismo para:
- Disparar eventos
- Ouvir eventos
- Fazer alguma ação quando ouvir o evento
- É a base para muitos outros módulos como: http, stream, file system...

*/

const { EventEmitter} = require('events');
const ev = new EventEmitter();

ev.on('saySomething', (message) => {                 // on -> sempre // once -> uma vez
    console.log('I heard you', message)
})

ev.emit('saySomething', 'Aline')
ev.emit('saySomething', 'Mayk')