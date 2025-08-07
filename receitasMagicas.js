const receitas = [
  // --- SOS ---
{
  id: 1,
  titulo: "Caipirinha",
  categoria: "SOS",
  tipo: "Bebidas",
  descricao: "Clássico brasileiro com limão e cachaça",
  imagem: "https://cdn.casaeculinaria.com/wp-content/uploads/2024/01/17135130/Frozen-de-caipirinha-600x400.webp",
  ingredientes: ["Limão", "Cachaça", "Açúcar", "Gelo"],
  preparo: ["Macere o limão com açúcar", "Adicione cachaça e gelo", "Misture e sirva"],
  curtidas: 0,
  destaque: false
},
  {
    id: 2,
    titulo: "Leite Cremoso com Chocolate",
    categoria: "SOS",
    tipo: "Bebidas",
    descricao: "Excelente opção para fazer a alegria da criançada",
    imagem: "https://www.receitas-sem-fronteiras.com/media/cau_choco_-quente-bx_thumb-2_crop.jpg/rh/chocolate-quente.jpg",
    ingredientes: ["Leite", "Chocolate em pó", "Açúcar"],
    preparo: ["Aqueça o leite", "Misture o chocolate", "Bata até espumar"],
    curtidas: 0,
    destaque: false
  },
  {
    id: 3,
    titulo: "Suco de Frutas Express",
    categoria: "SOS",
    tipo: "Bebidas",
    descricao: "Rápido e funcional",
    imagem: "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2022/06/04/395761904-suco-bifasico-768x512.jpg",
    ingredientes: ["Frutas variadas", "Água", "Gelo"],
    preparo: ["Bata tudo no liquidificador", "Coe se desejar", "Sirva gelado"],
    curtidas: 0,
    destaque: false 
  },
  {
    id: 4,
    titulo: "Omelete Nutritiva",
    categoria: "SOS",
    tipo: "Refeições",
    descricao: "O básico que funciona",
    imagem: "https://ser.vitao.com.br/wp-content/uploads/2017/12/shutterstock_641632513-1-920x535.jpg",
    ingredientes: ["Ovos", "Tomate", "Cebola", "Cheiro-verde"],
    preparo: ["Bata os ovos", "Adicione os ingredientes", "Frite dos dois lados"],
    curtidas: 0,
    destaque: false
  },
  {
    id: 5,
    titulo: "Macarrão de Panela de Pressão",
    categoria: "SOS",
    tipo: "Refeições",
    descricao: "Celeridade e sem louça para lavar",
    imagem: "https://s2-receitas.glbimg.com/geGC2yN71ppvZbTVO8mls4-IRXM=/0x0:1280x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2022/3/B/B0R1jdRwC8PQbFXptbSw/macarrao-de-panela-de-pressao.jpg",
    ingredientes: ["Macarrão", "Molho de tomate", "Água", "Queijo"],
    preparo: ["Coloque tudo na panela", "Cozinhe por 5 minutos após pressão", "Sirva com queijo"],
    curtidas: 0,
    destaque: false
  },
  {
    id: 6,
    titulo: "Salada Completa com Atum",
    categoria: "SOS",
    tipo: "Refeições",
    descricao: "Rápida, fácil e nutritiva",
    imagem: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjDFV0LGmkgINPC8ubyPFhhWlnrZVb45dBNGrfau-ZPTwf7IG9pPgHi13mbYxEoGHJ6TJodKoHoa65uzZlbDYMZZU7FMLskOQ2mLNmseqYIpClwD0rVIzb8On6xHRbNebRSKPyPsgxIG30/s1600/salada_de_atum+%25281%2529.jpg",
    ingredientes: ["Alface", "Tomate", "Atum", "Azeite"],
    preparo: ["Misture os ingredientes", "Tempere a gosto", "Sirva fresca"],
    curtidas: 0,
    destaque: false 
  },
  {
    id: 7,
    titulo: "Brigadeiro de Micro-ondas",
    categoria: "SOS",
    tipo: "Sobremesas",
    descricao: "Simples e prático",
    imagem: "https://img.saborosos.com.br/imagens/brigadeiro-de-micro-ondas-848x477.jpg",
    ingredientes: ["Leite condensado", "Chocolate em pó", "Manteiga"],
    preparo: ["Misture tudo", "Leve ao micro-ondas por 6 minutos", "Mexa a cada 2 minutos"],
    curtidas: 0,
    destaque: false
  },
  {
    id: 8,
    titulo: "Banana com Canela na Airfryer",
    categoria: "SOS",
    tipo: "Sobremesas",
    descricao: "Uma opção que encaixa até se você estiver de dieta",
    imagem: "https://img.cybercook.com.br/receitas/234/banana-assada-com-canela-1-840x480.jpeg?q=75",
    ingredientes: ["Banana", "Canela", "Mel (opcional)"],
    preparo: ["Corte a banana", "Polvilhe canela", "Asse na airfryer por 10 minutos"],
    curtidas: 0,
    destaque: false
  },
  {
    id: 9,
    titulo: "Mousse Rápido de Maracujá",
    categoria: "SOS",
    tipo: "Sobremesas",
    descricao: "Um favorito da família brasileira, tinha que ter sua versão prática não é mesmo",
    imagem: "https://s2-receitas.glbimg.com/LM1z7kvNyZxCGdVLVQ3cX-pxuWI=/0x0:1366x768/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2024/U/1/NKCkfISMaHYqyIB3VB3w/mousse-de-maracuja-facil.jpg",
    ingredientes: ["Leite condensado", "Creme de leite", "Suco de maracujá"],
    preparo: ["Bata tudo no liquidificador", "Leve à geladeira por 2 horas"],
    curtidas: 0,
    destaque: false
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
    tipo: "Bebidas",
    descricao: "Uma bebida gelada e refrescante",
    imagem: "https://tudodelicious.com/wp-content/webp-express/webp-images/uploads/2025/02/Suco-Detox-Revigorante-768x768.jpeg.webp",
    ingredientes: ["Couve", "Limão", "Gengibre", "Água"],
    preparo: ["Bata tudo no liquidificador", "Sirva com gelo"],
    curtidas: 0,
    destaque: false
  },
  {
    id: 21,
    titulo: "Smoothie Proteico de Banana e Cacau",
    categoria: "Fitnes",
    tipo: "Bebidas",
    descricao: "Forma prática e rápida de acelerar o ganho de massa muscular",
    imagem: "https://www.oitedi.com.br/_next/image?url=https%3A%2F%2Ftedi-production.s3.amazonaws.com%2Fcooking_recipes%2Ffood_description%2F14f3c34ec4ab3d47f2a1c9a19e53925c527b01cf.png&w=640&q=70",
    ingredientes: ["Banana", "Leite vegetal", "Cacau", "Proteína em pó"],
    preparo: ["Bata tudo no liquidificador", "Sirva gelado"],
    curtidas: 0,
    destaque: false
  },
  {
    id: 22,
    titulo: "Limonada de Hibisco com Gengibre",
    categoria: "Fitnes",
    tipo: "Bebidas",
    descricao: "Limonada, boa, gostosa e geladinha",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZj7LmOtKOKi7RmPkwC61z1evhsxHJZX5ZYg&s",
    ingredientes: ["Chá de hibisco", "Limão", "Gengibre", "Mel"],
    preparo: ["Misture tudo", "Sirva com gelo"],
    curtidas: 0,
    destaque: false
  },
  {
    id: 23,
    titulo: "Frango Grelhado com Quinoa e Legumes",
    categoria: "Fitnes",
    tipo: "Refeições",
    descricao: "O básico que funciona",
    imagem: "https://www.oitedi.com.br/_next/image?url=https%3A%2F%2Ftedi-production.s3.amazonaws.com%2Fcooking_recipes%2Ffood_description%2F28c5177dfe2d6e4df13f396cbc0c3557025eada5.png&w=640&q=70",
    ingredientes: ["Frango", "Quinoa", "Legumes variados"],
    preparo: ["Grelhe o frango", "Cozinhe a quinoa", "Refogue os legumes"],
    curtidas: 0,
    destaque: false
  },
  {
    id: 24,
    titulo: "Omelete de Espinafre com Queijo Branco",
    categoria: "Fitnes",
    tipo: "Refeições",
    descricao: "Cansado de ovos cozidos? eu também! pega essa receita da casa",
    imagem: "https://blog.mundoverde.com.br/wp-content/uploads/2021/08/Omelete-sementes-espinafre-1-768x432.jpeg",
    ingredientes: ["Ovos", "Espinafre", "Queijo branco"],
    preparo: ["Bata os ovos", "Adicione espinafre e queijo", "Frite em fogo baixo"],
    curtidas: 0,
    destaque: false
  },
  {
    id: 25,
    titulo: "Salada Proteica de Atum e Grão-de-Bico",
    categoria: "Fitnes",
    tipo: "Refeições",
    descricao: "Eei, ei, ei! nada de julgar o livro pela capa, hein!!!",
    imagem: "https://fly.metroimg.com/upload/q_85,w_700/https://uploads.metroimg.com/wp-content/uploads/2020/07/17140757/salada-de-grao-de-bico.jpg",
    ingredientes: ["Atum", "Grão-de-bico", "Tomate", "Azeite"],
    preparo: ["Misture tudo", "Tempere a gosto", "Sirva gelado"],
    curtidas: 0,
    destaque: false
  },
  {
    id: 26,
    titulo: "Mousse de Chocolate Fit",
    categoria: "Fitnes",
    tipo: "Sobremesas",
    descricao: "Chocolate e Fit na mesma frase parece até mentira né?!",
    imagem: "https://www.receitasnestle.com.br/sites/default/files/styles/recipe_detail_desktop_new/public/srh_recipes/06b1d739f72c25ca5876056d460806ac.webp?itok=5fpCoUPe",
    ingredientes: ["Abacate", "Cacau em pó", "Mel"],
    preparo: ["Bata tudo no processador", "Leve à geladeira"],
    curtidas: 0,
    destaque: false
  },
  {
    id: 27,
    titulo: "Pudim de Chia com Frutas",
    categoria: "Fitnes",
    tipo: "Sobremesas",
    descricao: "PU-DIM!",
    imagem: "https://images.mrcook.app/recipe-image/018f1589-e4df-729c-bb7e-d2b90e8360c0?cacheKey=U3VuLCAxMiBKYW4gMjAyNSAwMzozODoyNCBHTVQ=",
    ingredientes: ["Chia", "Leite vegetal", "Frutas picadas"],
    preparo: ["Misture chia com leite", "Deixe hidratar por 4h", "Adicione frutas"],
    curtidas: 0,
    destaque: false
  },
{
  id: 28,
  titulo: "Sorvete de Banana com Amendoim",
  categoria: "Fitnes",
  tipo: "Sobremesas",
  descricao: "Uma sobremesa saudável, cremosa e sem açúcar — perfeita para refrescar com sabor!",
  imagem: "https://midias.agazeta.com.br/2025/01/23/edicasesorvete-de-banana-e-amendoim-imagem-liudmyla-chuhunova--shutterstock--d3g4io5tvb9.jpg",
  ingredientes: ["Bananas maduras congeladas", "Pasta de amendoim natural", "Canela (opcional)"],
  curtidas: 0,
  preparo: [
    "Coloque as bananas congeladas no processador",
    "Adicione uma colher de pasta de amendoim",
    "Bata até virar um creme liso",
    "Polvilhe canela por cima e sirva imediatamente"
  ],
  destaque: false
},
];

let userLikedRecipes = [];

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
    loadUserLikedRecipes(); // Carrega as preferências de curtidas do utilizador.
    gerarCatalogo(); // Gera o catálogo de receitas com as contagens atualizadas.
};
