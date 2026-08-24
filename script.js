//DICA: Normalmente colocamos os elementos capturados dentro de uma constante
const html = document.querySelector('html');
const  focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const botaoIniciar = document.querySelector('.app__card-primary-button')

//TIMER
const displayTimer = document.querySelector('#timer')

//HEADER
const banner = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')

//CRIAR OS OUVINTES DE EVENTOS
focoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'foco')
})

curtoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto')
})

longoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-longo')
})