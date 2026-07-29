// ==========================
// SHUKURULLO ❤️ NILUFARXON
// Wedding Invitation
// ==========================

// Loader va musiqa

const loader = document.getElementById("loader");
const openBtn = document.getElementById("openBtn");
const music = document.getElementById("music");

openBtn.addEventListener("click", () => {

    loader.style.opacity = "0";

    setTimeout(() => {
        loader.style.display = "none";
    }, 700);

    music.play().catch(() => {});

});

// ==========================
// COUNTDOWN
// ==========================

const weddingDate = new Date("August 10, 2026 17:30:00").getTime();

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function updateCountdown(){

    const now = new Date().getTime();

    const distance = weddingDate - now;

    if(distance <= 0){

        days.innerHTML = "00";
        hours.innerHTML = "00";
        minutes.innerHTML = "00";
        seconds.innerHTML = "00";

        return;

    }

    days.innerHTML = Math.floor(distance / (1000*60*60*24));

    hours.innerHTML = Math.floor(
        (distance % (1000*60*60*24))
        /(1000*60*60)
    );

    minutes.innerHTML = Math.floor(
        (distance % (1000*60*60))
        /(1000*60)
    );

    seconds.innerHTML = Math.floor(
        (distance % (1000*60))
        /1000
    );

}

updateCountdown();

setInterval(updateCountdown,1000);
// ==========================
// MUSIC TOGGLE
// ==========================

const musicBtn = document.getElementById("musicBtn");

if (musicBtn) {

    musicBtn.addEventListener("click", () => {

        if (music.paused) {

            music.play();
            musicBtn.innerHTML =
                '<i class="fa-solid fa-volume-high"></i> Musiqa yoqilgan';

        } else {

            music.pause();
            musicBtn.innerHTML =
                '<i class="fa-solid fa-volume-xmark"></i> Musiqa o‘chirilgan';

        }

    });

}

// ==========================
// SMOOTH SCROLL
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });
