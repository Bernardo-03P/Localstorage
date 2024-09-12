function enviar1() {

    const text = document.getElementById('text').value;
    localStorage.setItem('keychave', text)
    console.log(text)
    console.log('Você armazenou com sucesso!')
}