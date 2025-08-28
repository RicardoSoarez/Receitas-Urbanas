const API_BASE = 'http://localhost:3001';

/* ========== CORE API ========== */
async function apiRequest(endpoint, options = {}) {
  const res = await fetch(`${API_BASE}${endpoint}`, {
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
    ...options
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} ao acessar ${endpoint}`);
  return res.json();
}

async function getReceitas() {
  return apiRequest('/receitas');
}

async function getReceitaById(id) {
  return apiRequest(`/receitas/${id}`);
}

/* Use PATCH para evitar sobrescrever o objeto inteiro */
async function updateReceita(id, data) {
  return apiRequest(`/receitas/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(data)
  });
}

async function getCurtidas(params = '') {
  return apiRequest(`/curtidas${params}`);
}

async function createCurtida(data) {
  return apiRequest('/curtidas', {
    method: 'POST',
    body: JSON.stringify(data)
  });
}

/* ========== UTIL ========== */
function obterUsuarioAtual() {
  // Gera um id persistente simples p/ este navegador
  let uid = localStorage.getItem('uid');
  if (!uid) {
    uid = `u_${Date.now()}_${Math.floor(Math.random() * 1e6)}`;
    localStorage.setItem('uid', uid);
  }
  return uid;
}

async function hasUserLikedOnServer(receitaId, usuarioId) {
  // json-server suporta filtro por query string
  const list = await getCurtidas(`?receitaId=${encodeURIComponent(receitaId)}&usuarioId=${encodeURIComponent(usuarioId)}`);
  return Array.isArray(list) && list.length > 0;
}

/* LocalStorage p/ UX rápida */
async function loadUserLikedRecipes() {
  try {
    return JSON.parse(localStorage.getItem('userLikedRecipes')) || [];
  } catch { return []; }
}
function saveUserLikedRecipes(recipes) {
  localStorage.setItem('userLikedRecipes', JSON.stringify(recipes));
}

/* ========== CATÁLOGO ========== */
async function gerarCatalogo() {
  const container = document.getElementById("catalogo-receitas");
  if (!container) return console.error("Contêiner 'catalogo-receitas' não encontrado.");
  container.innerHTML = "<p>Carregando receitas...</p>";

  try {
    const receitas = await getReceitas();
    const categoriaAtual = detectarCategoriaDaPagina();

    const receitasFiltradas = categoriaAtual
      ? receitas.filter(r => r.categoria === categoriaAtual)
      : receitas;

    container.innerHTML = "";

    if (!receitasFiltradas.length) {
      container.innerHTML = "<p>Nenhuma receita encontrada para esta categoria.</p>";
      return;
    }

    const tipos = [...new Set(receitasFiltradas.map(r => r.tipo))];

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
          card.className = "bg-white rounded-lg shadow-md overflow-hidden flex flex-col card";

          card.innerHTML = `
            <img src="${receita.imagem}" alt="${receita.titulo}" class="w-full h-48 object-cover">
            <div class="p-4 flex flex-col flex-grow">
              <h3 class="text-xl font-semibold text-gray-800 mb-2">${receita.titulo}</h3>
              <p class="text-gray-600 text-sm mb-4 flex-grow">${receita.descricao}</p>
              <p class="curtidas-display text-gray-500 text-sm mb-2">Curtidas: ${receita.curtidas ?? 0}</p>
              <button onclick="mostrarDetalhes(${Number(receita.id)})" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300">Ver Receita</button>
            </div>
          `;
          grupo.appendChild(card);
        });

      container.appendChild(grupo);
    });
  } catch (err) {
    console.error("Erro ao carregar receitas:", err);
    container.innerHTML = "<p>Erro ao carregar receitas. Tente novamente mais tarde.</p>";
  }
}

/* ========== MODAL DETALHE + CURTIR ========== */
async function mostrarDetalhes(id) {
  try {
    const response = await fetch(`http://localhost:3001/receitas/${id}`);
    if (!response.ok) throw new Error(`Erro HTTP: ${response.status}`);
    
    const receita = await response.json();

    // Preenche o modal com os dados
    document.getElementById('modal-titulo').textContent = receita.titulo;
    document.getElementById('modal-imagem').src = receita.imagem;
    document.getElementById('modal-descricao').textContent = receita.descricao;
    document.getElementById('modal-categoria').textContent = receita.categoria;

    const ulIngredientes = document.getElementById('modal-ingredientes');
    ulIngredientes.innerHTML = '';
    receita.ingredientes.forEach(ing => {
      const li = document.createElement('li');
      li.textContent = ing;
      ulIngredientes.appendChild(li);
    });

    const olPreparo = document.getElementById('modal-preparo');
    olPreparo.innerHTML = '';
    receita.preparo.forEach(pass => {
      const li = document.createElement('li');
      li.textContent = pass;
      olPreparo.appendChild(li);
    });

    // Atualiza contador
    document.getElementById('contador').textContent = receita.curtidas;

    // Adiciona evento ao botão curtir
    const btCurtir = document.getElementById('btCurtir');
    btCurtir.onclick = () => curtirReceita(id, receita.curtidas);

    document.getElementById('modal-receita').style.display = 'block';

  } catch (error) {
    console.error('Erro ao carregar detalhes da receita:', error);
  }
}

async function curtirReceita(id, curtidasAtuais) {
  try {
    const novoValor = curtidasAtuais + 1;

    const response = await fetch(`http://localhost:3001/receitas/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ curtidas: novoValor })
    });

    if (!response.ok) throw new Error(`Erro ao atualizar curtidas: ${response.status}`);

    // Atualiza no modal
    document.getElementById('contador').textContent = novoValor;

  } catch (error) {
    console.error('Erro ao curtir a receita:', error);
  }
}

/* ========== SUPORTE ========== */
function detectarCategoriaDaPagina() {
  const nomeArquivo = (window.location.pathname.split("/").pop() || "").toLowerCase();
  if (nomeArquivo.includes("sos")) return "SOS";
  if (nomeArquivo.includes("fitnes")) return "Fitnes";
  if (nomeArquivo.includes("desafio")) return "Desafios";
  return null;
}

function fecharModal() {
  const modal = document.getElementById("modal-receita");
  if (modal) modal.style.display = "none";
}

/* ========== BOOT ========== */
window.onload = async () => {
  console.log("Página carregada. Iniciando...");
  await gerarCatalogo();
};
