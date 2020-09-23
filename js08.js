var candidato1 = "";
var candidato2 = "";

var can1 = 0;
var can2 = 0;
var nulo = 0;
var branco = 0;
var somaVotos = 0;

    //Cadastrar o Nome dos Candidatos
function cadastrar(){ 
    candidato1 = document.getElementById('txtNome1').value;
    candidato2 = document.getElementById('txtNome2').value;
    if(candidato1 == "" || candidato2 == ""){
        alert("Insira o nome dos DOIS candidatos")
    }else{
        alert("Candidatos Cadastrados com Sucesso!");
    }
    
}

    //Contabilizar os votos
function votar(){
    if(candidato1 == "" || candidato2 == ""){
        alert("Sem Candidatos Cadastrados")
    }else{
        let radios = document.getElementsByName("voto");
        let opcaoEscolhida = -1

        //Este for roda todos os radios para verificar qual estpa marcado e passa seu valor para a variável 'opcaoEscolhida'
        for (let i = 0; i < radios.length; i++) {
            if (radios[0].checked) {
                opcaoEscolhida = 0
            }else if(radios[1].checked){
                opcaoEscolhida = 1
            }else if(radios[2].checked){
                opcaoEscolhida = 2
            }else if(radios[3].checked){
                opcaoEscolhida = 3
            }else{
                opcaoEscolhida = -1
            }
        }


        //Switch feito para a opção escolhida aferir o voto
        switch (opcaoEscolhida){
            case 0:
                can1 += 1;
                alert(`Voto Confirmado em Candidato 1  - ${candidato1}`);
                break;

            case 1:
                can2 += 1;
                alert(`Voto Confirmado em Candidato 2  - ${candidato2}`);
                break;

            case 2:
                nulo += 1;
                alert(`Voto Nulo Confirmado!`);
                break;

            case 3:
                branco += 1;
                alert(`Voto em Branco Confirmado!`);
                break;

            default:
                alert("Escolha uma opção para contabilizar o voto!");

        }
        
    }
}


//Finalizar a votação
function finalizar(){
    somaVotos = can1 + can2 + nulo + branco;

    document.getElementById('res').innerHTML = `Total de Votos = ${somaVotos}<br>Votos Candidato 1 - ${candidato1} = ${can1} | ${((can1*100)/somaVotos).toFixed(2)}% dos votos<br>Votos Candidato 2 - ${candidato2} = ${can2} | ${((can2*100)/somaVotos).toFixed(2)}% dos votos<br>Votos Nulos = ${nulo} | ${((nulo*100)/somaVotos).toFixed(2)}% dos votos<br>Votos em Branco = ${branco} | ${((branco*100)/somaVotos).toFixed(2)}% dos votos<br>`; 
}
