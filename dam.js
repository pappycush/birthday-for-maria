function releaseHearts() {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.background = randomColor();
    document.getElementById("hearts-container").appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 4000);
  }
}

function randomColor() {
  const colors = ["#ff69b4", "#ff1493", "#ff6ec7", "#ffa07a", "#ffb6c1", "#ff85a2"];
  return colors[Math.floor(Math.random() * colors.length)];
}
