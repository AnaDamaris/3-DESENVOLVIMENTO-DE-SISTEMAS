function adicionarCarrinho(nome, preco) {

    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    carrinho.push({
        nome: nome,
        preco: preco
    });

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    alert(nome + " adicionado ao carrinho!");
}

function mostrarCarrinho() {

    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    let lista = document.getElementById("listaCarrinho");
    let total = document.getElementById("total");

    if (!lista) return;

    lista.innerHTML = "";

    let soma = 0;

    carrinho.forEach((produto, indice) => {

        soma += produto.preco;

        lista.innerHTML += `
            <li>
                ${produto.nome} - R$ ${produto.preco.toFixed(2)}
                <button onclick="removerItem(${indice})">❌</button>
            </li>
        `;

    });

    total.innerHTML = "Total: R$ " + soma.toFixed(2);

}

function removerItem(indice){

    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    carrinho.splice(indice,1);

    localStorage.setItem("carrinho",JSON.stringify(carrinho));

    mostrarCarrinho();

}

mostrarCarrinho();