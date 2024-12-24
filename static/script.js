const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    // Remove a classe 'active' de todos os itens
    menuItems.forEach(i => i.classList.remove('active'));
    // Adiciona a classe 'active' ao item clicado
    item.classList.add('active');
  });
});

