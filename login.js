function cadastrar(){

    let usuario = {

        nome: document.getElementById("nomeCadastro").value,

        email: document.getElementById("emailCadastro").value,

        senha: document.getElementById("senhaCadastro").value

    };

    localStorage.setItem("usuario",JSON.stringify(usuario));

    alert("Cadastro realizado com sucesso!");

}

function login(){

    let email = document.getElementById("email").value;

    let senha = document.getElementById("senha").value;

    let usuario = JSON.parse(localStorage.getItem("usuario"));

    if(usuario == null){

        alert("Nenhum usuário cadastrado.");

        return;

    }

    if(email == usuario.email && senha == usuario.senha){

        alert("Login realizado com sucesso!");

        window.location.href="index.html";

    }else{

        alert("Email ou senha incorretos.");

    }

}