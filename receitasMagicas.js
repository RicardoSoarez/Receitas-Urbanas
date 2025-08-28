async function carregarReceitas() {
  const resposta = await fetch('http://localhost:3000/receitas');
  receitas = await resposta.json();
  console.log("Receitas carregadas:", receitas);
  // Agora pode chamar suas funções normalmente
  gerarCatalogo();
  // ...outras funções que usam receitas
}

let receitas = [];
carregarReceitas();
let userLikedRecipes = [];

// POST - Adicionar nova receita
async function adicionarReceita(novaReceita) {
  const resposta = await fetch('http://localhost:3000/receitas', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(novaReceita)
  });
  const dados = await resposta.json();
  return dados;
}

// PUT - Atualizar receita existente
async function atualizarReceita(id, receitaAtualizada) {
  const resposta = await fetch(`http://localhost:3000/receitas/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(receitaAtualizada)
  });
  const dados = await resposta.json();
  return dados;
}

// DELETE - Remover receita
async function removerReceita(id) {
  await fetch(`http://localhost:3000/receitas/${id}`, {
    method: 'DELETE'
  });
}

/**
 * Carrega a lista de receitas que o usuario atual curtiu do localStorage.
 * @returns {void}
 */
function loadUserLikedRecipes() {
    const liked = localStorage.getItem('userLikedRecipes');
    if (liked) {
        userLikedRecipes = JSON.parse(liked);
        console.log("Receitas curtidas pelo utilizador carregadas:", userLikedRecipes);
    } else {
        console.log("Nenhuma receita curtida pelo utilizador encontrada no localStorage.");
    }
}

function saveUserLikedRecipes() {
    localStorage.setItem('userLikedRecipes', JSON.stringify(userLikedRecipes));
    console.log("Receitas curtidas pelo utilizador salvas:", userLikedRecipes);
}

function initializeGlobalRecipeCounts() {
    const globalCurtidasSalvas = JSON.parse(localStorage.getItem("curtidasReceitas")) || {};
    receitas.forEach(receita => {
        const key = `curtidas_${receita.id}`;
        receita.curtidas = globalCurtidasSalvas[key] || 0;
    });
    console.log("Contagens globais de curtidas inicializadas:", receitas.map(r => ({ id: r.id, curtidas: r.curtidas })));
}


function detectarCategoriaDaPagina() {
  const nomeArquivo = window.location.pathname.split("/").pop().toLowerCase();

  if (nomeArquivo.includes("sos")) return "SOS";
  if (nomeArquivo.includes("fitnes")) return "Fitnes";
  if (nomeArquivo.includes("desafio")) return "Desafios";
  if (nomeArquivo.includes("sobremesa")) return "Sobremesas";
  if (nomeArquivo.includes("drinks")) return "Drinks";
  if (nomeArquivo.includes("massas")) return "Massas";

  return null; // se não for página específica, mostra tudo
}
function gerarCatalogo() {
  const container = document.getElementById("catalogo-receitas");
    if (!container) {
        console.error("Erro: Contêiner 'catalogo-receitas' não encontrado no DOM.");
        return;
    }
    container.innerHTML = ""; // Limpa o conteúdo existente do contêiner.

    // Garante que as contagens globais de curtidas estejam atualizadas no array 'receitas'
    initializeGlobalRecipeCounts();

  const categoriaAtual = detectarCategoriaDaPagina();
  console.log("Categoria da página detetada:", categoriaAtual);

  let receitasFiltradas = [];
    if (categoriaAtual) {
        receitasFiltradas = receitas.filter(r => r.categoria === categoriaAtual);
    } else {
        receitasFiltradas = [...receitas]; // Se não houver categoria específica, mostra todas
    }
    console.log("Receitas filtradas para exibição:", receitasFiltradas.length);

  // Agrupar por tipo
  const tipos = [...new Set(receitasFiltradas.map(r => r.tipo))];
  console.log("Tipos de receitas a serem agrupados:", tipos);

  tipos.forEach(tipo => {
        const titulo = document.createElement("h2");
        titulo.textContent = tipo;
        titulo.classList.add("text-2xl", "font-bold", "text-gray-700", "mt-8", "mb-4", "text-center");
        container.appendChild(titulo);

        const grupo = document.createElement("div");
        grupo.className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6";
        grupo.classList.add("container-group"); 
        receitasFiltradas
            .filter(r => r.tipo === tipo) // Filtra as receitas pelo tipo atual.
            .forEach(receita => {
                const card = document.createElement("div");
                card.className = "bg-white rounded-lg shadow-md overflow-hidden flex flex-col"; 
                card.classList.add("card"); 

                // Adiciona a contagem de curtidas diretamente no card para exibição inicial
                // e para ser atualizada após o clique no modal
                card.innerHTML = `
                    <img src="${receita.imagem}" alt="${receita.titulo}" class="w-full h-48 object-cover">
                    <div class="p-4 flex flex-col flex-grow">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">${receita.titulo}</h3>
                        <p class="text-gray-600 text-sm mb-4 flex-grow">${receita.descricao}</p>
                        <p class="curtidas-display text-gray-500 text-sm mb-2">Curtidas: ${receita.curtidas}</p>
                        <button onclick="mostrarDetalhes(${receita.id})" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300">Ver Receita</button>
                    </div>
                `;
                grupo.appendChild(card); 
            });

        container.appendChild(grupo);
    });
}

