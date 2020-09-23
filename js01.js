function calcularIMC(){
    peso = parseFloat(document.getElementById('txtPeso').value);
    altura = parseFloat(document.getElementById('txtAlt').value);

    imc = peso / (altura * altura);

    document.getElementById('res').innerHTML = `<br>IMC = ${imc.toFixed(2)}<br>`//formata o float para 2 casas depois da vírgula

    if(imc < 20){
        res.innerHTML += ` Abaixo do peso.`
    }else if(imc < 25){
        res.innerHTML += ` Peso ideal.`
    }else{
        res.innerHTML += `Acima do peso.`
    }
    
    }