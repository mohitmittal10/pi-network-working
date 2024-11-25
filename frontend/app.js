const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const cross = document.querySelector(".cross");
const social = document.querySelector(".social-icon")





cross.style.display = "none";
hamburger.addEventListener("click", () => {
    nav.className = "new-nav";
    hamburger.style.display = "none";
    cross.style.display = "block";
  });


cross.addEventListener("click", ()=>{
   // nav.classList.toggle("nav");
    cross.style.display = "none";
    nav.className = "nav";
    hamburger.style.display = "block";
})