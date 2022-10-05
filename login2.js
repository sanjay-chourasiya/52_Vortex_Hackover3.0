const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;
  if (username === "Sanjay" && password === "Aditya") {
    alert("You have successfully logged in.");
    location.href = "file:///E:/hhhh/MyShowz-Movie-ticket-booking-website-master/index.html";
  } else {
    alert("Enter a Valid Account");
    loginErrorMsg.style.opacity = 1;
  }
});
