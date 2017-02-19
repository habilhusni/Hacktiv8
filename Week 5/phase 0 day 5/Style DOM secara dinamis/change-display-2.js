var heading1 = document.getElementById('heading-1');
var removeHeading1Btn = document.getElementById('remove-heading-1');
removeHeading1Btn.addEventListener('click', function() {
  if(heading1.style.display === 'block') { // Jika saat ini <h1> muncul
    heading1.style.display = 'none'; // Hilangkan <h1> dengan css
  }
  else if(heading1.style.display === 'none') { // Jika saat ini <h1> muncul
    heading1.style.display = 'block'; // Munculkan <h1> dengan css
  }
  else if(heading1.style.display === '') { // display = '' sama dengan display = 'block'
    heading1.style.display = 'none'; // Hilangkan <h1> dengan css
  }
});