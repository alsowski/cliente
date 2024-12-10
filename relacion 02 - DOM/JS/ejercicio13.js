function toggleSpoiler(contentId, buttonId) {
    let content = document.getElementById(contentId);
    let button = document.getElementById(buttonId);
    if (content.style.display === "none") {
        content.style.display = "block";
        button.textContent = "Ocultar";
    } else {
        content.style.display = "none";
        button.textContent = "Mostrar";
    }
}