document.addEventListener("DOMContentLoaded", function () {
  var signInForm = document.getElementById("signIn");

  signInForm.style.display = "none";
});

function toggleLoginForm() {
  var LogiInForm = document.getElementById("signIn");
  var SignUpForm = document.getElementById("signUp");

  LogiInForm.style.display = "block";
  SignUpForm.style.display = "none";
}

function toggleSignUpForm() {
  var LogiInForm = document.getElementById("signIn");
  var SignUpForm = document.getElementById("signUp");

  SignUpForm.style.display = "block";
  LogiInForm.style.display = "none";
}
