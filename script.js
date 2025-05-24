document.getElementById("menu-toggle").addEventListener("click", () => {
    document.getElementById("menu").classList.add("open");
});

document.getElementById("close-menu").addEventListener("click", () => {
    document.getElementById("menu").classList.remove("open");
});

function filtrarCategoria(categoria) {
    const produtos = document.querySelectorAll(".produto");
    produtos.forEach(produto => {
        produto.style.display = produto.dataset.categoria === categoria ? "block" : "none";
    });
}

function filtrarPreco() {
    const precoMax = document.getElementById("preco-filter").value;
    const produtos = document.querySelectorAll(".produto");
    produtos.forEach(produto => {
        const precoProduto = parseFloat(produto.dataset.preco);
        produto.style.display = precoProduto <= precoMax ? "block" : "none";
    });
}

function carregarProdutos() {
    const produtos = [
        { nome: "Camiseta Techwear", preco: 89.90, imagem: "techwear.jpg", categoria: "camisetas" },
        { nome: "Calça Jogger", preco: 129.90, imagem: "jogger.jpg", categoria: "calças" },
        { nome: "Mochila Estilosa", preco: 199.90, imagem: "mochila.jpg", categoria: "acessorios" }
    ];

    const container = document.getElementById("lista-produtos");

    produtos.forEach(produto => {
        let card = document.createElement("div");
        card.classList.add("produto");
        card.dataset.categoria = produto.categoria;
        card.dataset.preco = produto.preco;
        card.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h2>${produto.nome}</h2>
            <p>R$ ${produto.preco.toFixed(2)}</p>
            <button onclick="adicionarAoCarrinho('${produto.nome}', '${produto.preco}')">Comprar</button>
        `;
        container.appendChild(card);
    });
}

function adicionarAoCarrinho(nome, preco) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    carrinho.push({ nome, preco });

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    alert(nome + " foi adicionado ao carrinho!");
}

window.onload = carregarProdutos;