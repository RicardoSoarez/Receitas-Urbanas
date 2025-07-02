

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
// Verifica se o formulário de contato realmente existe nesta página
if (contatoForm) {
    contatoForm.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Mensagem enviada com sucesso!');
    });
}

const receitas = [
    {
        id: 1,
        titulo: "Chá Gelado com Limão e Mel",
        categoria: "SOS",
        descricao: "Uma bebida simples e fácil de fazer para dias quentes",
        curtidas: 0,
        destaque: false
    },
    {
        id: 2,
        titulo: "Leite Cremoso com Chocolate",
        categoria: "SOS",
        descricao: "Excelente opção para fazer a alegria da criançada",
        curtidas: 0,
        destaque: false
    },

   {
        id: 3,
        titulo: "Suco de Frutas Express",
        categoria: "SOS",
        descricao: "rápido e funcional",
        curtidas: 0,
        destaque: false
    },

    {
        id: 4,
        titulo: "Omelete Nutritiva",
        categoria: "SOS",
        descricao: "O básico que funciona",
        curtidas: 0,
        destaque: false
    },

    {
        id: 5,
        titulo: "Macarrão de Panela de Pressão",
        categoria: "SOS",
        descricao: "Celeridade e sem louça para lavar",
        curtidas: 0,
        destaque: false
    },

    {
        id: 6,
        titulo: "Salada Completa com Atum",
        categoria: "SOS",
        descricao: "Rápida, fácil e nutritiva",
        curtidas: 0,
        destaque: false
},

{
    id: 7,
    titulo: "Brigadeiro de Micro-ondas",
    categoria: "SOS",
    descricao: "Simples e pratico",
    curtidas: 0,
    destaque: false
},

{
    id: 8,
    titulo: "Banana com Canela na Airfryer",
    categoria: "SOS",
    descricao: "Uma opção que encaixa até se você estiver de dieta",
    curtidas: 0,
    destaque: false
},

{
    id: 9,
    titulo: "Mousse Rápido de Maracujá",
    categoria: "SOS",
    descricao: "Um favorito da família brasileira, tinha que ter sua versão prática não é mesmo",
    curtidas: 0,
    destaque: false
},

{
    id: 10,
    titulo: "Daiquiri Black",
    categoria: "Desafios",
    descricao: "Receita especial do Black Daiquiri, feito com carvão ativado e blueberry",
    curtidas: 0,
    destaque: false
},

{
    id: 11,
    titulo: "Margarita",
    categoria: "Desafios",
    descricao: "Drink italiano preparado com gin, campari e vermute tinto",
    curtidas: 0,
    destaque: false
},

{
    id: 12,
    titulo: "Negroni",
    categoria: "Desafios",
    descricao: "Coquetel mexicano feito com tequila, suco de limão e licor de laranja",
    curtidas: 0,
    destaque: false
},

{
    id: 13,
    titulo: "Mojito Tradicional",
    categoria: "Desafios",
    descricao: "Clássico drink cubano com rum, hortelã, limão e água com gás",
    curtidas: 0,
    destaque: false
},

{
    id: 14,
    titulo: "Ravioli",
    categoria: "Desafios",
    descricao: "Massa recheada versátil, pode ser preparada com queijos, carnes ou vegetais",
    curtidas: 0,
    destaque: false
},

{
    id: 15,
    titulo: "Capeletti in Brodo",
    categoria: "Desafios",
    descricao: "Sopa italiana com capeletti recheado de carne em caldo saboroso",
    curtidas: 0,
    destaque: false
},

{
    id: 16,
    titulo: "Conchiglione de Espinafre e Ricota",
    categoria: "Desafios",
    descricao: "Massa recheada com ricota e espinafre, gratinada com molho branco",
    curtidas: 0,
    destaque: false
},

{
    id: 17,
    titulo: "Bombom de Morango",
    categoria: "Desafios",
    descricao: "Sobremesa gelada com combinação perfeita de morango e chocolate",
    curtidas: 0,
    destaque: false
},

{
    id: 18,
    titulo: "Manjar de Coco",
    categoria: "Desafios",
    descricao: "Doce cremoso de coco com cobertura de ameixas",
    curtidas: 0,
    destaque: false
},

{
    id: 19,
    titulo: "Cheesecake de Morango",
    categoria: "Desafios",
    descricao: "Clássica cheesecake com cobertura de morango, preparada de forma rápida",
    curtidas: 0,
    destaque: false
},

{
    id: 20,
    titulo: "Suco Detox Refrescante",
    categoria: "Fitnes",
    descricao: "Uma bebida gelada e refrescante",
    curtidas: 0,
    destaque: false
},

{
    id: 21,
    titulo: "Smoothie Proteico de Banana e Cacau",
    categoria: "Fitnes",
    descricao: "forma prática e rápida de acelerar o ganho de massa muscular",
    curtidas: 0,
    destaque: false
},

{
    id: 22,
    titulo: "Limonada de Hibisco com Gengibre",
    categoria: "Fitnes",
    descricao: "limonada, boa, gostosa e geladinha",
    curtidas: 0,
    destaque: false
},

{
    id: 23,
    titulo: "Frango Grelhado com Quinoa e Legumes",
    categoria: "Fitnes",
    descricao: "O básico que funciona",
    curtidas: 0,
    destaque: false
},

{
    id: 24,
    titulo: "Omelete de Espinafre com Queijo Branco",
    categoria: "Fitnes",
    descricao: "Cansado de ovos cozidos? eu também! pega essa receita da casa",
    curtidas: 0,
    destaque: false
},

{
    id: 25,
    titulo: "Salada Proteica de Atum e Grão-de-Bico",
    categoria: "Fitnes",
    descricao: "eei, ei, ei! nada de julgar o livro pela capa, hein!!!",
    curtidas: 0,
    destaque: false
},

{
    id: 26,
    titulo: "Mousse de Chocolate Fit",
    categoria: "Fitnes",
    descricao: "Chocolate e Fit na mesma frase parece até menttira ne?!",
    curtidas: 0,
    destaque: false
},

{
    id: 27,
    titulo: "Pudim de Chia com Frutas",
    categoria: "Fitnes",
    descricao: "PU-DIM!",
    curtidas: 0,
    destaque: false
},

{
    id: 28,
    titulo: "Sorvete de Banana com Amendoim",
    categoria: "Fitnes",
    descricao: "Sorvete de Banana com Amendoim",
    curtidas: 0,
    destaque: false
}

];
document.addEventListener('DOMContentLoaded', () => {
    const curtirBtn = document.getElementById('btCurtir');
    const contador = document.getElementById('contador');

    const receitaId = window.location.pathname; // usa o caminho da página como chave única
    const curtidasSalvas = JSON.parse(localStorage.getItem("curtidasReceitas")) || {};

    
    if (curtidasSalvas[receitaId]) {
        contador.textContent = curtidasSalvas[receitaId];
    }

    curtirBtn.addEventListener('click', () => {
        const atual = parseInt(contador.textContent);
        const novoValor = atual + 1;
        contador.textContent = novoValor;

        curtidasSalvas[receitaId] = novoValor;
        localStorage.setItem("curtidasReceitas", JSON.stringify(curtidasSalvas));

        curtirBtn.classList.add('curtido');
    });
});

