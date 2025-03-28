// const sidebar = document.querySelector(".sidebar");
// const navbarToggler = document.querySelector(".navbar-toggler");

// navbarToggler.addEventListener("click", () => {
//   sidebar.classList.toggle("active");
// });

// document.addEventListener("click", (event) => {
//   if (
//     !sidebar.contains(event.target) &&
//     !navbarToggler.contains(event.target)
//   ) {
//     sidebar.classList.remove("active");
//   }
// });
//sidebar
const sidebar = document.querySelector(".sidebar");
const navbarToggler = document.querySelector(".navbar-toggler");

navbarToggler.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

document.addEventListener("click", (event) => {
  if (
    !sidebar.contains(event.target) &&
    !navbarToggler.contains(event.target)
  ) {
    sidebar.classList.remove("active");
  }
});
// VIDEO
const videoBox = document.getElementById("videoBox");
const thumb = document.getElementById("play-button");

if (videoBox && thumb) {
  thumb.addEventListener("click", () => {
    videoBox.innerHTML = `<iframe width="100%" height="315" src="https://www.youtube.com/embed/aqz-KE-bpKQ?si=-ovZGrrVpUPfBRiR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
  });
}

// PASSWORD TOGGLE
// const passwordInput = document.getElementById("password");

// passwordInput.addEventListener("input", () => {
//   if (passwordInput.value.trim() === "") {
//     passwordValidation.innerText = "Enter password";
//     passwordValidation.style.color = "red";
//     userValidation.style.display = "block";

//   } else if (passwordInput.value.length < 6) {
//     passwordValidation.innerText = "Password must be at least 6 characters";
//     passwordValidation.style.color = "orange";
//     userValidation.style.display = "block";
//     return false;
//   } else {
//     passwordValidation.style.display = "none";
//     // passwordValidation.style.color = "green";

//   }
// });

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
});
const passwordInput = document.getElementById("password");
const passwordValidation = document.getElementById("passwordvalidation");
const userName = document.getElementById("username");
const userNameValidation = document.getElementById("namevalidation");
const rememberMeCheckbox = document.getElementById("rememberme");
function validatePassword() {
  if (passwordInput.value.trim() === "") {
    passwordValidation.innerText = "Enter password";
    passwordValidation.style.color = "red";
    passwordValidation.style.display = "block";
    return false;
  } else if (passwordInput.value.length < 6) {
    passwordValidation.innerText = "Password must be at least 6 characters";
    passwordValidation.style.color = "orange";
    passwordValidation.style.display = "block";
    return false;
  } else {
    passwordValidation.style.display = "none";
    return true;
  }
}
passwordInput.addEventListener("input", validatePassword);
function validateUsername() {
  if (userName.value.trim() === "") {
    userNameValidation.innerText = "Username is required";
    userNameValidation.style.color = "red";
    userNameValidation.style.display = "block";
    return false;
  } else {
    userNameValidation.style.display = "none";
    return true;
  }
}
userName.addEventListener("input", validateUsername);

// Use the function in an event listener
loginbtn.addEventListener("click", () => {
  let isUsernameValid = validateUsername();
  let isPasswordValid = validatePassword();

  if (isUsernameValid && isPasswordValid) {
    // console.log("done");

    if (rememberMeCheckbox.checked) {
      localStorage.setItem("userName", userName.value);
      sessionStorage.setItem("userPassword", passwordInput.value);
    } else {
      localStorage.removeItem("userName");
      sessionStorage.removeItem("userPassword");
    }

    window.location.href = "index.html";
  }
});
const togglePassword = document.getElementById("togglePassword");
const eyeIcon = document.getElementById("eyeIcon");
if (passwordInput && togglePassword && eyeIcon) {
  togglePassword.addEventListener("click", () => {
    const type =
      passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);

    eyeIcon.classList.toggle("fa-eye");
    eyeIcon.classList.toggle("fa-eye-slash");
  });
}

//login

// let loginbtn = document.getElementById("loginbtn");
