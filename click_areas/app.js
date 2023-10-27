/* ----------------------------------------------------------------------------

Exercício: 006
Enunciado:
    Existem 3 botões no layout. Cada botão está associado a uma área de
    informação. O objetivo é criar a lógica que permite apresentar cada
    uma das áreas de acordo com o botão clicado.
    A área de informação um deve estar visível por padrão.

    NOTA: quando uma área é apresentada, as outras devem ficar escondidas
---------------------------------------------------------------------------- */


// Botoes

let botao1 = document.querySelector('#tab1')
let botao2 = document.querySelector('#tab2')
let botao3 = document.querySelector('#tab3')

 // Areas
let div1 = document.querySelector('#info1')
let div2 = document.querySelector('#info2')
let div3 = document.querySelector('#info3')

// Mostrando inicialmente somente a area 1
div1.style.display = 'block'
div2.style.display = 'none'
div3.style.display = 'none'



// AREA 1 APARECENDO
botao1.addEventListener('click', (e) => {
     
    div1.style.display = 'block'
    div2.style.display = 'none'
    div3.style.display = 'none'

})

// AREA 2 APARECENDO
botao2.addEventListener('click', (e) => {
        
    div1.style.display = 'none'
    div2.style.display = 'block'
    div3.style.display = 'none'

})

// AREA 3 APARECENDO
botao3.addEventListener('click', (e) => {

    div1.style.display = 'none'
    div2.style.display = 'none'
    div3.style.display = 'block'
})



