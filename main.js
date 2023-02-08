let menu = document.getElementById("toggle");
let menunav = document.getElementById("menu-navbar");
let closemenu = document.getElementById("closemenu");


menu.addEventListener("click",() => {

    menunav.style.display = 'flex';
    closemenu.style.display = 'block';
    menu.style.display = 'none';

})

closemenu.addEventListener("click",() => {

    menunav.style.display = 'none';
    closemenu.style.display = 'none';
    menu.style.display = 'block';
    
})