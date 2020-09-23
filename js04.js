function funcao(){
    var horas = parseFloat(document.getElementById('txtHoras').value);
    var salMin = parseFloat(document.getElementById('txtSal').value);
    var horaTrab = salMin / 2.0;
    var salBruto = horaTrab * horas;
    var imposto = salBruto * 0.03;

    document.getElementById('res').innerHTML = `<br>Hora trabalhada = R$ ${horaTrab.toFixed(2)}`
    res.innerHTML += `<br>Salário Bruto = R$ ${salBruto.toFixed(2)}`
    res.innerHTML += `<br>Imposto (3%) = R$ ${imposto.toFixed(2)}`
    res.innerHTML += `<br>Salário a receber (Salário Bruto - Imposto) = R$ ${(salBruto - imposto).toFixed(2)}`

    
}