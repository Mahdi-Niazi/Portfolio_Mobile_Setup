const humberger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-list");
const logo = document.querySelector(".logo");
const envelope = document.querySelector(".envelope");
const bars = document.querySelector(".fa-bars");
const xmark = document.querySelector(".fa-xmark");
humberger.addEventListener("click", () => {
    humberger.classList.toggle("active");
    navMenu.classList.toggle("active");
    logo.classList.toggle("active");
    envelope.classList.toggle("active");
    bars.classList.toggle("active");
    xmark.classList.toggle("active");
});
