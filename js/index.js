const loginButton = document.querySelector(".login-button");
const signUpButton = document.querySelector(".sign-up-button");
const loginForm = document.querySelector(".login-form");
const signUpForm = document.querySelector(".sign-up-form");

loginButton.addEventListener("click", () => {
  if (loginForm.style.transform === "translate(-50%, -50%) scale(0)") {
    loginForm.style.transform = "translate(-50%, -50%) scale(1)";
    loginForm.style.zIndex = "10";
    signUpForm.style.transform = "translate(-50%, -50%) scale(0)";
    signUpForm.style.zIndex = "1";
  } else {
    loginForm.style.transform = "translate(-50%, -50%) scale(0)";
  }
});

signUpButton.addEventListener("click", () => {
  if (signUpForm.style.transform === "translate(-50%, -50%) scale(0)") {
    signUpForm.style.transform = "translate(-50%, -50%) scale(1)";
    signUpForm.style.zIndex = "10";
    loginForm.style.transform = "translate(-50%, -50%) scale(0)";
    loginForm.style.zIndex = "1";
  } else {
    signUpForm.style.transform = "translate(-50%, -50%) scale(0)";
  }
});
