// script_mobile.js

document.addEventListener("DOMContentLoaded", () => {
  const game = document.getElementById("game");
  const dino = document.getElementById("dino");
  let isJumping = false;

  // --- Funções de Controle de Pulo (replicadas/adaptadas do seu código original) ---

  // Controla o fim da animação de pulo
  dino.addEventListener("animationend", (ev) => {
    if (ev.animationName === "jump") {
      // Retorna à animação de corrida
      dino.style.animation = "run 0.4s steps(3) infinite";
      isJumping = false;
    }
  });

  // Função para executar o pulo
  function doJump() {
    if (!isJumping) {
      isJumping = true;
      // Inicia a animação de pulo
      dino.style.animation = "jump 0.75s linear";
    }
  }

  // --- Criação do Botão de Pulo ---

  const jumpButton = document.createElement("div");
  jumpButton.id = "mobile-jump-button";
  jumpButton.textContent = "PULAR";
  document.body.appendChild(jumpButton); // Adiciona o botão ao corpo

  // --- Adiciona o Event Listener para Pulo ---

  // Usa 'touchstart' para resposta mais rápida em dispositivos móveis
  jumpButton.addEventListener("touchstart", (e) => {
    e.preventDefault(); // Previne o comportamento padrão (como zoom)
    doJump();
  });

  // Adiciona 'mousedown' (e 'click' para fallback) para compatibilidade e testes
  jumpButton.addEventListener("mousedown", (e) => {
    e.preventDefault();
    doJump();
  });

  // Mantém o pulo por tecla Space para desktops
  document.addEventListener("keydown", (e) => {
    if (e.code === "Space") {
      doJump();
    }
  });
});
