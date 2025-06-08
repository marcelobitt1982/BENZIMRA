document.querySelector(".hamburger").addEventListener("click", function () {
    const menu = document.querySelector(".menu");
    // Alterna entre 'none' e 'block' corretamente
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
});

// Fechar o menu quando clicar fora dele
document.addEventListener("click", function(event) {
    const menu = document.querySelector(".menu");
    const hamburger = document.querySelector(".hamburger");
    
    if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
        menu.style.display = "none";
    }
});
