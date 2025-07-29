
const dadosUsuarios = {
  joao: {
    nome: "João Silva",
    receitas: ["Feijoada Gourmet", "Torta de Limão"],
    pontos: 1000
  },
  maria: {
    nome: "Maria Oliveira",
    receitas: ["Bolo de Cenoura", "Salada Tropical"],
    pontos: 950
  },
  carlos: {
    nome: "Carlos Souza",
    receitas: ["Macarronada de Forno", "Brownie"],
    pontos: 900
  },

};


function mostrarCard(usuarioId) {
  const user = dadosUsuarios[usuarioId];
  if (!user) return;


  const existente = document.querySelector(".card-detalhe");
  if (existente) existente.remove();

  const card = document.createElement("div");
  card.className = "card-detalhe";
  card.innerHTML = `
    <h3>${user.nome}</h3>
    <p><strong>Pontuação:</strong> ${user.pontos} pontos</p>
    <p><strong>Receitas:</strong></p>
    <ul>
      ${user.receitas.map(r => `<li>${r}</li>`).join("")}
    </ul>
    <button onclick="this.parentElement.remove()">Fechar</button>
  `;
  document.body.appendChild(card);
}


document.querySelectorAll(".user-name").forEach(nome => {
  nome.addEventListener("click", () => {
    const userId = nome.dataset.user;
    mostrarCard(userId);
  });
});


