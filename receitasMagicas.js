const receitas = [
  // --- SOS ---
  {
    id: 1,
    titulo: "Chá Gelado com Limão e Mel",
    categoria: "SOS",
    descricao: "Uma bebida simples e fácil de fazer para dias quentes",
    imagem: "https://via.placeholder.com/500x300?text=Chá+Gelado",
    ingredientes: ["Água", "Limão", "Mel", "Gelo"],
    preparo: ["Ferva a água", "Adicione limão e mel", "Sirva com gelo"]
  },
  {
    id: 2,
    titulo: "Leite Cremoso com Chocolate",
    categoria: "SOS",
    descricao: "Excelente opção para fazer a alegria da criançada",
    imagem: "https://via.placeholder.com/500x300?text=Leite+com+Chocolate",
    ingredientes: ["Leite", "Chocolate em pó", "Açúcar"],
    preparo: ["Aqueça o leite", "Misture o chocolate", "Bata até espumar"]
  },
  {
    id: 3,
    titulo: "Suco de Frutas Express",
    categoria: "SOS",
    descricao: "Rápido e funcional",
    imagem: "https://via.placeholder.com/500x300?text=Suco+Express",
    ingredientes: ["Frutas variadas", "Água", "Gelo"],
    preparo: ["Bata tudo no liquidificador", "Coe se desejar", "Sirva gelado"]
  },
  {
    id: 4,
    titulo: "Omelete Nutritiva",
    categoria: "SOS",
    descricao: "O básico que funciona",
    imagem: "https://via.placeholder.com/500x300?text=Omelete",
    ingredientes: ["Ovos", "Tomate", "Cebola", "Cheiro-verde"],
    preparo: ["Bata os ovos", "Adicione os ingredientes", "Frite dos dois lados"]
  },
  {
    id: 5,
    titulo: "Macarrão de Panela de Pressão",
    categoria: "SOS",
    descricao: "Celeridade e sem louça para lavar",
    imagem: "https://via.placeholder.com/500x300?text=Macarrão+Pressão",
    ingredientes: ["Macarrão", "Molho de tomate", "Água", "Queijo"],
    preparo: ["Coloque tudo na panela", "Cozinhe por 5 minutos após pressão", "Sirva com queijo"]
  },
  {
    id: 6,
    titulo: "Salada Completa com Atum",
    categoria: "SOS",
    descricao: "Rápida, fácil e nutritiva",
    imagem: "https://via.placeholder.com/500x300?text=Salada+com+Atum",
    ingredientes: ["Alface", "Tomate", "Atum", "Azeite"],
    preparo: ["Misture os ingredientes", "Tempere a gosto", "Sirva fresca"]
  },
  {
    id: 7,
    titulo: "Brigadeiro de Micro-ondas",
    categoria: "SOS",
    descricao: "Simples e prático",
    imagem: "https://via.placeholder.com/500x300?text=Brigadeiro+Microondas",
    ingredientes: ["Leite condensado", "Chocolate em pó", "Manteiga"],
    preparo: ["Misture tudo", "Leve ao micro-ondas por 6 minutos", "Mexa a cada 2 minutos"]
  },
  {
    id: 8,
    titulo: "Banana com Canela na Airfryer",
    categoria: "SOS",
    descricao: "Uma opção que encaixa até se você estiver de dieta",
    imagem: "https://via.placeholder.com/500x300?text=Banana+Airfryer",
    ingredientes: ["Banana", "Canela", "Mel (opcional)"],
    preparo: ["Corte a banana", "Polvilhe canela", "Asse na airfryer por 10 minutos"]
  },
  {
    id: 9,
    titulo: "Mousse Rápido de Maracujá",
    categoria: "SOS",
    descricao: "Um favorito da família brasileira, tinha que ter sua versão prática não é mesmo",
    imagem: "https://via.placeholder.com/500x300?text=Mousse+Maracujá",
    ingredientes: ["Leite condensado", "Creme de leite", "Suco de maracujá"],
    preparo: ["Bata tudo no liquidificador", "Leve à geladeira por 2 horas"]
  },

{
  id: 10,
  titulo: "Daiquiri Black",
  categoria: "Desafios",
  tipo: "Drinks",
  descricao: "Receita especial do Black Daiquiri, feito com carvão ativado e blueberry",
  imagem: "https://images.cocktailwave.com/black-daiquiri.png",
  ingredientes: ["Rum branco", "Suco de limão", "Xarope de açúcar", "Carvão ativado", "Blueberry"],
  preparo: ["Adicione todos os ingredientes na coqueteleira", "Agite com gelo", "Coe e sirva em taça gelada"],
  curtidas: 0,
  destaque: false
},
{
  id: 11,
  titulo: "Margarita",
  categoria: "Desafios",
  tipo: "Drinks",
  descricao: "Drink italiano preparado com gin, campari e vermute tinto",
  imagem: "https://www.allrecipes.com/thmb/RB7pCbCSAa2zNvZ5QZErB87K-BA=/1500x0/filters:no_upscale()/margarita.jpg",
  ingredientes: ["Tequila", "Triple sec", "Suco de limão", "Sal para a borda"],
  preparo: ["Bata tudo com gelo", "Sirva em copo com borda de sal"],
  curtidas: 0,
  destaque: false
},
{
  id: 12,
  titulo: "Negroni",
  categoria: "Desafios",
  tipo: "Drinks",
  descricao: "Coquetel mexicano feito com tequila, suco de limão e licor de laranja",
  imagem: "https://framerusercontent.com/images/zFnxOZkQ0Xh6A8k9exj36HmVpg.jpg",
  ingredientes: ["Tequila", "Licor de laranja", "Suco de limão", "Gelo"],
  preparo: ["Misture os ingredientes", "Sirva com gelo e uma rodela de limão"],
  curtidas: 0,
  destaque: false
},
{
  id: 13,
  titulo: "Mojito Tradicional",
  categoria: "Desafios",
  tipo: "Drinks",
  descricao: "Clássico drink cubano com rum, hortelã, limão e água com gás",
  imagem: "https://framerusercontent.com/images/2gfd92s7HVhxwye5DZULyhtwM.jpg",
  ingredientes: ["Rum branco", "Hortelã", "Limão", "Açúcar", "Água com gás"],
  preparo: ["Macere hortelã com açúcar e limão", "Adicione rum e gelo", "Complete com água com gás"],
  curtidas: 0,
  destaque: false
},
{
  id: 14,
  titulo: "Ravioli",
  categoria: "Desafios",
  tipo: "Massas",
  descricao: "Massa recheada versátil, pode ser preparada com queijos, carnes ou vegetais",
  imagem: "https://framerusercontent.com/images/um4IWxVcUZze7HlW2WURmaUZ4P8.webp",
  ingredientes: ["Massa de ravioli", "Recheio de sua escolha", "Molho de tomate"],
  preparo: ["Cozinhe o ravioli", "Aqueça o molho", "Sirva com queijo ralado"],
  curtidas: 0,
  destaque: false
},
{
  id: 15,
  titulo: "Capeletti in Brodo",
  categoria: "Desafios",
  tipo: "Massas",
  descricao: "Sopa italiana com capeletti recheado de carne em caldo saboroso",
  imagem: "https://framerusercontent.com/images/hrtJhnwN8tobHMS7RjoMhOLdtQ8.webp?scale-down-to=512",
  ingredientes: ["Capeletti", "Caldo de carne", "Temperos a gosto"],
  preparo: ["Ferva o caldo", "Adicione o capeletti", "Cozinhe até ficar macio"],
  curtidas: 0,
  destaque: false
},
{
  id: 16,
  titulo: "Conchiglione de Espinafre e Ricota",
  categoria: "Desafios",
  tipo: "Massas",
  descricao: "Massa recheada com ricota e espinafre, gratinada com molho branco",
  imagem: "https://framerusercontent.com/images/2PpfjlA2bi2BBjErDJFiDOgGnk.webp?scale-down-to=512",
  ingredientes: ["Conchiglione", "Ricota", "Espinafre", "Molho branco", "Queijo parmesão"],
  preparo: ["Recheie os conchigliones", "Cubra com molho branco", "Gratine no forno"],
  curtidas: 0,
  destaque: false
},
{
  id: 17,
  titulo: "Bombom de Morango",
  categoria: "Desafios",
  tipo: "Sobremesas",
  descricao: "Sobremesa gelada com combinação perfeita de morango e chocolate",
  imagem: "https://framerusercontent.com/images/ZzX6Jkm6hd0otJQyJtqyuEMz4.jpeg?scale-down-to=512",
  ingredientes: ["Morangos", "Chocolate meio amargo", "Creme de leite"],
  preparo: ["Derreta o chocolate com creme de leite", "Monte camadas com morango", "Leve à geladeira"],
  curtidas: 0,
  destaque: false
},
{
  id: 18,
  titulo: "Manjar de Coco",
  categoria: "Desafios",
  tipo: "Sobremesas",
  descricao: "Doce cremoso de coco com cobertura de ameixas",
  imagem: "https://framerusercontent.com/images/scf07JX5elTr5uSGQ1dAzOeHtI4.webp?scale-down-to=512",
  ingredientes: ["Leite de coco", "Açúcar", "Amido de milho", "Ameixas em calda"],
  preparo: ["Cozinhe os ingredientes até engrossar", "Despeje na forma", "Cubra com ameixas e leve à geladeira"],
  curtidas: 0,
  destaque: false
},
{
  id: 19,
  titulo: "Cheesecake de Morango",
  categoria: "Desafios",
  tipo: "Sobremesas",
  descricao: "Clássica cheesecake com cobertura de morango, preparada de forma rápida",
  imagem: "https://framerusercontent.com/images/DfnM8sh6m7EyaUmdSkyFKQz5BI.webp?scale-down-to=512",
  ingredientes: ["Biscoito", "Manteiga", "Cream cheese", "Morango", "Gelatina"],
  preparo: ["Monte a base com biscoito e manteiga", "Bata o recheio com cream cheese", "Cubra com morangos e leve à geladeira"],
  curtidas: 0,
  destaque: false
},
  {
    id: 20,
    titulo: "Suco Detox Refrescante",
    categoria: "Fitnes",
    descricao: "Uma bebida gelada e refrescante",
    imagem: "https://via.placeholder.com/500x300?text=Suco+Detox",
    ingredientes: ["Couve", "Limão", "Gengibre", "Água"],
    preparo: ["Bata tudo no liquidificador", "Sirva com gelo"]
  },
  {
    id: 21,
    titulo: "Smoothie Proteico de Banana e Cacau",
    categoria: "Fitnes",
    descricao: "Forma prática e rápida de acelerar o ganho de massa muscular",
    imagem: "https://via.placeholder.com/500x300?text=Smoothie+Proteico",
    ingredientes: ["Banana", "Leite vegetal", "Cacau", "Proteína em pó"],
    preparo: ["Bata tudo no liquidificador", "Sirva gelado"]
  },
  {
    id: 22,
    titulo: "Limonada de Hibisco com Gengibre",
    categoria: "Fitnes",
    descricao: "Limonada, boa, gostosa e geladinha",
    imagem: "https://via.placeholder.com/500x300?text=Limonada+Hibisco",
    ingredientes: ["Chá de hibisco", "Limão", "Gengibre", "Mel"],
    preparo: ["Misture tudo", "Sirva com gelo"]
  },
  {
    id: 23,
    titulo: "Frango Grelhado com Quinoa e Legumes",
    categoria: "Fitnes",
    descricao: "O básico que funciona",
    imagem: "https://via.placeholder.com/500x300?text=Frango+com+Quinoa",
    ingredientes: ["Frango", "Quinoa", "Legumes variados"],
    preparo: ["Grelhe o frango", "Cozinhe a quinoa", "Refogue os legumes"]
  },
  {
    id: 24,
    titulo: "Omelete de Espinafre com Queijo Branco",
    categoria: "Fitnes",
    descricao: "Cansado de ovos cozidos? eu também! pega essa receita da casa",
    imagem: "https://via.placeholder.com/500x300?text=Omelete+Fit",
    ingredientes: ["Ovos", "Espinafre", "Queijo branco"],
    preparo: ["Bata os ovos", "Adicione espinafre e queijo", "Frite em fogo baixo"]
  },
  {
    id: 25,
    titulo: "Salada Proteica de Atum e Grão-de-Bico",
    categoria: "Fitnes",
    descricao: "Eei, ei, ei! nada de julgar o livro pela capa, hein!!!",
    imagem: "https://via.placeholder.com/500x300?text=Salada+Proteica",
    ingredientes: ["Atum", "Grão-de-bico", "Tomate", "Azeite"],
    preparo: ["Misture tudo", "Tempere a gosto", "Sirva gelado"]
  },
  {
    id: 26,
    titulo: "Mousse de Chocolate Fit",
    categoria: "Fitnes",
    descricao: "Chocolate e Fit na mesma frase parece até mentira né?!",
    imagem: "https://via.placeholder.com/500x300?text=Mousse+Fit",
    ingredientes: ["Abacate", "Cacau em pó", "Mel"],
    preparo: ["Bata tudo no processador", "Leve à geladeira"]
  },
  {
    id: 27,
    titulo: "Pudim de Chia com Frutas",
    categoria: "Fitnes",
    descricao: "PU-DIM!",
    imagem: "https://via.placeholder.com/500x300?text=Pudim+de+Chia",
    ingredientes: ["Chia", "Leite vegetal", "Frutas picadas"],
    preparo: ["Misture chia com leite", "Deixe hidratar por 4h", "Adicione frutas"]
  },
{
  id: 28,
  titulo: "Sorvete de Banana com Amendoim",
  categoria: "Fitnes",
  descricao: "Uma sobremesa saudável, cremosa e sem açúcar — perfeita para refrescar com sabor!",
  imagem: "https://via.placeholder.com/500x300?text=Sorvete+de+Banana+com+Amendoim",
  ingredientes: ["Bananas maduras congeladas", "Pasta de amendoim natural", "Canela (opcional)"],
  preparo: [
    "Coloque as bananas congeladas no processador",
    "Adicione uma colher de pasta de amendoim",
    "Bata até virar um creme liso",
    "Polvilhe canela por cima e sirva imediatamente"
  ]
},
]
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
  container.innerHTML = "";

  const categoriaAtual = detectarCategoriaDaPagina();
  const receitasFiltradas = receitas.filter(r => r.categoria === categoriaAtual);

  // Agrupar por tipo
  const tipos = [...new Set(receitasFiltradas.map(r => r.tipo))];

  tipos.forEach(tipo => {
    const titulo = document.createElement("h2");
    titulo.textContent = tipo;
    container.appendChild(titulo);

    const grupo = document.createElement("div");
    grupo.className = "container";

    receitasFiltradas
      .filter(r => r.tipo === tipo)
      .forEach(receita => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
          <img src="${receita.imagem}" alt="${receita.titulo}">
          <div class="text">
            <h3>${receita.titulo}</h3>
            <p>${receita.descricao}</p>
            <button onclick="mostrarDetalhes(${receita.id})">Receita</button>
          </div>
        `;
        grupo.appendChild(card);
      });

    container.appendChild(grupo);
  });
}

function mostrarDetalhes(id) {
  const receita = receitas.find(r => r.id === id);
  if (!receita) return;

  document.getElementById("modal-titulo").textContent = receita.titulo;
  document.getElementById("modal-descricao").textContent = receita.descricao;
  document.getElementById("modal-categoria").textContent = receita.categoria;
  document.getElementById("modal-imagem").src = receita.imagem;
  document.getElementById("modal-imagem").alt = receita.titulo;

  const listaIngredientes = document.getElementById("modal-ingredientes");
  listaIngredientes.innerHTML = "";
  receita.ingredientes.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    listaIngredientes.appendChild(li);
  });

  const listaPreparo = document.getElementById("modal-preparo");
  listaPreparo.innerHTML = "";
  receita.preparo.forEach(passo => {
    const li = document.createElement("li");
    li.textContent = passo;
    listaPreparo.appendChild(li);
  });

  const curtirBtn = document.getElementById("btCurtir");
  const contador = document.getElementById("contador");
  const key = `curtidas_${id}`;
  const curtidasSalvas = JSON.parse(localStorage.getItem("curtidasReceitas")) || {};
  contador.textContent = curtidasSalvas[key] || 0;

  curtirBtn.onclick = () => {
    const novoValor = (parseInt(contador.textContent) || 0) + 1;
    contador.textContent = novoValor;
    curtidasSalvas[key] = novoValor;
    localStorage.setItem("curtidasReceitas", JSON.stringify(curtidasSalvas));
    curtirBtn.classList.add("curtido");
  };

  document.getElementById("modal-receita").style.display = "block";
}

function fecharModal() {
  document.getElementById("modal-receita").style.display = "none";
}

window.onload = gerarCatalogo;