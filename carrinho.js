function carregarCarrinho() {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    let carrinhoContainer = document.getElementById("carrinho-itens");
    let totalPreco = 0;

    if (carrinho.length === 0) {
        carrinhoContainer.innerHTML = "<p>Seu carrinho está vazio.</p>";
        return;
    }

    carrinhoContainer.innerHTML = "<h2>Itens no Carrinho</h2>";

    carrinho.forEach((produto, index) => {
        totalPreco += parseFloat(produto.preco.replace(",", "."));
        carrinhoContainer.innerHTML += `
            <p>${produto.nome} - R$ ${produto.preco} 
            <button onclick="removerDoCarrinho(${index})">❌</button></p>
        `;
    });

    document.getElementById("total-preco").innerHTML = `<strong>Total: R$ ${totalPreco.toFixed(2)}</strong>`;
}

function removerDoCarrinho(index) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    carrinho.splice(index, 1);

    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    carregarCarrinho();
}

window.onload = carregarCarrinho;