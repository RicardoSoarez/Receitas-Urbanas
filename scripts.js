
//esse código é responsável por gerenciar as abas do site sobre, o formulário de contato e a funcionalidade de receita aleatória.
function openTab(evt, tabName) {

    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }


    const tabButtons = document.getElementsByClassName("tab-button");
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].className = tabButtons[i].className.replace(" active", "");
    }

  
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

const contatoForm = document.getElementById('contatoForm');
if (contatoForm) {
    contatoForm.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Mensagem enviada com sucesso!');
    });
}

// Código para a funcionalidade de receita aleatória
// Exibe uma receita aleatória ao clicar no botão "Me surpreenda!"  
const receitas = [
  { titulo: "Panqueca de Aveia", descricao: "Misture 2 ovos, 3 colheres de aveia e frite em fogo médio." },
  { titulo: "Arroz Cremoso", descricao: "Refogue alho, adicione arroz cozido e creme de leite. Misture bem." },
  { titulo: "Tapioca Doce", descricao: "Goma de tapioca + leite condensado + coco ralado. Só montar e aquecer." },
  { titulo: "Omelete de Forno", descricao: "Misture ovos com legumes e leve ao forno por 20 min." },
  { titulo: "Miojo Gourmet", descricao: "Prepare o miojo e adicione queijo, tomate e orégano." }
];

const btn = document.getElementById("surpresaBtn");
const popup = document.getElementById("popupReceita");
const fechar = document.getElementById("fecharPopup");
const titulo = document.getElementById("receitaTitulo");
const descricao = document.getElementById("receitaDescricao");

function getDataHoje() {
  return new Date().toISOString().split("T")[0];
}

function getLimite() {
  const hoje = getDataHoje();
  const dados = JSON.parse(localStorage.getItem("receitaLimite")) || { data: "", clicks: 0 };

  if (dados.data !== hoje) {
    localStorage.setItem("receitaLimite", JSON.stringify({ data: hoje, clicks: 0 }));
    return 4;
  }

  return 4 - dados.clicks;
}

function aumentarClique() {
  const hoje = getDataHoje();
  const dados = JSON.parse(localStorage.getItem("receitaLimite")) || { data: "", clicks: 0 };
  const novosClicks = dados.data === hoje ? dados.clicks + 1 : 1;
  localStorage.setItem("receitaLimite", JSON.stringify({ data: hoje, clicks: novosClicks }));
}

btn.addEventListener("click", () => {
  const restante = getLimite();

  if (restante <= 0) {
    alert("Limite de 3 receitas por dia atingido. Volte amanhã!");
    return;
  }

  const sorteada = receitas[Math.floor(Math.random() * receitas.length)];
  titulo.textContent = sorteada.titulo;
  descricao.textContent = sorteada.descricao;
  popup.classList.remove("hidden");

  aumentarClique();
});

fechar.addEventListener("click", () => {
  popup.classList.add("hidden");
});
