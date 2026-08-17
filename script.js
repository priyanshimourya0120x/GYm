// ================= NAVBAR =================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navMenu.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});


// Close menu after clicking a link

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


// ================= COUNTER =================

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const target = Number(counter.dataset.target);

        let current = 0;

        const speed = target / 100;

        const updateCounter = () => {

            current += speed;

            if (current < target) {

                counter.textContent = Math.ceil(current);

                requestAnimationFrame(updateCounter);

            } else {

                counter.textContent = target + "+";

            }

        };

        updateCounter();

        observer.unobserve(counter);

    });

}, {
    threshold: 0.5
});


counters.forEach(counter => {
    counterObserver.observe(counter);
});


// ================= JOIN FORM =================

const joinForm = document.getElementById("joinForm");
const formMessage = document.getElementById("formMessage");

joinForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const plan = document.getElementById("plan").value;

    if (!name || !phone || !plan) {

        formMessage.textContent =
            "Please fill all required fields.";

        return;
    }

    formMessage.textContent =
        `Thank you ${name}! Your ${plan} enquiry has been submitted.`;

    joinForm.reset();

});


// ================= CURRENT YEAR =================

console.log("IRONFIT GYM Website Loaded");



/* =========================================
   TRAINER + MEMBERSHIP 3D EFFECT
========================================= */

const trainerCards =
    document.querySelectorAll(
        ".trainer-card, .batch-card, .membership-card"
    );


trainerCards.forEach(card => {

    card.addEventListener("mousemove", function(e) {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -5;

        const rotateY =
            ((x - centerX) / centerX) * 5;

        this.style.transform =
            `perspective(900px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;

    });


    card.addEventListener("mouseleave", function() {

        this.style.transform = "";

    });

});


/* =========================================
   MEMBERSHIP BUTTON CLICK
========================================= */

const membershipButtons =
    document.querySelectorAll(".membership-btn");

membershipButtons.forEach(button => {

    button.addEventListener("click", () => {

        console.log("Membership selected");

    });

});


/* =========================================
   PAGE LOAD
========================================= */

console.log(
    "IRONFIT Trainers & Membership Page Loaded!"
);


/* ================= GALLERY 3D EFFECT ================= */

const galleryItems =
    document.querySelectorAll(".gallery-item");

galleryItems.forEach(item => {

    item.addEventListener("mousemove", (e) => {

        const rect = item.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -4;

        const rotateY =
            ((x - centerX) / centerX) * 5;

        item.style.transform =
            `perspective(900px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;
    });


    item.addEventListener("mouseleave", () => {

        item.style.transform = "";

    });

});


/* =====================================================
   IRONFIT CONTACT FORM
===================================================== */

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener("submit", function(e) {

        e.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const interest =
            document.getElementById("interest").value;

        const message =
            document.getElementById("message").value.trim();


        if (!name || !phone) {

            alert(
                "Please enter your name and phone number."
            );

            return;
        }


        const whatsappText =
`Hello IRONFIT GYM!

Name: ${name}
Phone: ${phone}
Interested In: ${interest || "General Enquiry"}

Message:
${message || "I want to know more about IRONFIT Gym."}`;


        const whatsappURL =
            "https://wa.me/919876543210?text=" +
            encodeURIComponent(whatsappText);


        window.open(
            whatsappURL,
            "_blank"
        );


        contactForm.reset();

    });

}