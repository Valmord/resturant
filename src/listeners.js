const homeBtn = document.querySelector('#home');
const menuBtn = document.querySelector('#menu');
const aboutBtn = document.querySelector('#about');
const allBtns = document.querySelectorAll('button');

function listenersInit(){
  allBtns.forEach(btn => {
    btn.addEventListener('click', event => {
      allBtns.forEach(btn => btn.classList.remove('active'));
      btn.classList.add('active');
    })
  })
}

export { listenersInit }