/**
 * Função para exibir os detalhes de uma receita específica num modal.
 * Controla a lógica de curtir a receita apenas uma vez por utilizador.
 * @param {number} id 
 */
function mostrarDetalhes(id) {
    id = Number(id); // Força o ID para número
    const receita = receitas.find(r => r.id === id); // Encontra a receita pelo ID.
    if (!receita) {
        console.error("Erro: Receita não encontrada para o ID:", id);
        return; // Retorna se a receita não for encontrada.
    }
    console.log("Abrindo modal para receita:", receita.titulo);

    // Obtenção dos elementos do modal
    const modalTitulo = document.getElementById("modal-titulo");
    const modalDescricao = document.getElementById("modal-descricao");
    const modalCategoria = document.getElementById("modal-categoria");
    const modalImagem = document.getElementById("modal-imagem");
    const listaIngredientes = document.getElementById("modal-ingredientes");
    const listaPreparo = document.getElementById("modal-preparo");
    const curtirBtn = document.getElementById("btCurtir");
    const contador = document.getElementById("contador");
    const modalReceita = document.getElementById("modal-receita");

    // Verificação de existência dos elementos do modal
    if (!modalTitulo || !modalDescricao || !modalCategoria || !modalImagem ||
        !listaIngredientes || !listaPreparo || !curtirBtn || !contador || !modalReceita) {
        console.error("Erro: Um ou mais elementos do modal não foram encontrados no DOM.");
        return;
    }

    // Atualiza os elementos do modal com as informações da receita.
    modalTitulo.textContent = receita.titulo;
    modalDescricao.textContent = receita.descricao;
    modalCategoria.textContent = `Categoria: ${receita.categoria}`;
    modalImagem.src = receita.imagem;
    modalImagem.alt = receita.titulo;

    // Preenche a lista de ingredientes.
    listaIngredientes.innerHTML = ""; 
    receita.ingredientes.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        listaIngredientes.appendChild(li);
    });

    // Preenche a lista de passos de preparo.
    listaPreparo.innerHTML = ""; 
    receita.preparo.forEach(passo => {
        const li = document.createElement("li");
        li.textContent = passo;
        listaPreparo.appendChild(li);
    });

    // Lógica para o botão de curtir e persistência no Armazenamento Local.
    const globalCurtidasKey = `curtidas_${id}`; 
    const globalCurtidasSalvas = JSON.parse(localStorage.getItem("curtidasReceitas")) || {};

    // Atualiza o contador no modal com a contagem global salva para esta receita.
    contador.textContent = globalCurtidasSalvas[globalCurtidasKey] || 0;
    console.log(`Receita ID ${id} - Contagem global inicial no modal: ${contador.textContent}`);

    
