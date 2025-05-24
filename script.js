let carrinho = [];

function carregarProdutos() {
    const produtos = [
        { nome: "Camiseta Geométrica", preco: "59,90", imagem: "camiseta1.jpg" },
        { nome: "Camiseta Neon Tech", preco: "69,90", imagem: "camiseta2.jpg" },
        { nome: "Camiseta Minimalista", preco: "49,90", imagem: "camiseta3.jpg" },
        { nome: "Camiseta Holográfica", preco: "79,90", imagem: "camiseta4.jpg" },
        { nome: "Camiseta Vintage", preco: "54,90", imagem: "camiseta5.jpg" },
        { nome: "Camiseta Arte Urbana", preco: "64,90", imagem: "camiseta6.jpg" },
        { nome: "Camiseta 3D", preco: "74,90", imagem: "camiseta7.jpg" },
        { nome: "Camiseta Personalizável", preco: "99,90", imagem: "camiseta8.jpg" },
        { nome: "Camiseta Sustentável", preco: "79,90", imagem: "camiseta9.jpg" },
        { nome: "Camiseta Techwear", preco: "89,90", imagem: "camiseta10.jpg" }
    ];

    const container = document.getElementById("lista-produtos");

    produtos.forEach(produto => {
        let card = document.createElement("div");
        card.classList.add("produto");
        card.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h2>${produto.nome}</h2>
            <p>R$ ${produto.preco}</p>
            <button onclick="adicionarAoCarrinho('${produto.nome}', '${produto.preco}')">Comprar</button>
        `;
        container.appendChild(card);
    });
}

function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });

    atualizarCarrinho();
}

function atualizarCarrinho() {
    let carrinhoContainer = document.getElementById("carrinho");
    carrinhoContainer.innerHTML = "<h2>Carrinho 🛒</h2>";

    if (carrinho.length === 0) {
        carrinhoContainer.innerHTML += "<p>Seu carrinho está vazio.</p>";
        return;
    }

    carrinho.forEach((produto, index) => {
        carrinhoContainer.innerHTML += `
            <p>${produto.nome} - R$ ${produto.preco} <button onclick="removerDoCarrinho(${index})">❌</button></p>
        `;
    });

    let total = carrinho.reduce((acc, produto) => acc + parseFloat(produto.preco.replace(",", ".")), 0);
    carrinhoContainer.innerHTML += `<p><strong>Total: R$ ${total.toFixed(2)}</strong></p>`;
}

function removerDoCarrinho(index) {
    carrinho.splice(index, 1);
    atualizarCarrinho();
}

carregarProdutos();