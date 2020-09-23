function quadrados(){
    for(let i = 1; i <= 20; i++){
    document.getElementById('res').innerHTML += `<br>${i}² = ${i*i}`
    }
}