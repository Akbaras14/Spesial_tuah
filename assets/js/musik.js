document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btn");
    const audio = document.getElementById("myAudio");
    const body = document.body;

    const navigationType = performance.getEntriesByType("navigation")[0]?.type;
    if (navigationType === "reload") {
        localStorage.removeItem("musicPlaying");
        localStorage.removeItem("musicTime");
        window.location.href = "index.html";
        return; 
    }
    if (localStorage.getItem("musicPlaying") === "true") {
        const savedTime = parseFloat(localStorage.getItem("musicTime")) || 0;
        audio.currentTime = savedTime;
        audio.play().catch(err => console.log("Autoplay dicegah:", err));
    }
    btn.addEventListener("click", () => {
        audio.muted = false;
        audio.play().then(() => {
            localStorage.setItem("musicPlaying", "true");
            localStorage.setItem("musicTime", audio.currentTime);
            audio.pause();
            body.classList.add("fade-out");
            setTimeout(() => {
                window.location.href = "gallery.html";
            }, 1000);
        }).catch(error => {
            console.error("Gagal memutar musik:", error);
        });
    });
    if (window.location.pathname.includes("index.html")) {
        audio.pause();
        audio.currentTime = 0;
        localStorage.removeItem("musicPlaying");
        localStorage.removeItem("musicTime");
    }
});



