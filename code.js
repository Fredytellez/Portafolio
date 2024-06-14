// Inicializa el lottle de la imagen de perfil animada
console.log("La pagina esta conectada a Javascript");

lottie.loadAnimation({
  container: document.getElementById("lottie-animation"),
  render: "svg",
  loop: true,
  autoplay: true,
  path: "GD6214u0Qc.json",
});


/* 
let menu = document.querySelector("#menu-btn");
let header = document.querySelector(".header")

menu.onclick = () => {
  menu.classList.toggle("fa-times")
  header.classList.toggle("active")
}
 */
/* Ocultar menu */

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".navbar a")
  const header = document.querySelector(".header")
  const menu = document.querySelector("#menu-btn");


  menu.onclick = () => {
    menu.classList.toggle("fa-times")
    header.classList.toggle("active")

    /* if (menu.classList.contains("fa-times")) {
      header.classList.add("hidden")
    } else {
      document.classList.remove("hidden")
    } */
  }

})

let themeToggler = document.querySelector("#theme-toggler")

themeToggler.onclick = () => {
  themeToggler.classList.toggle("fa-sun")

  if (themeToggler.classList.contains("fa-sun")) {
    document.body.classList.add("active")
  }
  else {
    document.body.classList.remove("active")
  }
}

