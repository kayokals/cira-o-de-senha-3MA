const numeroSenha = document.querySelector('parametro-senha__texto');
let tamanhoSenha = 12

const botoes = document.querySelectorAll(".parametro-senha__botao")
botoes[0].onclick = diminuirTamanho;
botoes[1].onclick = aumentarTamanho;
function diminuiTamanho(){
    if(tamanhoSenha > 1) {
        tamanhoSenha
    }
    numeroSenha.textContent = tamanhoSenha;
     gerarSenha()
};

function aumentarTamanho(){
    if(tamanhoSenha <20){
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
     gerarSenha()
};
const campoSenha = document.querySelector('#campoSenha');   
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

gerasenha();

function gerasenha();{ 
let senha = '';
for(let i = 0; i< tamanhoSenha; i++){
    let numeroAleatorio = Math.random()*letrasMaiusculas.length;
    numeroAleatorio = Math.floor(numeroAleatorio);
    senha = senha + letrasMaiusculas[numeroAleatorio];
    }
    campoSenha.value = senha;
} 