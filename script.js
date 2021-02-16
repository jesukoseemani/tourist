//const selectElement = (s) => document.querySelector(s);

//selectElement = ('.open')addEventlistener('click', () => {
  //selectElement = ('.nav-bar').classlist.add('active');
//});
//selectElement = ('.close').addEventlistener('click', () => {
  //selectElement = ('.nav-bar').classlist.remove('active');
//});


const open = document.querySelector('.open').addEventListener('click',openBar);
const close = document.querySelector('.close').addEventListener('click',closeBar);

function openBar(){
  const navBar = document.querySelector('.nav-bar');
  navBar.classList.add('active');

  setTimeout(function(){
    navBar.classList.remove('active');
  },4000);
};

function closeBar(){
  const navBar = document.querySelector('.nav-bar');
  navBar.classList.remove('active')
};




