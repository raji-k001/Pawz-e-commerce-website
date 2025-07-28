document.addEventListener('DOMContentLoaded', () => {
  const categoryButtons = document.querySelectorAll('.category-btn');
  const categoryContents = document.querySelectorAll('.product-category-content');
  const searchIcon = document.getElementById('search-icon');
  const searchInput = document.getElementById('search-input');

  // Mobile menu toggle
  document.getElementById('menu-btn').addEventListener('click', function () {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
  });

  // Show/hide search input
  searchIcon.addEventListener('click', () => {
    searchInput.classList.toggle('hidden');
    if (!searchInput.classList.contains('hidden')) {
      searchInput.focus();
    }
  });

 
  // Category button switching
  categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      categoryButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const category = button.dataset.category;
      categoryContents.forEach(content => content.classList.add('hidden'));

      const activeContent = document.querySelector(`.product-category-content[data-category="${category}"]`);
      if (activeContent) activeContent.classList.remove('hidden');
    });
  });
});
