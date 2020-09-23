function start(){
    for(let i = 1; i <= 500; i++){
        if(i % 5 == 0){
            document.getElementById('res').innerHTML += `<br>${i}`
        }
    }
}