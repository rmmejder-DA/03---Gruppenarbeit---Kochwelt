//menu drop list, inkl. content pushdown

const cook = document.getElementById('cook');
const menu = document.getElementById('menu');
const pageContent = document.querySelector('.page-content');

cook.addEventListener('click', function () {
  menu.classList.toggle('show');

  if (pageContent) {
    pageContent.classList.toggle('pushed');
  }
});