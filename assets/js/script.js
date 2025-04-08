window.addEventListener("scroll", function () {
  let text = document.getElementById("kata2");
  if (window.scrollY > 50) {
 
    text.style.fontStyle = "italic";
    text.style.opacity = "1";
  } else {
    text.style.fontStyle = "normal";
    text.style.opacity = "0";
  }
});

document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("galleryAudio");

    if (localStorage.getItem("musicPlaying") !== "true") {
        document.body.classList.add("fade-out");
        setTimeout(() => {
            window.location.href = "index.html";
        }, 800);
    } else {
        const savedTime = localStorage.getItem("musicTime");
        if (savedTime) {
            audio.currentTime = parseFloat(savedTime);
        }

        audio.play().catch(error => {
            console.error("Autoplay dicegah oleh browser:", error);
        });
        setInterval(() => {
            localStorage.setItem("musicTime", audio.currentTime);
        }, 1000);
    }

    setTimeout(showEffects, 1000);
});

function showEffects() {
    document.body.classList.add("bg-show");
    document.querySelector('meta[name="theme-color"]').setAttribute("content", "pink");
    setInterval(createHeart, 100);
}

function createHeart() {
    const heart = document.createElement("i");
    heart.className = "bi bi-heart-fill heart"; 
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    heart.style.animationDuration = (Math.random() * 2 + 3) + "s"; 
    heart.style.opacity = Math.random() * 0.5 + 0.5; 
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}

document.addEventListener("mousemove", (event) => {
        const heart = document.createElement("div");
        heart.classList.add("heart-mouse");
        heart.style.left = `${event.clientX}px`;
        heart.style.top = `${event.clientY}px`;
        heart.style.animation = `fall ${Math.random() * 2 + 1}s linear forwards`;
        document.body.appendChild(heart);
        
        setTimeout(() => {
          heart.remove();
        }, 2000);
      });
