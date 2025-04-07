const boton = document.getElementById("modo-btn");
const body = document.body;

// Verificar si hay un modo guardado en LocalStorage
if (localStorage.getItem("modo") === "oscuro") {
    body.classList.add("dark-mode");
    boton.textContent = "☀️ Modo Claro";
}

// Evento para cambiar el modo
boton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Guardar la preferencia del usuario
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("modo", "oscuro");
        boton.textContent = "☀️ Modo Claro";
    } else {
        localStorage.setItem("modo", "claro");
        boton.textContent = "🌙 Modo Oscuro";
    }
});