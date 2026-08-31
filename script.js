/* =====================================================
           MOBILE MENU
        ===================================================== */

        const menuButton =
            document.getElementById("menuButton");

        const navLinks =
            document.getElementById("navLinks");


        menuButton.addEventListener("click", () => {

            navLinks.classList.toggle("active");

        });


        /* Close mobile menu */

        document.querySelectorAll(".nav-links a")
            .forEach(link => {

                link.addEventListener("click", () => {

                    navLinks.classList.remove("active");

                });

            });


        /* =====================================================
           SCROLL REVEAL
        ===================================================== */

        const revealElements =
            document.querySelectorAll(".reveal");


        const revealObserver =
            new IntersectionObserver(

                (entries) => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add("visible");

                            revealObserver.unobserve(
                                entry.target
                            );

                        }

                    });

                },

                {
                    threshold: 0.12
                }

            );


        revealElements.forEach(element => {

            revealObserver.observe(element);

        });


        /* =====================================================
           NAVBAR SCROLL EFFECT
        ===================================================== */

        const navbar =
            document.querySelector("nav");


        window.addEventListener("scroll", () => {

            if (window.scrollY > 50) {

                navbar.style.background =
                    "rgba(3,3,3,0.94)";

            } else {

                navbar.style.background =
                    "rgba(3,3,3,0.78)";

            }

        });


        /* =====================================================
           CONTACT FORM SUBMISSION
        ===================================================== */

        const contactForm =
            document.getElementById("contactForm");

        const formStatus =
            document.getElementById("formStatus");


        if (contactForm) {

            contactForm.addEventListener("submit", async (event) => {

                event.preventDefault();

                formStatus.textContent = "Sending...";
                formStatus.className = "form-status";

                try {

                    const response = await fetch(contactForm.action, {

                        method: "POST",

                        body: new FormData(contactForm),

                        headers: {
                            "Accept": "application/json"
                        }

                    });

                    if (response.ok) {

                        formStatus.textContent =
                            "Message sent — thanks, I'll reply soon.";

                        formStatus.className = "form-status success";

                        contactForm.reset();

                    } else {

                        formStatus.textContent =
                            "Something went wrong. Please email me directly.";

                        formStatus.className = "form-status error";

                    }

                } catch (error) {

                    formStatus.textContent =
                        "Something went wrong. Please email me directly.";

                    formStatus.className = "form-status error";

                }

            });

        }


        /* =====================================================
           INTERACTIVE CARD GLOW
        ===================================================== */

        document.querySelectorAll(
            ".stack-card, .project, .metric"
        ).forEach(card => {


            card.addEventListener(
                "mousemove",
                (event) => {

                    const rect =
                        card.getBoundingClientRect();


                    const x =
                        event.clientX - rect.left;


                    const y =
                        event.clientY - rect.top;


                    card.style.background =
                        `radial-gradient(
                            500px circle at ${x}px ${y}px,
                            rgba(0,255,135,0.045),
                            #080808 45%
                        )`;

                }
            );


            card.addEventListener(
                "mouseleave",
                () => {

                    card.style.background = "";

                }
            );

        });
