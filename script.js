function showSection(id, element) {

    // ----------------- HIDE ALL SECTIONS ----------------- //
    document.querySelectorAll(".section").forEach(sec => {
        sec.classList.remove("active");
    });

    // ----------------- SHOW SELECTED SECTION ----------------- //
    document.getElementById(id).classList.add("active");



    // ----------------- IMAGE BLUR LOGIC ----------------- //
    const imageBox = document.getElementById("profile-img-box");

    if (id === "intro") {
        imageBox.classList.remove("blur-img");
        imageBox.classList.add("full-img");
    } else {
        imageBox.classList.remove("full-img");
        imageBox.classList.add("blur-img");
    }



    // ----------------- LEFT HEADER SHOW/HIDE ----------------- //
    const leftHeader = document.getElementById("left-header");

    if (id === "intro") {
        leftHeader.classList.remove("show");   // hide in intro
    } else {
        leftHeader.classList.add("show");      // show in other pages
    }



    // ----------------- MOVE NEON INDICATOR ----------------- //
    const indicator = document.getElementById("indicator");
    indicator.style.top = element.offsetTop + "px";



    // ----------------- PARTICLES ONLY ON INTRO ----------------- //
    if (id === "intro") {
        createParticles();
    }
}


// =========================================================== //
//            PARTICLE CREATION FUNCTION (ACTIVE)             //
// =========================================================== //

function createParticles() {
    const introSection = document.getElementById('intro');

    // Only create particles if intro is active
    if (!introSection.classList.contains('active')) return;

    const particleContainer = introSection.querySelector('.particles');
    if (!particleContainer) return;

    // Prevent duplicate particles
    if (particleContainer.childElementCount > 0) return;

    // Create 30 glowing particles
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('span');

        // random horizontal position
        particle.style.left = Math.random() * 100 + "%";

        // random vertical position
        particle.style.top = Math.random() * 100 + "%";

        // random animation delay
        particle.style.animationDelay = (Math.random() * 5) + "s";

        // random size
        let size = 4 + Math.random() * 6;
        particle.style.width = size + "px";
        particle.style.height = size + "px";

        particleContainer.appendChild(particle);
    }
}


// ---------------- RUN ON PAGE LOAD ---------------- //
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
});







function openCert(id) {
    const modal = document.getElementById("certModal");
    const full = document.getElementById("fullCert");

    // Try JPG first
    full.src = id + ".jpg";

    full.onerror = () => {
        full.src = id + ".png";  
    };


    modal.style.display = "block";
}

function closeCert() {
    document.getElementById("certModal").style.display = "none";
}


 function openTab(tabId) {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

        event.target.classList.add('active');
        document.getElementById(tabId).classList.add('active');
}
