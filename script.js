/* ================= SCROLL ================= */

function scrollToSection(id) {

    const section = document.getElementById(id);

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* ================= SOUND ================= */

let soundEnabled = true;


function toggleSound() {

    soundEnabled = !soundEnabled;

    const button = document.querySelector(".sound-button");

    if (soundEnabled) {

        button.innerHTML = "🔊";

    } else {

        button.innerHTML = "🔇";

    }

}


/* ================= MODAL ================= */

function showWarning() {

    const modal =
        document.getElementById("warningModal");

    modal.classList.add("active");

}


function closeWarning() {

    const modal =
        document.getElementById("warningModal");

    modal.classList.remove("active");

}


/* ================= CHARACTER HOVER ================= */

const cards =
    document.querySelectorAll(".character-card");


cards.forEach(card => {

    card.addEventListener("mousemove", function(event) {

        const rect =
            card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            (y - centerY) / 25;

        const rotateY =
            (centerX - x) / 25;

        card.style.transform =
            `perspective(800px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)
             scale(1.02)`;

    });


    card.addEventListener("mouseleave", function() {

        card.style.transform =
            "perspective(800px) rotateX(0) rotateY(0) translateY(0) scale(1)";

    });

});


/* ================= RANDOM GLITCH ================= */

const logo =
    document.querySelector(".logo");


setInterval(() => {

    if (!logo) return;

    logo.style.transform =
        "translateX(-2px)";

    setTimeout(() => {

        logo.style.transform =
            "translateX(2px)";

    }, 60);


    setTimeout(() => {

        logo.style.transform =
            "translateX(0)";

    }, 120);

}, 7000);


/* ================= TERMINAL ================= */

const terminalLines =
    document.querySelectorAll(".terminal-body p");


terminalLines.forEach((line, index) => {

    line.style.opacity = "0";

    setTimeout(() => {

        line.style.transition =
            "opacity 0.5s ease";

        line.style.opacity = "1";

    }, 400 + index * 500);

});


/* ================= KEYBOARD ================= */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        closeWarning();

    }

});


/* ================= SECRET ================= */

let clicks = 0;


const footerLogo =
    document.querySelector(".footer-logo");


if (footerLogo) {

    footerLogo.addEventListener("click", () => {

        clicks++;

        if (clicks === 5) {

            alert(
                "ARCHIVO OCULTO DESBLOQUEADO...\n\n" +
                "NO CONFÍES EN NADIE."
            );

            clicks = 0;

        }

    });

}


/* ================= CONSOLE ================= */

console.log(
`
███████╗ ██████╗ ██████╗ ███████╗ █████╗ ██╗  ██╗███████╗███╗   ██╗
██╔════╝██╔═══██╗██╔══██╗██╔════╝██╔══██╗██║ ██╔╝██╔════╝████╗  ██║
█████╗  ██║   ██║██████╔╝███████╗███████║█████╔╝ █████╗  ██╔██╗ ██║
██╔══╝  ██║   ██║██╔══██╗╚════██║██╔══██║██╔═██╗ ██╔══╝  ██║╚██╗██║
██║     ╚██████╔╝██║  ██║███████║██║  ██║██║  ██╗███████╗██║ ╚████║
╚═╝      ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═══╝

FORSAKEN ARCHIVES
SYSTEM ONLINE
`
);