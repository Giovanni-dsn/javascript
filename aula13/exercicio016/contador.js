function contar() {
    var txtinicio = document.getElementById('inicio')
    var txtfim = document.getElementById('fim')
    var txtpasso = document.getElementById('passo')
    var inicio = Number(txtinicio)
    var fim = Number(txtfim)
    var passo = Number(txtpasso)
    var res = document.getElementById('res')
    if (passo <= 0) {
        window.alert('O passo não pode ser negativo ou 0')
    } else {
        for (a = inicio;a <= fim; a += passo) {
            document.write(res)
        }
    }
}