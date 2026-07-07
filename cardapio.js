const produtos = [

    {
    nome:"Espresso",
    preco:6,
    imagem:"https://images.unsplash.com/photo-1511920170033-f8396924c348?w=500"
    },
    
    {
    nome:"Cappuccino",
    preco:12,
    imagem:"https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500"
    },
    
    {
    nome:"Latte",
    preco:14,
    imagem:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500"
    },
    
    {
    nome:"Pão de Queijo",
    preco:5,
    imagem:"https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?w=500"
    },
    
    {
    nome:"Cookie",
    preco:8,
    imagem:"https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500"
    },
    
    {
    nome:"Brownie",
    preco:10,
    imagem:"https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500"
    }
    
    ];
    
    const div = document.getElementById("produtos");
    
    produtos.forEach(produto=>{
    
    div.innerHTML += `
    
    <div class="card">
    
    <img src="${produto.imagem}">
    
    <h3>${produto.nome}</h3>
    
    <p>R$ ${produto.preco.toFixed(2)}</p>
    
    <button onclick="adicionarCarrinho('${produto.nome}',${produto.preco})">
    
    Adicionar
    
    </button>
    
    </div>
    
    `;
    
    });