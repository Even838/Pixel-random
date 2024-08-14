// Obtém o elemento canvas do HTML
const canvas = document.getElementById("tela");

// Define o tamanho do canvas (largura e altura)
const largura = 300;
const altura = 200;
canvas.width = largura;
canvas.height = altura;

// Obtém o contexto 2D do canvas
const ctx = canvas.getContext("2d");

// Função para gerar uma cor aleatória (preto ou branco)
function corAleatoria() {
  return Math.random() < 0.5 ? "black" : "white";
}

// Função para desenhar um pixel na posição aleatória com a cor escolhida
function desenharPixel() {
  for (let i = 0; i < 9999; i++) {
    const x = Math.floor(Math.random() * largura);
    const y = Math.floor(Math.random() * altura);
    const corPixel = corAleatoria();
    ctx.fillStyle = corPixel;
    ctx.fillRect(x, y, 1, 1);
  }
}

// Event listener para o botão "gerar"
const botaoGerar = document.getElementById("gol");
botaoGerar.addEventListener("click", desenharPixel);
