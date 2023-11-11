const d1 = document.querySelectorAll("#d1");
const img_d = document.querySelectorAll("#img_d");
const div_img_d = document.querySelectorAll("#div_img_d");

// Adicionar classe ao clicar em d1
d1.forEach((element, index) => {
    element.addEventListener("click", () => {
        img_d[index].classList.toggle("img_d_js");
    });
});
// Remover classe ao clicar fora de img_d
document.addEventListener("click", (event) => {
    if (!Array.from(img_d).some(img => img.contains(event.target)) && !Array.from(d1).some(el => el.contains(event.target))) {
        img_d.forEach(img => {
            img.classList.remove("img_d_js");
        });
    }
});

// Remover classe ao clicar em div_img_d
div_img_d.forEach(div => {
    div.addEventListener("click", () => {
        img_d.forEach(img => {
            img.classList.remove("img_d_js");
        });
    });
});

// Adicionar classe ao clicar em d1 permanentemente
d1.forEach(element => {
    element.addEventListener("click", () => {
        element.classList.add("d1_js");
    });
});
