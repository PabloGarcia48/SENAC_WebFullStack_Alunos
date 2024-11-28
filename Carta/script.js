const button = document.getElementById("animateButton");
const flap = document.querySelector(".flap");
const message = document.querySelector(".message");

button.addEventListener("click", () => {
  // Adiciona a classe para animar a aba
  flap.classList.add("open");
  // Adiciona a classe para tornar a mensagem visível
  message.classList.add("visible");
});
