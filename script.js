function changeBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}

function changeTextColor(color) {
  document.body.style.color = color;
}

function showWelcomeMessage() {
  alert("Thanks for visiting my website!");
}

function enlargeImage(img) {
  img.style.transform = "scale(1.08)";
}

function shrinkImage(img) {
  img.style.transform = "scale(1)";
}

function highlightBox(box) {
  box.style.borderColor = "#8fd3ff";
  box.style.boxShadow = "0 0 12px rgba(143, 211, 255, 0.35)";
}

function unhighlightBox(box) {
  box.style.borderColor = "#222";
  box.style.boxShadow = "none";
}