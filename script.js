// script.js
document.addEventListener("DOMContentLoaded", function () {
  const collapsibleHeaders = document.querySelectorAll(".collapsible");

  collapsibleHeaders.forEach((header) => {
    const icon = header.querySelector(".icon");
    const content = header.nextElementSibling;

    header.addEventListener("click", () => {
      // Alterna entre exibir e ocultar a seção
      content.style.display =
        content.style.display === "none" ? "block" : "none";

      // Alterna o ícone entre ➖ e ➕
      icon.textContent = content.style.display === "none" ? "➕" : "➖";
    });
  });
});
