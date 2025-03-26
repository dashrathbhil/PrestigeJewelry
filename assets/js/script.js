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
const sidebar = document.querySelector('.sidebar');
const navbarToggler = document.querySelector('.navbar-toggler');


navbarToggler.addEventListener('click', () => {
    sidebar.classList.toggle('active');

});


document.addEventListener('click', (event) => {
    if (!sidebar.contains(event.target) && !navbarToggler.contains(event.target)) {
        sidebar.classList.remove('active');
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
// const passwordValidation = document.getElementById("passwordvalidation");
// const togglePassword = document.getElementById("togglePassword");
// const eyeIcon = document.getElementById("eyeIcon");
//   passwordInput.addEventListener("input", () => {
//     if (passwordInput.value === "") {
//       passwordValidation.innerText = "Enter password";
//       passwordValidation.style.color = "red";
//     } 
//     else if (passwordInput.value.length < 6) {
//       passwordValidation.innerText = "Password must be at least 6 characters";
//       passwordValidation.style.color = "orange";
//     } 
//     else {
//       passwordValidation.innerText = "Strong password!";
//       passwordValidation.style.color = "green";
//     }
//   });

// if (passwordInput && togglePassword && eyeIcon) {
//   togglePassword.addEventListener("click", () => {
//     const type =
//       passwordInput.getAttribute("type") === "password" ? "text" : "password";
//     passwordInput.setAttribute("type", type);

//     eyeIcon.classList.toggle("fa-eye");
//     eyeIcon.classList.toggle("fa-eye-slash");
//   });
// }

//login

// let loginbtn = document.getElementById("loginbtn");
