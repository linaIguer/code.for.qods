const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");



sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});


let wind = document.querySelector("#window-container");
const links = document.querySelectorAll("#content-block"),
outer= document.querySelector(".outerContainer");
for(i=0; i<links.length; i++){
  links[i].addEventListener("click", function(event) {
    event.preventDefault();
    console.log(wind.style.display)
    wind.classList.add("Active");
    outer.style.display= "block";
  });
}

outer.addEventListener("click",() => {
  outer.style.display= "none";
})