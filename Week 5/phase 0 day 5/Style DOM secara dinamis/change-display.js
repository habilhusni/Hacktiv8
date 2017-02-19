var heading1 = document.getElementById('heading-1');
var removeHeading1Btn = document.getElementById('remove-heading-1');
removeHeading1Btn.addEventListener('click', function() {
  heading1.style.display = 'none'; // Hilangkan <h1> dengan css
});