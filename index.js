let golBrazil = Math.floor(Math.random() * 11);
let golAlemnha = Math.floor(Math.random() * 11);
let tentativas = 1;

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('verificar').addEventListener('click', verificar)
    document.getElementById('restart').addEventListener('click', restart)
})

function restart() {
    location.reload();
}

function calculateDica(apostaBrazil, apostaAlemanha) {
    dica = document.getElementById('dica');
    let textBrasil = '';
    let textAlemanha = '';
    if (apostaBrazil < golBrazil) {
        textBrasil = "Brasil fez mais gols. ";
    }
    else if (apostaBrazil > golBrazil) {
        textBrasil = "Brasil fez menos gols. ";
    }
    if (apostaAlemanha < golAlemnha) {
        textAlemanha = "Alemnha fez mais gols.";
    }
    else if (apostaAlemanha > golAlemnha) {
        textAlemanha = "Alemanha fez menos gols. ";
    }
    dica.textContent = textBrasil + textAlemanha;
}

function salvarEstadoPalpites(apostaBrazil, apostaAlemanha) {
    let palpites = document.getElementById('palpites');
    let valorAtual = palpites.value;
    palpites.textContent += "|| " + apostaBrazil + " x " + apostaAlemanha;
}

function terminarRodada() {
    document.getElementById("verificar").disabled = true;
}

function verificar() {
    if (tentativas <= 10) {
        let apostaBrazil = document.getElementById('input-brazil').value;
        let apostaAlemanha = document.getElementById('input-alemanha').value;
        let esconder = document.getElementById('esconder').style.display = 'block';
        let tentativa = document.getElementById('flag-tentativa');
        
        if (apostaBrazil == golBrazil && apostaAlemanha == golAlemnha){
            tentativa.textContent = 'Você Acertou. Parabéns!'
            tentativa.style.backgroundColor = 'lightgreen';
            document.getElementById("restart").value = "Iniciar Jogo"
            terminarRodada();
            return;
        }
        tentativa.textContent = 'Errado!';
        tentativa.style.backgroundColor = 'orange';
        tentativas++;
        calculateDica(apostaBrazil, apostaAlemanha);
        salvarEstadoPalpites(apostaBrazil, apostaAlemanha);
        return;
    }
    terminarRodada();
}