let calculate_money = () => {
    let money = document.getElementById("money").value
    let plazo = document.getElementById("plazo").value
    let app = document.getElementById("app_container")
    let p = document.getElementById("app")
    let calculo = (plazo / 12) * money / 100
    p.innerHTML = `El monto que se va a generar en un mes ${calculo}`
    app.appendChild(p)
}
// CALCULO MEJORADO: plazo/12*plata/100 + plata

let calculate_advanced = () => {
    let money = document.getElementById("money").value
    let plazo = document.getElementById("plazo").value
    let app = document.getElementById("app_container")
    let p = document.getElementById("app")
    let time = document.getElementById("time").value
    /*let result = 0
    for (let i = 0; i <= time; i++) {
        let interes = money * plazo
        result + interes
        money + interes
    } */
    let calculo = ((plazo / 12) * money / 100)*time
    p.innerHTML=`El dinero generado en ${time} meses es de ${calculo}`
    app.appendChild(p)
}
