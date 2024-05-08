let calculate_money = () => {
    let money = parseFloat(document.getElementById("money").value);
    let plazo = parseFloat(document.getElementById("plazo").value);
    let days = parseFloat(document.getElementById("days").value);
    let app = document.getElementById("result");
    let p = document.createElement("p");
    let calculo = (plazo / 12 / 30) * money / 100 + money; // Corrección del cálculo
    p.innerHTML = `El total generado en ${days} días es ${calculo.toFixed(2)}`; // toFixed(2) para mostrar solo 2 decimales
    app.appendChild(p);
};


// CALCULO MEJORADO: plazo/12*plata/100 + plata
