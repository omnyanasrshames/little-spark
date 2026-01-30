function createStar() {
  const colors = ["#F8C8DC", "#A4DECB", "#FFF5BA"]; // pink / mint / yellow
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.left = Math.random() * 100 + "vw"; // مكان أفقي عشوائي
  star.style.background = colors[Math.floor(Math.random() * colors.length)];
  star.style.width = star.style.height = (Math.random() * 5 + 5) + "px"; // حجم عشوائي
  star.style.animationDuration = (Math.random() * 3 + 2) + "s"; // مدة عشوائية
  document.body.appendChild(star);

  // إزالة النجمة بعد انتهاء الحركة
  setTimeout(() => {
    star.remove();
  }, 5000);
}

// نضيف نجمة كل 0.5 ثانية
setInterval(createStar, 500);