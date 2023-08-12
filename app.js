// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');

 function myFunction(e) {
            e.target.className = "active";
        }

window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);