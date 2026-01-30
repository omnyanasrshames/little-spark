function createStar() {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.left = Math.random() * 100 + "vw";
  star.style.animationDuration = (Math.random() * 3 + 2) + "s"; // مدة عشوائية
  star.style.width = star.style.height = (Math.random() * 5 + 5) + "px"; // حجم عشوائي
  document.body.appendChild(star);

  setTimeout(() => {
    star.remove();
  }, 5000); // يمسح النجمة بعد 5 ثواني
}

// كل 0.6 ثانية نضيف نجمة جديدة
setInterval(createStar, 600);