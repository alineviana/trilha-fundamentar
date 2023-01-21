// CLASSES

// definir classes
class Pessoa {
    constructor(nome) {
        this.id = ~~(Math.random() * 100000)
        this.nome = nome
    }

    dizerNome() {
        console.log(this.nome)
    }
}

// criar objeto
const pessoa = new Pessoa('Mayk')

console.log(pessoa) // Pessoa { id: 3132, nome: 'Mayk' }


// ENCAPSULAMENTO

// Escrevendo de modo estrutural
/* 
let altura = 50;
let largura = 60;

function calcularArea() {
    return altura * largura
}

let area = calcularArea() 
*/

// Orientado a objeto
class Poligono {
    constructor(altura, largura) {
        this.altura = altura
        this.largura = largura
    }

    get area() {
        return this.#calcularArea()
    }

    #calcularArea() {
        return this.altura * this.largura
    }
}

// criar o objeto
let poligono = new Poligono(50, 60)

console.log(poligono.area) // 3000


// Programação Estruturada x Orientação a Objetos

// estruturado
var valorHora = 50
var tempoEstimado = 20
var desconto = valorHora * tempoEstimado * (10/100)
var custoEstimado = valorHora * tempoEstimado - desconto
console.log(custoEstimado)

// POO
const job = new Job()
job.valorHora = 50
job.tempoEstimado = 20
job.desconto = 10
const custoEstimado = job.calcularEstimativa()
console.log(custoEstimado)


// HERANÇA
class Veiculo {
    rodas = 4;

    mover(direcao){}
    virar(direcao){}
}

class Moto extends Veiculo {
    constructor() {
        super() // puxar atributos e métodos do pai
        this.rodas = 2
    }
}

// POLIMORFISMO
class Atleta {
    peso;
    categoria;

    constructor(peso) {
        this.peso = peso
    }

    definirCategoria() {
        if (this.peso <= 50) {
            this.categoria = 'infantil'
        } 
        else if (this.peso <= 65) {
            this.categoria = 'juvenil'
        } 
        else {
            this.categoria = 'adulto'
        } 
    }
}

class Lutador extends Atleta {
    constructor(peso) {
        super(peso)
    }

    definirCategoria() {
        if (this.peso <= 54) {
            this.categoria = 'pluma'
        } 
        else if (this.peso <= 60) {
            this.categoria = 'leve'
        } 
        else if (this.peso <= 75) {
            this.categoria = 'meio-leve'
        } 
        else {
            this.categoria = 'pesado'
        } 
    }
}

// ABSTRAÇÃO
// definir
class Parafuso { // Superclasse - Abstrata
    
    constructor() {
        if (this.constructor === Parafuso)
        throw new Error('Classe abstrata não pode ser instanciada')
    }

    get tipo() {
        throw new Error('Método "get tipo()" precisa ser implementado')
    }
}

class Fenda extends Parafuso {
    
    constructor() {
        super()
    }

    get tipo() {
        return 'fenda'
    }
}

class Philips extends Parafuso {
    
    constructor() {
        super()
    }

    get tipo() {
        return 'philips'
    }
}

class Allen extends Parafuso {}

// criar e usar
new Parafuso() // 'Classse abstrata não pode ser instanciada'
let fenda = new Fenda()
let philips = new Philips()
let allen = new Allen()

console.log(fenda.tipo, philips.tipo) // fenda philips
console.log(allen.tipo) // 'Método "get tipo()" precisa ser implementado'

// Nesse exemplo, só existe parafuso se ele for de algum tipo específico como: Fenda, Philips ou Allen