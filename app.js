let calculate_money = () => {
    let money = parseFloat(document.getElementById("money").value)
    let plazo = parseFloat(document.getElementById("plazo").value)
    let app = document.getElementById("result")
    let p = document.getElementById("p")
     let calculo = (plazo /12*money/100+money)
    p.innerHTML = `El monto que va a tener en su cuenta despues de un mes es de: $${calculo}`
    result.appendChild(p)
}
// CALCULO MEJORADO: plazo/12*plata/100 + plata

let calculate_advanced = () => {
    let money = parseFloat(document.getElementById("money").value)
    let plazo = parseFloat(document.getElementById("plazo").value)
    let app = document.getElementById("result")
    let p = document.getElementById("p")
    let time = document.getElementById("time").value
    /*let result = 0
    for (let i = 0; i <= time; i++) {
        let interes = money * plazo
        result + interes
        money + interes
    } */
    let calculo = parseFloat((((plazo / 12) * money / 100)*time)+money)
    p.innerHTML=`El dinero generado en ${time} meses es de $${calculo}`
    app.appendChild(p)
}
