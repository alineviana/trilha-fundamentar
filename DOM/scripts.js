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