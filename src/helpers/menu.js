const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");
const containerButton = document.querySelector('.container')

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    containerButton.classList.toggle("change");
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
    
  } else {
    menu.classList.add("showMenu");
    containerButton.classList.toggle("change");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
   
  }
}

hamburger.addEventListener("click", toggleMenu);
menu.addEventListener('click', () => {
  if (menu.classList.contains("showMenu")) {
    containerButton.classList.toggle("change");
    menu.classList.remove("showMenu")
  }
} )
