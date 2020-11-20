const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

function loginUser() {
  var username = document.getElementById("username-form").value;
  var password = document.getElementById("password-form").value;
  console.log("Username: " + username + " Password: " + password);
}

function enterSite() {
  parent.open('home.html')
}