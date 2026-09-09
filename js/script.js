/* ================= MOBILE MENU ================= */

function toggleMenu() {

    const navbar = document.getElementById("navbar");

    navbar.classList.toggle("show");

}


/* ================= HERO SLIDER ================= */

const slides = document.querySelectorAll(".hero-slide");

let currentSlide = 0;


function showSlide(index) {

    slides.forEach((slide) => {

        slide.classList.remove("active");

    });

    slides[index].classList.add("active");

}


if (slides.length > 0) {

    setInterval(() => {

        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        showSlide(currentSlide);

    }, 5000);

}


/* ================= SCROLL ANIMATION ================= */

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },

    {
        threshold: 0.15
    }

);


document
    .querySelectorAll(".info-card, .service, .about-preview")
    .forEach((element) => {

        element.style.opacity = "0";

        element.style.transform = "translateY(30px)";

        element.style.transition = "all 0.7s ease";

        observer.observe(element);

    });