function increaseImageSize() {
  var image = document.querySelector('.rounded-image');
  var currentWidth = parseInt(image.width);
  var newWidth = currentWidth + 50;
  image.style.width = newWidth + 'px';
}

function decreaseImageSize() {
  var image = document.querySelector('.rounded-image');
  var currentWidth = parseInt(image.width);
  var newWidth = currentWidth - 50;
  image.style.width = newWidth + 'px';
}
