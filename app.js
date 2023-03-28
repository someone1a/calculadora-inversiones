let calculate_money = () => {
    let money = document.getElementById("money").value
    let plazo_fijo = document.getElementById("plazo").value
    let calculo = (plazo_fijo/12)*money/100
    let app = document.getElementById("app_container")
    let p = document.getElementById("app")
    p.innerHTML=`El monto que se va a generar en un mes ${calculo}`
    app.appendChild(p)
}
// CALCULO MEJORADO: plazo/12*plata/100 + plata
