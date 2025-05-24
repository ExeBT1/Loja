document.getElementById("form-produto").addEventListener("submit", function(event) {
    event.preventDefault();

    let nome = document.getElementById("nome-produto").value;
    let preco = document.getElementById("preco-produto").value;
    let imagem = document.getElementById("imagem-produto").value;

    let produtos = JSON.parse(localStorage.getItem("produtos")) || [];
    produtos.push({ nome, preco, imagem });

    localStorage.setItem("produtos", JSON.stringify(produtos));

    alert("Produto adicionado com sucesso!");
    document.getElementById("form-produto").reset();
});