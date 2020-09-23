function calcular(){
    var salario = parseFloat(document.getElementById('txtSal').value);
    
    if(salario < 1000){
        document.getElementById('res').innerHTML = `<br>Salário com reajuste de 15%: R$ ${(salario*1.15).toFixed(2)}`
    }else if(salario <= 1500){
        res.innerHTML = `<br>Salário com reajuste de 10%: R$ ${(salario*1.1).toFixed(2)}`
    }else{
        res.innerHTML = `<br>Salário com reajuste de 5%: R$ ${(salario*1.05).toFixed(2)}`
    }
}