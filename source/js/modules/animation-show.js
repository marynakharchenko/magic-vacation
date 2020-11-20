export default () => {
  const menuItemPrizes = document.querySelector(`#prizes`);
  const backgroundFill = document.querySelector(`.background-fill`);
  menuItemPrizes.addEventListener(`click`, () =>{
    backgroundFill.classList.add(`animation-show`);
  });
};
