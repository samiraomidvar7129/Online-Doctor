document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("register_form--inner");
  const loginForm = document.getElementById("login_form--inner");
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      validatetRegisterForm();
    });
  }
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      validateLoginForm();
    });
  }
});
const validatetRegisterForm = () => {
  const fullName = document.getElementById("register-fullName").value;
  const phoneNumber = document.getElementById("register-number").value;
  const password = document.getElementById("register-password").value;

  const fullNameError = document.querySelector(".fullName-error");
  const phoneError = document.querySelector(".phone-error");
  const passwordError = document.querySelector(".password-error");

  let isValid = true;

  // Validate useName
  if (!fullName || fullName.length < 4) {
    fullNameError.textContent = " لطفا نام کامل خود را وارد کنید ";
    isValid = false;
  } else {
    fullNameError.textContent = "";
  }

  // Validate phoneNumber
  const phoneRegex = /^09\d{9}$/;

  if (!phoneRegex.test(phoneNumber)) {
    phoneError.textContent = "شماره تماس باید ۱۱ رقمی و با ۰۹ شروع شود";
    isValid = false;
  } else {
    phoneError.textContent = "";
  }

  // Validate password
  const passwordIsValid =
    password &&
    password.length >= 8 &&
    password.length <= 16 &&
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /[0-9]/.test(password) &&
    /[!@#$%^&*(),.?":{}|<>]/.test(password);

  if (!passwordIsValid) {
    passwordError.textContent =
      "رمز عبور باید حداقل ۸ و حداکثر ۱۶ کاراکتر و شامل کاراکترهای خاص و اعداد باشد";
    isValid = false;
  } else {
    passwordError.textContent = "";
  }

  // Success userData

  if (isValid) {
    const userData = { fullName, phoneNumber, password };
    localStorage.setItem("userData", JSON.stringify(userData));

    swal({
      title: "ثبت نام موفق!",
      text: "در حال انتقال به صفحه ورود... لطفاً منتظر بمانید",
      icon: "success",
      buttons: false, // Hide button
    });


    setTimeout(() => {

      // Reset Form
      document.getElementById("register_form--inner").reset();
  
      // Clean Errors
      document.querySelectorAll(".text-danger").forEach(el => el.textContent = "");
  
      // Transfer to the login page
      
      setTimeout(() => {
        window.location.href = "login.html";
      }, 2000);
    }, 100); 
  }};
//?---------------Show | Hide Password------------------------>

document.addEventListener("DOMContentLoaded", () => {
  // register toggle
  const togglePassword = document.getElementById("toggle-registerPassword");
  const passwordInput = document.getElementById("register-password");
  const eyeIcon = document.getElementById("eye-icon");

  if (togglePassword && passwordInput && eyeIcon) {
    togglePassword.addEventListener("click", () => {
      const isPassword = passwordInput.type === "password";
      passwordInput.type = isPassword ? "text" : "password";
      eyeIcon.src = isPassword
        ? "Assets/imgs/icons/show.png"
        : "Assets/imgs/icons/hide.png";
      eyeIcon.alt = isPassword ? "show" : "hide";
    });
  }

  // login toggle
  const toggleLoginPassword = document.getElementById("toggle-loginPassword");
  const loginPasswordInput = document.getElementById("login-password");
  const loginEyeIcon = document.getElementById("eye-loginIcon");

  if (toggleLoginPassword && loginPasswordInput && loginEyeIcon) {
    toggleLoginPassword.addEventListener("click", () => {
      const isPassword = loginPasswordInput.type === "password";
      loginPasswordInput.type = isPassword ? "text" : "password";
      loginEyeIcon.src = isPassword
        ? "Assets/imgs/icons/show.png"
        : "Assets/imgs/icons/hide.png";
      loginEyeIcon.alt = isPassword ? "show" : "hide";
    });
  }
});

// ?-------------Show | Hide Password---------------------------------->
// ?------------------------validateLoginForm-------------------------->
const validateLoginForm = () => {
  const fullName = document.getElementById("login-fullName").value.trim();
  const password = document.getElementById("login-password").value.trim();
  if (!fullName || !password) {
    swal({
      title: "خطا",
      text: "کاربرگرامی ! لطفا تمامی فیلد ها را تکمیل کنید",
      icon: "error",
      button: "باشه",
    });
    return;
  }
  const getStoredUser = JSON.parse(localStorage.getItem("userData"));
  if (!getStoredUser)
    swal({
      title: "خطا",
      text: "متاسفانه کاربر یافت نشد",
      icon: "error",
      button: "دوباره امتحان میکنم",
    });
  if (
    getStoredUser.fullName === fullName &&
    getStoredUser.password === password
  ) {
    swal({
      title: "خوش آمدید",
      text: "با موفقیت وارد شدید   ",
      icon: "success",
      button: "ورود ",
    }).then(() => {
      window.location.href = "index.html";
    });
    return;
  } else {
    swal({
      title: "لطفا دقت کنید   ",
      text: " نلم کاربری یا رمز عبور نادرست است",
      icon: "error",
      button: "دوباره تلاش میکنم ",
    });
    return;
  }
};
document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("register_form--inner");
  if (registerForm) {
    registerForm.addEventListener("submit", validatetRegisterForm);
  }
  const loginForm = document.getElementById("login_form--inner");
  if (loginForm) {
    loginForm.addEventListener("submit", validateLoginForm);
  }
});
