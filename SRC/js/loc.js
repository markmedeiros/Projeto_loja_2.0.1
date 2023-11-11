function adicionarBairro() {
    var novoBairro = document.getElementById("inputBairro").value;
    var novoPreco = document.getElementById("inputPreco").value;

    if (novoBairro && novoPreco) {
        var lista = document.getElementById("bairro-lista");
        if (lista) {
            var novoItem = document.createElement("li");
            novoItem.textContent = `${novoBairro} - R$ ${novoPreco}`;
            lista.appendChild(novoItem);

            // Limpar os campos de input
            document.getElementById("inputBairro").value = "";
            document.getElementById("inputPreco").value = "";
        } else {
            console.error("Elemento 'ul' não encontrado.");
        }
    } else {
        alert("Nome do bairro e preço são obrigatórios!");
    }
}