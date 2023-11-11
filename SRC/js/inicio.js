document.addEventListener("DOMContentLoaded", function() {
    var inputBusca = document.getElementById("input_busca");

    inputBusca.addEventListener("input", function() {
        var termoBusca = inputBusca.value.toLowerCase();
        var elementosH3 = document.querySelectorAll(".eletronicos h3");

        elementosH3.forEach(function(elementoH3) {
            var textoH3 = elementoH3.textContent.toLowerCase();
            var corresponde = textoH3.includes(termoBusca);

            // Oculta ou destaca o elemento com base na correspondência
            elementoH3.closest(".eletronicos").style.display = corresponde ? "block" : "none";
        });
    });
});
