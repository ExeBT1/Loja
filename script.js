async function carregarProdutos() {
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
            <button onclick="adicionarAoCarrinho('${produto.nome}')">Comprar</button>
        `;
        container.appendChild(card);
    });
}

function buscarProduto() {
    let input = document.getElementById('search').value.toLowerCase();
    let produtos = document.querySelectorAll('.produto');

    produtos.forEach(produto => {
        let nome = produto.querySelector('h2').textContent.toLowerCase();
        produto.style.display = nome.includes(input) ? 'block' : 'none';
    });
}

function adicionarAoCarrinho(produto) {
    alert(produto + " foi adicionado ao carrinho!");
}

carregarProdutos();