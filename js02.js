function categorizar(){
    idade = parseInt(document.getElementById('txtIdade').value);

    if(idade < 5){
        document.getElementById('res').innerHTML = `<br>${idade} anos = Idade insuficiente.`;
    }else if(idade <= 7){
        res.innerHTML = `<br>${idade} anos = Infantil A.`
    }else if(idade <= 10){
        res.innerHTML = `<br>${idade} anos = Infantil B.`
    }else if(idade <= 13){
        res.innerHTML = `${idade} anos = Juvenil A.`
    }else if(idade <= 17){
        res.innerHTML = `${idade} anos = Juvenil B.`
    }else{
        res.innerHTML = `<br>${idade} anos = Senior.`
    }



}