const nav = document.querySelector("nav");
const hamburguerBtn = document.querySelector(".hamburguer-btn");
const navList = document.querySelector(".nav-list");
const navLinks = document.querySelectorAll(".nav-list li a");

// Função para adicionar a classe .active ao menu e bloquear o scroll
function openMenu() {
    navList.classList.add("active");
    document.body.style.overflow = "hidden"; // Bloquear o scroll do body
}

// Função para remover a classe .active do menu e reativar o scroll
function closeMenu() {
    navList.classList.remove("active");
    document.body.style.overflow = "auto"; // Reativar o scroll do body
}

// Toggle do menu com o botão de hambúrguer
hamburguerBtn.addEventListener("click", () => {
    if (navList.classList.contains("active")) {
        closeMenu();
    } else {
        openMenu();
    }
});

// Fechar o menu quando um link for clicado
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        closeMenu();
    });
});

// Fechar o menu ao clicar fora do menu ou do botão de hambúrguer
document.addEventListener("click", (event) => {
    const target = event.target;
    const isInsideNav = navList.contains(target) || hamburguerBtn.contains(target);

    if (!isInsideNav) {
        closeMenu();
    }
});



// Quando a distancia que o usuario rolar a partir do topo for maior ou igual a altura do elemento, adicione a sombra e a borda inferior. 


window.addEventListener('scroll', function() {
    if (window.scrollY >= nav.scrollHeight) {
      nav.style.boxShadow = '0px 0px 20px hsla(0,0%,0%,.2)';
    } else {
      nav.style.boxShadow = '0px 0px 0px';
    }


  });

  let prevScrollY = window.scrollY;

  
window.addEventListener('scroll', function(event) {
  var currentScrollY = window.scrollY;

  if (currentScrollY > prevScrollY) {
    nav.style.transform = `translateY(-100%)`
    nav.style.transition = `200ms`
  } else if (currentScrollY < prevScrollY) {
    nav.style.transform = `translateY(0%)`
  }

  prevScrollY = currentScrollY;
});
