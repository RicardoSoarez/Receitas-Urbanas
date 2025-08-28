const API_BASE = 'http://localhost:3001';

// Funções para API
async function apiRequest(endpoint, options = {}) {
  try {
    const response = await fetch(`${API_BASE}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
}

// Funções específicas para receitas
async function getReceitas() {
  return await apiRequest('/receitas');
}

async function getReceitaById(id) {
  return await apiRequest(`/receitas/${id}`);
}

async function updateReceita(id, data) {
  return await apiRequest(`/receitas/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data)
  });
}

async function getCurtidas() {
  return await apiRequest('/curtidas');
}

async function createCurtida(data) {
  return await apiRequest('/curtidas', {
    method: 'POST',
    body: JSON.stringify(data)
  });
}

// Função para carregar receitas curtidas pelo usuário
async function loadUserLikedRecipes() {
  try {
    const userLikedRecipes = JSON.parse(localStorage.getItem('userLikedRecipes')) || [];
    console.log("Receitas curtidas pelo utilizador carregadas:", userLikedRecipes);
    return userLikedRecipes;
  } catch (error) {
    console.error("Erro ao carregar receitas curtidas:", error);
    return [];
  }
}

// Função para salvar receitas curtidas pelo usuário
function saveUserLikedRecipes(recipes) {
  localStorage.setItem('userLikedRecipes', JSON.stringify(recipes));
  console.log("Receitas curtidas pelo utilizador salvas:", recipes);
}

