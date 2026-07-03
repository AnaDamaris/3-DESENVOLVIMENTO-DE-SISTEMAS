// ==========================================
// CAFETERIA INCONFIDENTES
// script.js
// ==========================================

// Scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if(destino){
            destino.scrollIntoView({
                behavior:"smooth"
            });
        }
    });
});

// ================================
// BOTÃO VOLTAR AO TOPO
// ================================

const botaoTopo = document.createElement("div");

botaoTopo.classList.add("topo");

botaoTopo.innerHTML = "↑";

document.body.appendChild(botaoTopo);

window.addEventListener("scroll", ()=>{

    if(window.scrollY > 400){
        botaoTopo.style.display="flex";
    }else{
        botaoTopo.style.display="none";
    }

});

botaoTopo.addEventListener("click", ()=>{

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

botaoTopo.style.display="none";

// ================================
// ANIMAÇÃO DOS CARDS
// ================================

const cards = document.querySelectorAll(".card,.produto");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0px)";

        }

    });

});

cards.forEach(card=>{

    card.style.opacity="0";
    card.style.transform="translateY(40px)";
    card.style.transition=".8s";

    observer.observe(card);

});

// ================================
// VALIDAÇÃO DO CADASTRO
// ================================

const formulario = document.querySelector("form");

if(formulario){

formulario.addEventListener("submit",(e)=>{

e.preventDefault();

let nome=document.getElementById("nome");
let email=document.getElementById("email");
let senha=document.getElementById("senha");
let confirmar=document.getElementById("confirmar");

if(nome.value==""){

alert("Digite seu nome.");

nome.focus();

return;

}

if(email.value==""){

alert("Digite seu e-mail.");

email.focus();

return;

}

if(senha.value.length<6){

alert("A senha deve possuir no mínimo 6 caracteres.");

senha.focus();

return;

}

if(senha.value!=confirmar.value){

alert("As senhas não coincidem.");

confirmar.focus();

return;

}

alert("Cadastro realizado com sucesso!");

formulario.reset();

});

}

// ================================
// MÁSCARA TELEFONE
// ================================

const telefone=document.getElementById("telefone");

if(telefone){

telefone.addEventListener("input",(e)=>{

let valor=e.target.value.replace(/\D/g,'');

valor=valor.replace(/^(\d{2})(\d)/g,"($1) $2");

valor=valor.replace(/(\d)(\d{4})$/,"$1-$2");

e.target.value=valor;

});

}

// ================================
// MÁSCARA CPF
// ================================

const cpf=document.getElementById("cpf");

if(cpf){

cpf.addEventListener("input",(e)=>{

let valor=e.target.value.replace(/\D/g,'');

valor=valor.replace(/(\d{3})(\d)/,"$1.$2");

valor=valor.replace(/(\d{3})(\d)/,"$1.$2");

valor=valor.replace(/(\d{3})(\d{1,2})$/,"$1-$2");

e.target.value=valor;

});

}

// ================================
// MENU ATIVO
// ================================

const links=document.querySelectorAll("nav a");

links.forEach(link=>{

if(link.href===window.location.href){

link.style.color="#E9D5B5";

}

});

// ================================
// EFEITO HOVER NOS CARDS
// ================================

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px) scale(1.03)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px) scale(1)";

});

});

// ================================
// PRELOADER (opcional)
// ================================

window.addEventListener("load",()=>{

document.body.style.opacity="1";

});

document.body.style.opacity="0";

document.body.style.transition="opacity .8s";