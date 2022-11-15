function energy() {
    resp.innerHTML = ""
    let n = Number(painel.value)
    let c = Number(consumo.value)
    pain = (n * 5 * (1 - 0.20))/1000
    pain = pain * 30

    totPaineis = c / pain
    if (totPaineis <= 1) {
        resp.innerHTML = `Com 5 horas de exposição à radiação solar e 20% de perda do sistema, você precisará de ${totPaineis.toFixed(0)} painel.`
    } else {
        resp.innerHTML = `Com 5 horas de exposição à radiação solar e 20% de perda do sistema, você precisará de ${totPaineis.toFixed(0)} painéis.`
    }

    return false
}