curtirBtn.disabled = false; // Garante que o botão comece ativado
curtirBtn.classList.remove("curtido");
curtirBtn.innerHTML = ''; 
const heartIconHTML = '<i class="fas fa-heart"></i>';
    const heartEmojiFallback = '❤️'; // Emoji Unicode como fallback visual se o Font Awesome não renderizar

    
    const iconContainer = document.createElement('span'); 

    let finalHeartContent;
    
    if (document.head.querySelector('link[href*="font-awesome"]')) {
        finalHeartContent = heartIconHTML;
    } else {
        finalHeartContent = heartEmojiFallback;
    }


    
    const textNode = document.createTextNode(` Curtir (${receita.curtidas})`); 

    // Adiciona o emoji e o nó de texto ao botão
    curtirBtn.innerHTML = finalHeartContent;
    curtirBtn.appendChild(textNode); // Adiciona o nó de texto


    // Verifica se o utilizador atual já curtiu esta receita.
    const hasUserLiked = userLikedRecipes.includes(id);
    console.log(`Receita ID ${id} - Utilizador já curtiu? ${hasUserLiked}`);

    if (hasUserLiked) {
        curtirBtn.classList.add("curtido");
        textNode.textContent = ` Curtido (${receita.curtidas})`; // Atualiza o texto para estado "curtido"
        curtirBtn.disabled = true; // Desabilita o botão se já foi curtido por este utilizador.
        console.log(`Receita ID ${id}: Já curtida por este utilizador. Botão desativado.`);
    } else {
        console.log(`Receita ID ${id}: Não curtida por este utilizador. Botão ativado.`);
    }

    
    curtirBtn.onclick = () => {
        console.log(`Botão Curtir clicado para Receita ID: ${id}`);

        // Previne múltiplas curtidas do mesmo utilizador (verificação de segurança, mesmo com botão desativado).
        if (userLikedRecipes.includes(id)) {
            console.log("Tentativa de curtir receita já curtida por este utilizador. Ação bloqueada.");
            return;
        }

        
        let currentGlobalCount = (globalCurtidasSalvas[globalCurtidasKey] || 0);
        currentGlobalCount++;
        globalCurtidasSalvas[globalCurtidasKey] = currentGlobalCount;
        localStorage.setItem("curtidasReceitas", JSON.stringify(globalCurtidasSalvas));
        console.log(`Contagem global de curtidas para ID ${id} atualizada para: ${currentGlobalCount}`);

       
        userLikedRecipes.push(id);
        saveUserLikedRecipes();
       
        contador.textContent = currentGlobalCount;
        curtirBtn.classList.add("curtido"); 
        textNode.textContent = ` Curtido (${currentGlobalCount})`;
        curtirBtn.disabled = true; 
        console.log(`Receita ID ${id} curtida com sucesso! Botão desativado.`);

      
        const receitaNoArray = receitas.find(r => r.id === id);
        if (receitaNoArray) {
            receitaNoArray.curtidas = currentGlobalCount;
            console.log(`Receita ID ${id} no array 'receitas' atualizada.`);
        }

        // 5. Opcional: Atualiza a contagem de curtidas diretamente no card visível (fora do modal).
        const cardElement = document.querySelector(`.card button[onclick="mostrarDetalhes(${id})"]`);
        if (cardElement) {
            const curtidasDisplay = cardElement.closest('.card').querySelector('.curtidas-display');
            if (curtidasDisplay) {
                curtidasDisplay.textContent = `Curtidas: ${currentGlobalCount}`;
                console.log(`Contagem de curtidas no card principal para ID ${id} atualizada.`);
            }
        }
    };

    modalReceita.style.display = "flex";
    console.log("Modal exibido.");
}

function fecharModal() {
    const modalReceita = document.getElementById("modal-receita");
    if (modalReceita) {
        modalReceita.style.display = "none";
        console.log("Modal ocultado.");
    }
}

// Garante que as funções de inicialização sejam executadas após o carregamento completo da janela.
window.onload = () => {
    console.log("Página carregada. Iniciando...");
    loadUserLikedRecipes();
    carregarReceitas();
}; // Gera o catálogo de receitas com as contagens atualizadas.
