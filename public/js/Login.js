const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = (() => {
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (() => {
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
});
signupLink.onclick = (() => {
    signupBtn.click();
    return false;
});


const form = document.querySelector('form'),
  userfield = form.querySelector('.username-field')
  userinput = form.querySelector('.username')
  emailField = form.querySelector('.email-field'),
  emailInput = emailField.querySelector('.email'),
  passField = form.querySelector('.create-password'),
  passInput = passField.querySelector('.password')


const togglePassword = document.querySelector('#togglePassword');


  togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = passInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passInput.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});
// ---- ---- Email Validation ---- ---- //
function checkEmail() {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailInput.value.match(emailPattern)) {
      return emailField.classList.add('invalid');
    }
    emailField.classList.remove('invalid');
  }

// ---- ---- Password Validation ---- ---- //
function createPass() {
    const passPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
    if (!passInput.value.match(passPattern)) {
      return passField.classList.add('invalid');
    }
    passField.classList.remove('invalid');  }

// ---- ---- Password Validation ---- ---- //
function checkUser() {
    const userPattern =
    /^[A-Za-z][A-Za-z0-9_]{7,29}$/;
  
    if (!userinput.value.match(userPattern)) {
      return userfield.classList.add('invalid');
    }
    userfield.classList.remove('invalid');  }


  form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkUser();
    checkEmail();
    createPass();
    emailInput.addEventListener('keyup', checkEmail);
    passInput.addEventListener('keyup', createPass);
  });
  

  