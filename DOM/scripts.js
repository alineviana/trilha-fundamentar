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