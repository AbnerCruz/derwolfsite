const whatsappBaseURL = "https://wa.me/5518996181770";

// Mapeia nomes bonitos
const nomesDisciplinas = {
  Matemática: "Matemática",
  Música: "Música",
  Física: "Física",
};
const nomesPlanos = {
  plano4: "4 aulas",
  plano8: "8 aulas",
  plano12: "12 aulas",
};

/**
 * Gera um link do WhatsApp formatado com base nas seleções
 * @param {string[]} textArray - Array de strings no formato "Disciplina|plano"
 * @returns {string} - URL formatada
 */
function criarWhatsappLink(textArray) {
  const planosSelecionados = textArray.map((item) => {
    const [disciplina, plano] = item.split("|");
    return { disciplina, plano };
  });

  const temSelecionado = planosSelecionados.length > 0;
  const planoSelecionado = planosSelecionados[0]?.plano || "";

  const mensagem = temSelecionado
    ? `Eu gostaria de assinar o plano - ${nomesPlanos[planoSelecionado]}\nCom as disciplinas:\n` +
      planosSelecionados
        .map(({ disciplina }) => ` - ${nomesDisciplinas[disciplina] || disciplina} `)
        .join("\n")
    : "";

  const mensagemCodificada = encodeURIComponent(mensagem);
  return `${whatsappBaseURL}?text=${mensagemCodificada}`;
}

export default criarWhatsappLink;
