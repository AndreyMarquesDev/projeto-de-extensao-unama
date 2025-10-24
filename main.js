document.addEventListener('DOMContentLoaded', () => {
    const setaEsquerda = document.querySelector('.seta-nav.esquerda');
    const setaDireita = document.querySelector('.seta-nav.direita');
    const cardContainer = document.querySelector('.secao-inicio');
    if (!cardContainer || !setaEsquerda || !setaDireita) {
        console.error("Elementos do carrossel não encontrados. Verifique as classes.");
        return;
    }
    let currentCardIndex = 0; 
    const totalCards = 3; 
    function showNextCard() {d
        currentCardIndex = (currentCardIndex + 1) % totalCards;
        console.log(`Próximo card simulado: ${currentCardIndex}`);
        alert("Simulando a exibição do Próximo Projeto!");
    }
    function showPrevCard() {
        currentCardIndex = (currentCardIndex - 1 + totalCards) % totalCards;
        console.log(`Card anterior simulado: ${currentCardIndex}`);
        alert("Simulando a exibição do Projeto Anterior!");
    }
    setaDireita.addEventListener('click', showNextCard);
    setaEsquerda.addEventListener('click', showPrevCard);
    const btnMaisProjetos = document.querySelector('.btn-mais-projetos');
    if (btnMaisProjetos) {
        btnMaisProjetos.addEventListener('click', (e) => {
            e.preventDefault();    
            const targetSection = document.getElementById('projetos');
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            } else {
                window.location.href = '#projetos';
            }
        });
    }
});