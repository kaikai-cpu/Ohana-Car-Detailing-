document.addEventListener('DOMContentLoaded', function() {
    // Function to toggle blog content display on click (for mobile devices)
    function toggleBlogContent(event) {
        const parentCard = event.target.closest('.banner__card');
        if (!parentCard) return;
        
        const blogContent = parentCard.querySelector('.blog__content');
        if (!blogContent) return;
        
        // Toggle the 'show-content' class on the blog content
        blogContent.classList.toggle('show-content');
    }

    // Check if the device is mobile (using a simple check)
    function isMobileDevice() {
        return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
    }

    // Attach appropriate event listeners based on device type
    const bannerCards = document.querySelectorAll('.banner__card');
    bannerCards.forEach(card => {
        if (isMobileDevice()) {
            card.addEventListener('click', toggleBlogContent);
        } else {
            // For desktop, maintain hover behavior
            card.addEventListener('mouseenter', function() {
                const blogContent = this.querySelector('.blog__content');
                if (blogContent) {
                    blogContent.classList.add('show-content');
                }
            });
            card.addEventListener('mouseleave', function() {
                const blogContent = this.querySelector('.blog__content');
                if (blogContent) {
                    blogContent.classList.remove('show-content');
                }
            });
        }
    });

    // Other existing code remains unchanged below this line

    const menuBtn = document.getElementById("menu-btn");
    const navLinks = document.getElementById("nav-links");
    const menuBtnIcon = menuBtn.querySelector("i");

    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("open");
        const isOpen = navLinks.classList.contains("open");
        menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
    });

    navLinks.addEventListener("click", (event) => {
        if (event.target.tagName === "A") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Get the target section's ID from the href attribute
            const targetId = event.target.getAttribute("href").substring(1);

            // Use scrollIntoView with smooth behavior
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });

            // Close the mobile menu if open (optional)
            navLinks.classList.remove("open");
            menuBtnIcon.setAttribute("class", "ri-menu-line");
        }
    });

    const scrollRevealOption = {
        origin: "bottom",
        distance: "50px",
        duration: 1000,
    };

    // Header container animations
    ScrollReveal().reveal(".header__content h1", {
        ...scrollRevealOption,
        delay: 500,
    });

    ScrollReveal().reveal(".header__content .header__btn", {
        ...scrollRevealOption,
        delay: 1000,
    });

    // Book Now button, redirects to a booking page
    const bookNowBtns = document.querySelectorAll(".btn#book-btn");
    bookNowBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSdkqNIbjfQNQ2Hd2eP4GMAcR0FTzJKzRPreKCGpJgOQeHAZoQ/viewform";
        });
    });

    // Instagram redirect
    const igNowBtn = document.getElementById("ig-btn");
    igNowBtn.addEventListener("click", () => {
        window.location.href = "https://www.instagram.com/ohanacardetailing/";
    });

    // Instagram icon redirect
    const igIcon = document.querySelector(".footer__socials a i");
    igIcon.addEventListener("click", () => {
        window.location.href = "https://www.instagram.com/ohanacardetailing/";
    });

    // About container animations
    ScrollReveal().reveal(".about__container .section__header", {
        ...scrollRevealOption,
    });

    ScrollReveal().reveal(".about__container .section__description", {
        ...scrollRevealOption,
        delay: 1000,
    });

    // Clone Instagram content
    const instagram = document.querySelector(".instagram__flex");
    const instagramContent = Array.from(instagram.children);

    instagramContent.forEach(item => {
        const duplicateNode = item.cloneNode(true);
        duplicateNode.setAttribute("aria-hidden", true);
        instagram.appendChild(duplicateNode);
    });
});
