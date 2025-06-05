const livros = [
  {
    id: 1,
    nome: "O Solitário Pastor de Ovelhas",
    descricao: "Ben Afkael narra a história do solitário pastor de ovelhas, cujo cotidiano tranquilo é marcado por memórias, perdas e um encontro misterioso à beira do lago sagrado Sky Mirror. Entre o silêncio das águas e a solidão das colinas, ele revela emoções profundas e a conexão delicada entre passado e presente, amizade e esperança, numa prosa que eterniza a alma de Uriath.",
    arquivo: "/DerwolfBooks/Books/O_Solitario_Pastor_de_Ovelhas.pdf",
    imagem: "/DerwolfBooks/Books/O_Solitario_Pastor_de_Ovelhas.png",
    nota: 9.05,
    disponivel: true,
  },
  {
    id: 2,
    nome: "Uriath Gênese",
    descricao: "",
    arquivo: "/DerwolfBooks/Books/Uriath_Genesis.pdf",
    imagem: "/DerwolfBooks/Books/Uriath_Genesis.png",
    nota: 0,
    disponivel: false,
  },
  {
    id: 3,
    nome: "Estrada Para Danfim",
    descricao: "Ben Afkael narra a Plendor, seu rei e amigo, um fragmento do sonho que nunca pôde viver: a árdua jornada por uma estrada esquecida em Uriath. Entre pedras e gemidos, exércitos, amantes e fugitivos deixaram suas marcas. É a história de um caminho antigo, de companhias cansadas e destinos incertos, onde a esperança é uma miragem e a memória, o último refúgio dos que não empunham espada.",
    arquivo: "/DerwolfBooks/Books/Estrada_Para_Danfim.pdf",
    imagem: "/DerwolfBooks/Books/Estrada_Para_Danfim.png",
    nota: 9.25,
    disponivel: true,
  },
  {
    id: 4,
    nome: "Fundação de Caryndor",
    descricao: "Ben Afkael narra com reverência e precisão a história de Caryn Ashik, uma mulher que, em meio à guerra e à fuga, ascendeu de refugiada a líder visionária. Contando com a promessa feita ao seu amigo, o Rei Plendor, Ben transporta o leitor para as terras de Caryndor, mostrando a queda do reino e a força das mulheres que o governaram, preservando a memória viva de um tempo marcado por luta, esperança e transformação.",
    arquivo: "/DerwolfBooks/Books/Fundacao_de_Caryndor.pdf",
    imagem: "/DerwolfBooks/Books/Fundacao_de_Caryndor.png",
    nota: 8.6,
    disponivel: true,
  },
  {
    id: 5,
    nome: "O Lago",
    descricao: "",
    arquivo: "/DerwolfBooks/Books/O_Lago.pdf",
    imagem: "/DerwolfBooks/Books/O_Lago.png",
    nota: 0,
    disponivel: false,
  },
  {
    id: 6,
    nome: "Thyra",
    descricao: "",
    arquivo: "/DerwolfBooks/Books/Thyra.pdf",
    imagem: "/DerwolfBooks/Books/Thyra.png",
    nota: 0,
    disponivel: false,
  },
  {
    id: 7,
    nome: "O Observador",
    descricao: "Ben Afkael narra, com voz carregada de emoção e respeito, as histórias que testemunhou nas terras de Uriath. Dedicadas a Plendor, seu rei e amigo, suas palavras revelam encontros com figuras enigmáticas como Mikhael, o Observador, cuja missão é testemunhar o mundo sem interferir. Entre sombras e silêncios, Ben registra a essência das vidas ocultas e as duras realidades que o tempo insiste em ocultar.",
    arquivo: "/DerwolfBooks/Books/O_Observador.pdf",
    imagem: "/DerwolfBooks/Books/O_Observador.png",
    nota: 9.1,
    disponivel: true,
  },
  {
    id: 8,
    nome: "A Loba da Névoa",
    descricao: "",
    arquivo: "/DerwolfBooks/Books/A_Loba_da_Nevoa.pdf",
    imagem: "/DerwolfBooks/Books/A_Loba_da_Nevoa.png",
    nota: 0,
    disponivel: false,
  },
];

export default livros;



// Você é um avaliador técnico de histórias para a plataforma Derwolf Books. Sua função é atribuir notas de 0 a 10 em 5 critérios abaixo, com base na história que será apresentada a seguir. Depois, calcule a nota final com os pesos indicados.

// Avalie os seguintes critérios:

// 1. Originalidade & Criatividade (20%)
// - A história tem um enredo original, interessante, sem parecer um clichê?

// 2. Qualidade Narrativa (25%)
// - O texto tem começo, meio e fim claros? Os personagens são bem desenvolvidos? O ritmo e a coesão prendem o leitor?

// 3. Gramática & Estilo (15%)
// - O texto está bem escrito? Sem erros gramaticais, com boa fluidez e clareza?

// 4. Profundidade Temática (20%)
// - A obra transmite uma mensagem relevante, explora temas interessantes, faz pensar?

// 5. Autenticidade & Produção (20%)
// - A história parece ter sido escrita por um humano? A escrita parece natural ou gerada por IA? Há sinais de edição e cuidado?

// Apresente o resultado final da seguinte forma:

// - Originalidade: X/10  
// - Narrativa: X/10  
// - Gramática: X/10  
// - Profundidade: X/10  
// - Autenticidade: X/10  
// - **Nota Final (com cálculo de pesos): X/10**
// - Classificação qualitativa (ex: “Obra-prima”, “Excelente”, “Boa”, etc.)

// Agora avalie a seguinte história:

