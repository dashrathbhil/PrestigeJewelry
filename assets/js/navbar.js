const toggleBtn = document.querySelector('.navbar-toggler i');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');

document.querySelector('.navbar-toggler').addEventListener('click', () => {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    // Toggle icon
 
});

// Close menu on overlay click
overlay.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
  
});




// let sidebar = document.querySelector('.sidebar');
// const navbarToggler = document.querySelector('.navbar-toggler');


// navbarToggler.addEventListener('click', () => {
//     sidebar.classList.toggle('active');

// });


// document.addEventListener('click', (event) => {
//     if (!sidebar.contains(event.target) && !navbarToggler.contains(event.target)) {
//         sidebar.classList.remove('active');
//     }
// });