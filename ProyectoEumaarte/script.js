const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
    abrir.setAttribute("aria-expanded", "true");
});

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
    abrir.setAttribute("aria-expanded", "false");
});

document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && !abrir.contains(e.target)) {
        nav.classList.remove("visible");
        abrir.setAttribute("aria-expanded", "false");
    }
});

function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);

    if (section.style.display === 'block') {
        section.style.display = 'none';
    } else {
        document.querySelectorAll('section.hidden').forEach(sec => {
            sec.style.display = 'none';
        });
        section.style.display = 'block';
    }
}
