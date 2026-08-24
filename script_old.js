//DICA: Normalmente colocamos os elementos capturados dentro de uma constante
const html = document.querySelector('html');

//BUTTONS
const  focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const botaoIniciar = document.querySelector('.app__card-primary-button')

//HEADER
const banner = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')

//TIMER
const displayTimer = document.querySelector('#timer')

//CRIAR OS OUVINTES DE EVENTOS
focoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'foco')
    banner.setAttribute('src','/imagens/foco.png')
})

curtoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto')
    banner.setAttribute('src', '/imagens/descanso-curto.png')
})

longoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-longo')
    banner.setAttribute('src','/imagens/descanso-longo.png')
})