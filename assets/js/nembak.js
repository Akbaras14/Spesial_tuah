 const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
let noClickCount = 0;

yesBtn.addEventListener("click", () => {
  Swal.fire({
    title: "Awww! 🥰",
    text: "Aku juga senang kamu mau jadi bagian spesial di hidupku ❤️",
    icon: "success",
    confirmButtonText: "Chat yuk!",
    confirmButtonColor: "#ff69b4",
    backdrop: `
      rgba(1, 2, 3, 1)
      blur(100px)
    `
  }).then(() => {
    const phoneNumber = "085893801972";
    const message = "Hai! Aku juga senang kamu mau jadi bagian spesial di hidupku ❤️";
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappLink;
  });
});

noBtn.addEventListener("click", () => {
  noClickCount++;

  if (noClickCount === 1) {
    noBtn.style.position = "absolute";
  }

  if (noClickCount >= 10) {
    Swal.fire({
      title: "Yah 😢",
      text: "Sayang sekali kita belum berjodoh...",
      icon: "info",
      confirmButtonText: "Kembali ke awal",
      confirmButtonColor: "#6c757d",
      backdrop: `
        rgba(0, 0, 0, 0.7)
        blur(5px)
      `
    }).then(() => {
      window.location.href = "index.html";
    });
    return;
  }

  const container = document.querySelector(".container-nembak");
  const maxX = container.clientWidth - noBtn.offsetWidth;
  const maxY = container.clientHeight - noBtn.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
});
function spawnHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.className = "bi bi-heart-fill heart";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 20 + "px";
  document.querySelector(".hearts-container").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(spawnHeart, 500);
document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("galleryAudio");
    
    
    const savedTime = localStorage.getItem("musicTime");
    if (savedTime) {
        audio.currentTime = parseFloat(savedTime);
    }

    audio.play().catch(e => console.warn("Autoplay mungkin diblokir:", e));

    setInterval(() => {
        localStorage.setItem("musicTime", audio.currentTime);
    }, 1000);
});
document.addEventListener("DOMContentLoaded", () => {
    const navigationType = performance.getEntriesByType("navigation")[0]?.type;

    if (navigationType === "reload") {
      window.location.href = "index.html";
    }
  });