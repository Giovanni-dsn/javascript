array = []
let divres = document.getElementById('res')
function adicionar (){
    let txtnum = document.getElementById('num').value
    let num = Number(txtnum)
    let lista = document.getElementById('space')
    if (num <= 0 || num > 100 || array.indexOf(num) != -1) {
        window.alert('[ERRO!] Número já registrado ou número inválido')
    } else {
        let opt = document.createElement('option')
        lista.appendChild(opt)
        divres.style.display = 'none'
        lista.setAttribute('size','10')
        opt.innerText = `Valor ${num} adicionado`
        array.push(num)
    }
    document.querySelector('input#num').value = ''
    document.getElementById('num').focus()
}

function finalizar() {
    divres.style.display = 'block'
    let paragrafo = document.getElementById('pres')
    if (array.length == 0) {
        window.alert('[ERRO!] Adicione valores para poder finalizar')
    } else {
        let cont = 0
        let maior = 0
        let menor = 0
        let soma = 0
        let quant = array.length
        for (let n = 0; n < quant; n++) {
            if (n == 0) {
                maior = array[n]
                menor = array[n]
            } else {
                if (array[n] > maior) {
                    maior = array[n]
                }
                if (array[n] < menor) {
                    menor = array[n]
                }
            }
            soma += array[n]
        }
        let media = soma/quant
        paragrafo.innerHTML = `No total são ${quant} valores adicionados.<br>O maior número adicionado foi ${maior}<br>O menor número adicionado foi ${menor}<br>A soma de todos os valores é ${soma}<br>A média dos valores digitados é ${media.toFixed(2)}` 
    }
}