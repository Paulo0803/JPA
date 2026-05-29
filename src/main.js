/*Inicio carrosel de noticias*/

const slider = document.querySelector('.news_conteiner');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// 1. Controle através dos botões de Setas
const cardWidth = 320; // Largura do card (300px) + Gap (20px)

nextBtn.addEventListener('click', () => {
    slider.scrollLeft += cardWidth;
});

prevBtn.addEventListener('click', () => {
    slider.scrollLeft -= cardWidth;
});

// 2. Controle por Arrastar o Mouse (Drag to Scroll)
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.style.cursor = 'grabbing';
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.style.cursor = 'default';
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.style.cursor = 'default';
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return; // Para a função se o clique não estiver pressionado
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // Multiplicador de velocidade do arrasto
    slider.scrollLeft = scrollLeft - walk;
});
/*Fim do carrossel*/