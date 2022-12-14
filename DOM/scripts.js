// Manipulando conteúdo

// textContent (altera conteúdo do texto)

const element = document.querySelector('h1')

element.textContent += " Olá Devs!"

console.log(element.textContent);


// innerText (troca texto interno do elemento)

element.innerText = "Aline"


// innerHTML (trocar o conteúdo HTML interno, add HTML direto no elemento através do JS)

element.innerHTML = "Olá mundo! <small>!!!</small>"


// Value

const elements = document.querySelector('input')

elements.value = "Valor que eu quiser"


// Atributos 

const header = document.querySelector('header')
header.setAttribute('id', 'header')

const headerID = document.querySelector('#header')

console.log(headerID.getAttribute('class')) // pegar atributo

header.removeAttribute('id')

header.setAttribute('class', 'bg header') // add class


// Alterando estilos

const elementos = document.querySelector('body')

elementos.style.backgroundColor = "#f9f3D2"
console.log(elementos.style.backgroundColor)

// class list
element.classList.add('active', 'green')
console.log(element.classList)
element.classList.remove('active')
element.classList.toggle('active')


// navegando pelos elementos
// parentNode parentElement
const body = document.querySelector('body')
console.log(body.parentNode)


// childNodes children
const el = document.querySelector('body')
console.log(el.childNodes)
console.log(el.children)

// firstChild firstElementChild
console.log(el.firstElementChild)

// lastChild lastElementChild
console.log(el.lastElementChild)


// nextSiblings nextElementSibling
const elem = document.querySelector('header')
console.log(elem.nextElementSibling)

// previousSibling previousElementSibling
const elemen = document.querySelector('body script')
console.log(elemen.previousSibling)


// Criando e adicionando elementos
// createElement
const div = document.createElement('div')
div.innerText = 'Olá devs!'

// append prepend
const bodies = document.querySelector('body')

bodies.append(div) // add depois do script e o prepend add antes 

// insertBefore
const script = body.querySelector('script')
bodies.insertBefore(div, script)

// Eventos
const h1 = document.querySelector('h1');

h1.addEventListener('mouseover', print)

function print() {
    console.log('print')
}

const input = document.querySelector('input')

input.onkeydown = function() {
    console.log('rodei')
}