const nav = document.querySelector(".nav-links");
const burger = document.querySelector('.burger'); /*select the burger class */   
const links = nav.querySelectorAll("a"); /* Select all 'a' tags*/

/**Do something whenever you click on the burger */
burger.addEventListener("click", () =>{
    nav.classList.toggle("nav-open");
    burger.classList.toggle("toggle");
})

links.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.toggle("nav-open");
        burger.classList.toggle("toggle");
    })
})