var idades = [];
var opiniao = [];
var i = 0;
var somaIdades = 0;

function inserirDados(){
    
    
    do{
       idades[i] = parseInt(window.prompt("Insira a idade (< 0 para sair): "));
       if(idades[i] < 0){
           idades[i] = 0;
           break;
       }
       
        do{
            opiniao[i] = parseInt(window.prompt("Insira a opinião do filme (01 - Ótimo | 2 - Bom | 3 - Regular | 4 - Ruim)"))
        }while (opiniao[i] < 1 || opiniao[i] > 4)
        
        somaIdades += idades[i]; 
        i++;

    }while (idades[idades.length - 1] > 0)

    document.getElementById('res').innerHTML = ``;

    document.getElementById('res').innerHTML += `Quantidade de pessoas que responderam: ${i} pessoas`;
    document.getElementById('res').innerHTML += `<br>Média das idades: ${(somaIdades / i).toFixed(2)} anos`;

    let otimo = 0, bom = 0, reg = 0, ruim = 0;
    for(let j = 0; j <= opiniao.length; j++){
        if(opiniao[j] == 1){
            otimo++;
        }else if(opiniao[j] == 2){
            bom++;
        }else if(opiniao[j] == 3){
            reg++;
        }else if(opiniao[j] == 4){
            ruim++;
        }else{

        }
    }

    document.getElementById('res').innerHTML += `<br>ÓTIMO: ${((otimo*100)/i).toFixed(2)}%`;
    document.getElementById('res').innerHTML += `<br>BOM: ${((bom*100)/i).toFixed(2)}%`;
    document.getElementById('res').innerHTML += `<br>REGULAR: ${((reg*100)/i).toFixed(2)}%`;
    document.getElementById('res').innerHTML += `<br>RUIM: ${((ruim*100)/i).toFixed(2)}%`;

}