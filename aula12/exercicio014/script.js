function horario() {
    var data = new Date()
    var min = data.getMinutes()
    var hora = data.getHours()
    var body = document.getElementsByTagName('body')
    var img = document.getElementById('img')
    var texto = document.getElementById('horas')
    if (hora <= 12) {
        texto.innerText = `São exatamente ${hora}:${min} horas da manhã.`
    } else if (hora <= 18) {
        texto.innerText = `São exatamente ${hora}:${min} horas da tarde.`
        document.body.style.backgroundImage = 'linear-gradient(to bottom, #798FAD, #F1B96B)'
        img.style.backgroundImage = 'url(imagens/tarde.jpg)'
    } else if (hora <= 23) {
        texto.innerText = `São exatamente ${hora}:${min} horas da noite.`
        document.body.style.backgroundImage = 'linear-gradient(to bottom, #1E1D21, #524B48)'
        img.style.backgroundImage = 'url(imagens/noite.jpg)'
        document.querySelector('h1').style.color = 'white'
    }
}