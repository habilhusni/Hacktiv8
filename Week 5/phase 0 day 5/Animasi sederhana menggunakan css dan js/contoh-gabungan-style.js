var blackBox = document.getElementById('black-box');

var jumpBox = document.getElementById('box-jump');

jumpBox.addEventListener('click', function() {
  blackBox.style.background = 'green';
  blackBox.style.width = '100%';
  setTimeout(function() {
    blackBox.style.background = 'black';
    blackBox.style.width = '100px';
  }, 500);
});