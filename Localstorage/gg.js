function enviar1() {

    const numero = document.getElementById('text').value;
    localStorage.setItem('keychave', numero)
    console.log(numero)
    console.log('Você armazenou com sucesso!')
}