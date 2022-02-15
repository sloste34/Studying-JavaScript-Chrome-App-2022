const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

//use UPPERCASE when store string in variable.
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello! ${username}!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

//check whether user name saved or not
const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
  //if null, show Login form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  //if exists, show Hello sign.
  paintGreetings(savedUsername);
}
