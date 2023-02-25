
const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
   const menuBody = document.querySelector('.nav');
   const blured = document.querySelector('.head__content')
   iconMenu.addEventListener("click", function(e) {
      document.body.classList.toggle('_lock');
      blured.classList.toggle('_blured');
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
   });
};

