let calculate_money = () => {
    let money = parseFloat(document.getElementById("money").value)
    let plazo = parseFloat(document.getElementById("plazo").value)
    let app = document.getElementById("result")
    let p = document.getElementById("p")

    // Obtener el último día del mes actual
    let today = new Date()
    let lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate()

    let calculo = (plazo / 12 * money / 100 + money)
    let ingresos_mes = calculo - money
    let monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    let nombre_mes = monthNames[today.getMonth()]

    let ingresos_dia = ingresos_mes / lastDayOfMonth

    p.innerHTML = `El monto que va a tener en su cuenta después de un mes es de: ${calculo}. <br> Ingresos obtenidos durante el mes de ${nombre_mes}: ${ingresos_mes.toFixed(2)}. <br> Ingresos generados por día: ${ingresos_dia.toFixed(2)}`  
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
    let calculo = parseFloat((((plazo / 12) * money / 100) * time) + money)
    p.innerHTML = `El dinero generado en ${time} meses es de $${calculo}`
    app.appendChild(p)
}
