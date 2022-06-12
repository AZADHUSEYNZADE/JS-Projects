const container = document.getElementById("container");
const colors = ["red", "green", "yellow", "gray", "white"];

let count = 500;
for (let i = 0; i < count; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => {
    setColor(square);
  });
  square.addEventListener("mouseout", () => {
    removeColor(square);
  });
  container.appendChild(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.backGround = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor() {
  element.style.background = "#1d1d1d";
  element.style.boxShadow = "0 0 2px #000";
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
