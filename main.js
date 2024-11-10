function submittingLogin(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  emailError.innerHTML = "";
  passwordError.innerHTML = "";
  if (email && password) window.location.href = "frontpage.html";
  else if (email && !password)
    passwordError.textContent = "Please type your password";
  else if (!email && password) emailError.innerHTML = "Please type your email";
  else {
    passwordError.innerHTML = "Please type your password";
    emailError.innerHTML = "Please type your email";
  }
}

function submittingSignup(event) {
  event.preventDefault();
  const fname = document.querySelector("#fname").value;
  const lname = document.querySelector("#lname").value;
  const email = document.querySelector("#semail").value;
  const password = document.querySelector("#spassword").value;
  const fnameError = document.getElementById("fnameError");
  const lnameError = document.getElementById("lnameError");
  const semailError = document.getElementById("semailError");
  const spasswordError = document.getElementById("spasswordError");
  fnameError.textContent = "";
  lnameError.textContent = "";
  semailError.textContent = "";
  spasswordError.textContent = "";
  if (!fname)
    fnameError.textContent = "Please type your First name";
  if (!lname)
    lnameError.textContent = "Please type your Last name";
  if (!email)
    semailError.textContent = "Please type your Email address";
  if (!password)
    spasswordError.textContent = "Please type your password";
  if (fname && lname && email && password)
    window.location.href = "frontpage.html";
}

const showpass = () =>{
  const show = document.getElementById('passShow')
  const password = document.getElementById('password')
  if(password.type == 'password'){
    password.type = 'text'
    show.innerHTML = '<ion-icon name="eye-off-outline"></ion-icon>'
  }
  else {
    password.type = 'password'
    show.innerHTML = '<ion-icon name="eye-outline"></ion-icon>'
  }
}
const showpass2 = () =>{
  const show = document.getElementById('passShow2')
  const password = document.getElementById('spassword')
  if(password.type == 'password'){
    password.type = 'text'
    show.innerHTML = '<ion-icon name="eye-off-outline"></ion-icon>'
  }
  else {
    password.type = 'password'
    show.innerHTML = '<ion-icon name="eye-outline"></ion-icon>'
  }
}
