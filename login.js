const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;
  if (username === "Vinay" && password === "Sohan") {
    alert("You have successfully logged in.");
    location.href = "file:///E:/hhhh/MyShowz-Movie-ticket-booking-website-master/index.html";
  } else {
    alert("Invalid Account.");
    loginErrorMsg.style.opacity = 1;
  }
});
