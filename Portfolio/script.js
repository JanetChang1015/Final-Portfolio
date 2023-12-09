function openPopup(imageSrc, text) {
  var popup = document.getElementById('popup');
  var popupImage = document.getElementById('popupImage');
  var popupText = document.getElementById('popupText');

  popup.style.display = 'block';
  popupImage.src = imageSrc;
  popupText.textContent = text;
}

function closePopup() {
  var popup = document.getElementById('popup');
  popup.style.display = 'none';
}