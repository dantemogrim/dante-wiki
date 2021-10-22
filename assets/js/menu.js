const hamburgerIcon = document.querySelector('.hamburgerIcon');
const pageLinks = document.querySelector('.pageLinks');

pageLinks.forEach((burgerClick) => {
  burgerClick.addEventListener('click', () => {
    console.log('Clicked burgers!');
  });
});
