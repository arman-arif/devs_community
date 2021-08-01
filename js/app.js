feather.replace();

const qc = function (selector) {
  return document.querySelector(selector);
}

const qca = function (selector) {
  return document.querySelector(selector);
}

const gei = function (id) {
  return document.getElementById(id);
}

// const on = function (event, callback) {
//   return addEventListener(event, callback);
// }

const log = function (string) {
  console.log(string);
}

let toggleMenu = qc("#toggleMenu");
let sidebar = qc(".sidebar");

toggleMenu.addEventListener('click',function(){
  sidebar.classList.toggle("hide");
  if(sidebar.className == "sidebar")
    toggleMenu.innerHTML = '<i data-feather="x"></i>';
  else
    toggleMenu.innerHTML = '<i data-feather="menu"></i>';
  feather.replace();
});
