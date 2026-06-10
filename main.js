// Array de dicas sobre o meio ambiente e o campo
const dicasAgrinho = [
    "Economize água: feche a torneira enquanto escova os dentes e reduza o tempo no banho.",
    "Pratique a reciclagem: separe o lixo orgânico do lixo reciclável na sua casa.",
    "Evite o desperdício de alimentos: aproveite cascas e talos em receitas nutritivas.",
    "Preserve a natureza: plantar árvores ajuda a purificar o ar e protege o solo da erosão.",
    "Diga não ao plástico de uso único: prefira sacolas retornáveis e garrafas reutilizáveis.",
    "O campo nos alimenta: valorize o trabalho dos agricultores que produzem nossa comida diariamente!"
];

// Seleção dos elementos do HTML
const botaoDica = document.getElementById("btn-dica");
const textoDica = document.getElementById("dica-texto");

// Função para escolher uma dica aleatória
function mostrarNovaDica() {
    const indiceAleatorio = Math.floor(Math.random() * dicasAgrinho.length);
    textoDica.textContent = dicasAgrinho[indiceAleatorio];
}

// Ouvinte de evento para o clique no botão
botaoDica.addEventListener("click", mostrarNovaDica);