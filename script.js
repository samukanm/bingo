let numerosSorteados = [];

function sortearNumero() {
    if (numerosSorteados.length >= 60) {
        alert("Todos os números já foram sorteados! Reiniciando...");
        resetarSorteio();
        return; // Adicionado para evitar continuar o sorteio após resetar
    }
    
    let numero;
    do {
        numero = Math.floor(Math.random() * 60) + 1;
    } while (numerosSorteados.includes(numero));
    
    numerosSorteados.push(numero);
    
    document.getElementById("numero-sorteado").innerText = numero;
    let numElement = document.getElementById("num" + numero);
    if (numElement) {
        numElement.classList.add("marked");
    }
}

function resetarSorteio() {
    numerosSorteados = [];
    document.getElementById("numero-sorteado").innerText = "Clique Para começar!";
    for (let i = 1; i <= 60; i++) {
        let numElement = document.getElementById("num" + i);
        if (numElement) {
            numElement.classList.remove("marked");
        }
    }
}
