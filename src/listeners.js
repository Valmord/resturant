import { renderNewPage } from "./screenUpdater";

const allBtns = document.querySelectorAll('button');

function listenersInit(){
  allBtns.forEach(btn => {
    btn.addEventListener('click', event => {
      allBtns.forEach(btn => btn.classList.remove('active'));
      btn.classList.add('active');
      renderNewPage(btn.id);
    })
  })
}

export { listenersInit }