// Função para gerar catálogo
async function gerarCatalogo() {
  const container = document.getElementById("catalogo-receitas");
  if (!container) {
    console.error("Erro: Contêiner 'catalogo-receitas' não encontrado no DOM.");
    return;
  }
  
  container.innerHTML = "<p>Carregando receitas...</p>";
  
  try {
    const receitas = await getReceitas();
    const categoriaAtual = detectarCategoriaDaPagina();
    
    console.log("Categoria da página detectada:", categoriaAtual);
    
    let receitasFiltradas = categoriaAtual 
      ? receitas.filter(r => r.categoria === categoriaAtual)
      : receitas;
    
    console.log("Receitas filtradas para exibição:", receitasFiltradas.length);
    
    container.innerHTML = "";
    
    // Agrupar por tipo
    const tipos = [...new Set(receitasFiltradas.map(r => r.tipo))];
    console.log("Tipos de receitas a serem agrupados:", tipos);
    
    if (receitasFiltradas.length === 0) {
      container.innerHTML = "<p>Nenhuma receita encontrada para esta categoria.</p>";
      return;
    }
    
    tipos.forEach(tipo => {
      const titulo = document.createElement("h2");
      titulo.textContent = tipo;
      titulo.classList.add("text-2xl", "font-bold", "text-gray-700", "mt-8", "mb-4", "text-center");
      container.appendChild(titulo);
      
      const grupo = document.createElement("div");
      grupo.className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6";
      grupo.classList.add("container-group");
      
      receitasFiltradas
        .filter(r => r.tipo === tipo)
        .forEach(receita => {
          const card = document.createElement("div");
          card.className = "bg-white rounded-lg shadow-md overflow-hidden flex flex-col";
          card.classList.add("card");
          
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
  } catch (error) {
    console.error("Erro ao carregar receitas:", error);
    container.innerHTML = "<p>Erro ao carregar receitas. Tente novamente mais tarde.</p>";
  }
}

// Função para mostrar detalhes da receita
async function mostrarDetalhes(id) {
  try {
    const receita = await getReceitaById(id);
    console.log("Abrindo modal para receita:", receita.titulo);

    const modalReceita = document.getElementById("modal-receita");
    const titulo = document.getElementById("modal-titulo");
    const imagem = document.getElementById("modal-imagem");
    const descricao = document.getElementById("modal-descricao");
    const categoria = document.getElementById("modal-categoria");
    const ingredientes = document.getElementById("modal-ingredientes");
    const preparo = document.getElementById("modal-preparo");
    const contador = document.getElementById("contador");
    const curtirBtn = document.getElementById("btCurtir");

    // Preencher modal
    titulo.textContent = receita.titulo;
    imagem.src = receita.imagem;
    descricao.textContent = receita.descricao;
    categoria.textContent = receita.categoria;
    contador.textContent = receita.curtidas;

    // Ingredientes
    ingredientes.innerHTML = "";
    if (Array.isArray(receita.ingredientes)) {
      receita.ingredientes.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        ingredientes.appendChild(li);
      });
    } else if (typeof receita.ingredientes === "string") {
      const li = document.createElement("li");
      li.textContent = receita.ingredientes;
      ingredientes.appendChild(li);
    }

    // Modo de preparo
    preparo.innerHTML = "";
    if (Array.isArray(receita.preparo)) {
      receita.preparo.forEach(passo => {
        const li = document.createElement("li");
        li.textContent = passo;
        preparo.appendChild(li);
      });
    } else if (typeof receita.preparo === "string") {
      const li = document.createElement("li");
      li.textContent = receita.preparo;
      preparo.appendChild(li);
    }

    // Controle do botão Curtir
    const userLikedRecipes = await loadUserLikedRecipes();
    const hasUserLiked = userLikedRecipes.includes(id);

    if (hasUserLiked) {
      curtirBtn.classList.add("curtido");
      curtirBtn.textContent = ` Curtido (${receita.curtidas})`;
      curtirBtn.disabled = true;
    } else {
      curtirBtn.classList.remove("curtido");
      curtirBtn.textContent = ` Curtir ❤️`;
      curtirBtn.disabled = false;
    }

    curtirBtn.onclick = async () => {
      if (userLikedRecipes.includes(id)) {
        console.log("Tentativa de curtir receita já curtida por este usuário.");
        return;
      }

      try {
        const updatedReceita = { ...receita, curtidas: receita.curtidas + 1 };
        await updateReceita(id, updatedReceita);

        userLikedRecipes.push(id);
        saveUserLikedRecipes(userLikedRecipes);

        await createCurtida({
          receitaId: id,
          usuarioId: obterUsuarioAtual(), // ainda precisa implementar
          data: new Date().toISOString()
        });

        contador.textContent = updatedReceita.curtidas;
        curtirBtn.classList.add("curtido");
        curtirBtn.textContent = ` Curtido (${updatedReceita.curtidas})`;
        curtirBtn.disabled = true;

        const cardElement = document.querySelector(`.card button[onclick="mostrarDetalhes(${id})"]`);
        if (cardElement) {
          const curtidasDisplay = cardElement.closest('.card').querySelector('.curtidas-display');
          if (curtidasDisplay) {
            curtidasDisplay.textContent = `Curtidas: ${updatedReceita.curtidas}`;
          }
        }
      } catch (error) {
        console.error("Erro ao curtir receita:", error);
        alert("Erro ao curtir receita. Tente novamente.");
      }
    };

    modalReceita.style.display = "flex";

  } catch (error) {
    console.error("Erro ao carregar detalhes da receita:", error);
    alert("Erro ao carregar receita. Tente novamente.");
  }
}

// Função auxiliar para detectar categoria (mantida do original)
function detectarCategoriaDaPagina() {
  const nomeArquivo = window.location.pathname.split("/").pop().toLowerCase();
  if (nomeArquivo.includes("sos")) return "SOS";
  if (nomeArquivo.includes("fitnes")) return "Fitnes";
  if (nomeArquivo.includes("desafio")) return "Desafios";
  return null;
}

function fecharModal() {
  const modal = document.getElementById("modalReceita");
  if (modal) modal.style.display = "none";
}

function fecharModal() {
  const modal = document.getElementById("modal-receita");
  if (modal) modal.style.display = "none";
}

// Inicialização
window.onload = async () => {
  console.log("Página carregada. Iniciando...");
  await gerarCatalogo();
};