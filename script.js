const html = document.querySelector('html');
const app_foco = document.querySelector('.app__card-button--foco');
const app_curto = document.querySelector('.app__card-button--curto');
const app_longo = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');


app_foco.addEventListener('click', () => {
    alterarContexto('foco')
    app_foco.classList.add('active')
})

app_curto.addEventListener('click', () => {
    alterarContexto('descanso-curto')
    app_curto.classList.add('active')
})

app_longo.addEventListener('click', () => {
    alterarContexto('descanso-longo')
    app_longo.classList.add('active')
})

function alterarContexto(contexto) {
    botoes.forEach(function (contexto) {
        contexto.classList.remove('active')
    })
    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src', `./imagens/${contexto}.png`)
    switch (contexto) {
        case 'foco':
            titulo.innerHTML = 'Otimize sua produtividade. <strong>mergulhe no que importa</strong>'
            break;
        case 'descanso-curto':
            titulo.innerHTML = 'que tal dar uma respirada? <strong>faça uma pausa rapida</strong>'
            break;
        case 'descanso-longo':
            titulo.innerHTML = 'Hora de voltar a superfície. <strong>faça uma pausa longa.</strong>'
            break;

    }
}