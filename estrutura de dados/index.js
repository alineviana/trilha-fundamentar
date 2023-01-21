//Arrays
const pilotos = ['Senna', 'Prost', 'Schumacher', 'Hamilton']

// a indexação (index) começa pelo número 0
console.log(pilotos[0]) // Senna
console.log(pilotos[3]) // Hamilton

// acessar o tamanho do array
console.log(pilotos.length)

// iterável
for(let piloto of pilotos) {
    console.log(piloto) // Senna, Prost, Schumacher, Hamilton
}

// adicionar elementos
pilotos.push('Alonso')
console.log(pilotos) // [ 'Senna', 'Prost', 'Schumacher', 'Hamilton', 'Alonso' ]

// encontrar um elemento
const senna = pilotos.find(piloto => piloto === 'Senna')
console.log(senna) // Senna

// deletar um elemento
pilotos.splice(1, 1)
console.log(pilotos) // [ 'Senna', 'Schumacher', 'Hamilton', 'Alonso' ]


// Matrix
const students = [['Joseph', 23, 'MG'], ['Briana', 22, 'SP'], ['Priscila', 21, 'PR']]
console.log(students[0][1]) // 23


// Stack no código
// Passo 1: Modelando
class Stack {
    constructor() {
        this.data = []
        this.top = -1
    }

    push(value) {
        this.top++
        this.data[this.top] = value
        return this.data
    }

    pop() {
        if(this.top < 0) return undefined
        const poppedTop = this.data[this.top]
        delete this.data[this.top]
        this.top--
        return poppedTop
    }

    peek() {
        return this.top >= 0 ? this.data[this.top] : undefined
    }
}

// Passo 2: Utilizando
const stack = new Stack()

// adicionar dados
stack.push('learning')
stack.push('data')
console.log(stack.push('structures')) // [ 'learning', 'data', 'structures' ]

console.log(stack.peek()) // structures

// remover
stack.pop()
console.log(stack.pop())

console.log(stack.peek()) // learning


// Queue
// Passo 1: Modelando
class Queue {
    constructor() {
        this.data = []
    }

    enqueue(item) {
        this.data.push(item)
        console.log(`${item} chegou na fila!`)
    }

    dequeue() {
        const item = this.data.shift()
        console.log(`${item} saiu da fila!`)
    }
}

// Passo 2: Utilizando
const fila = new Queue()

fila.enqueue('Mariana')
fila.enqueue('João')
fila.enqueue('Ariel')
fila.dequeue()
fila.dequeue()
fila.dequeue()
// Mariana chegou na fila!
// João chegou na fila!
// Ariel chegou na fila!
// Mariana saiu da fila!
// João saiu da fila!
// Ariel saiu da fila!