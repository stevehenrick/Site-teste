
// CLICANDO NO BOTAO E FAZENDO SURGIR O SITE 
document.getElementById("yes").addEventListener("click", function() {
    
     window.open("https://shopee.com.br/22-23-Camisa-De-Futebol-Third-away-III-i.765839579.18978253300?sp_atk=a6899691-46e5-4339-94b1-6a798e27fee0&xptdk=a6899691-46e5-4339-94b1-6a798e27fee0", "_blank"); 

});

 


// BUTTON NÃO - criando funcionalidade 

// Obtenha referências para o elemento e o botão

const elemento = document.getElementById("mainCard");
const botaoNao = document.getElementById("no");


// Função para mover o elemento aleatoriamente
function moverAleatoriamente(){

// Obtenha a largura e a altura da tela do navegador
var alturaNavegador = window.innerHeight - elemento.clientHeight;
var larguraNavegador = window.innerWidth - elemento.clientWidth;

// Gere valores aleatórios para a posição X e Y dentro dos limites da tela

var numAleatorio = Math.random();

var novaPosicaoEsquerda = numAleatorio * larguraNavegador;
var novaPosicaoy = numAleatorio * alturaNavegador;
var novaPosicaoDireita = numAleatorio * larguraNavegador;

// Atribua as novas posições ao elemento usando a propriedade 'left' e 'top'
elemento.style.left = `${novaPosicaoEsquerda}px`;
elemento.style.top = `${novaPosicaoy}px`;
elemento.style.right = `${novaPosicaoDireita}px`;

};



// APARECENDO GIF 
function obg(){
    
   var obrigado = document.getElementById("obrigado");

   var imagem = document.createElement('img');
   imagem.src = "imgs/neima.gif";
   imagem.style.width = "300px";
   imagem.style.marginTop = "30%";
   imagem.style.borderRadius = "15px";
   

   obrigado.appendChild(imagem);
};







