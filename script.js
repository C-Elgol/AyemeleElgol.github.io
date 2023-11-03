document.addEventListener("click", function() {
    let navItems = document.querySelectorAll(".nitems");

    navItems.forEach(item => {
        item.addEventListener("click", function() {
            // Remove the 'active' class from all nav items
            navItems.forEach(navItem => {
                navItem.classList.remove("active");
            });

            // Add the 'active' class to the clicked nav item
            this.classList.add("active");
        });
    });
});

let menu = document.querySelector('#menu');
let nav = document.querySelector('.nav');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    nav.classList.add('active');
};


ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 500
});
ScrollReveal().reveal('.heads, .imgss ', { origin: 'top' }); 
ScrollReveal().reveal('.imgs, .abouts, .services, .port, .form', { origin: 'bottom' });
ScrollReveal().reveal('h1 ', { origin: 'left' }); 



const typed = new Typed('.multiple-text', {
    strings: ['Frontend developer', 'Graphic designer', 'Web designer', '...'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

let userRating = 0;

function rate(stars) {
    userRating = stars;
    updateStarsDisplay();
}

function updateStarsDisplay() {
    const stars = document.querySelectorAll('.star');
    stars.forEach((star, index) => {
        if (index < userRating) {
            star.classList.add('filled');
        } else {
            star.classList.remove('filled');
        }
    });
    document.getElementById('userRating').textContent = userRating;
}
