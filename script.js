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