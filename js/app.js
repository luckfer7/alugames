function alterarStatus(id) {
    const game1 = document.getElementById(`game-${id}`);
    const img = game1.querySelector('.dashboard__item__img');
    const botao = game1.querySelector('.dashboard__item__button');

    if (img.classList.contains('dashboard__item__img--rented')) {
        img.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
        
    } else {
        img.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
    }
}