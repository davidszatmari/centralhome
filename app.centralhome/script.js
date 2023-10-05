function openPopup() {
  var popup = document.getElementById("popup");
  var body = document.body;
  popup.style.display = "block";
  body.classList.add("popup-open");
}

function closePopup() {
  var popup = document.getElementById("popup");
  var body = document.body;
  popup.style.display = "none";
  body.classList.remove("popup-open");
}

var hasShownPopup = localStorage.getItem("hasShownPopup");
if (!hasShownPopup) {
  openPopup();
  localStorage.setItem("hasShownPopup", "true");
}
