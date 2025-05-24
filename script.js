}async function carregarProdutos() {
    const resposta = await fetch("produtos.json");
    const produtos = await resposta.json();
    const container = document.getElementById("lista-produtos");

    produtos.forEach(produto => {
        let card = document.createElement("div");
        card.classList.add("produto");
        card.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h2>${produto.nome}</h2>
            <p>R$ ${produto.preco}</p>
            <button onclick="adicionarAoCarrinho('${produto.nome}')">Comprar</button>
        `;
        container.appendChild(card);
    });
}

function adicionarAoCarrinho(produto) {
    alert(produto + " foi adicionado ao carrinho!");
}

carregarProdutos();