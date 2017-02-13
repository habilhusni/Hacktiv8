var pageFillMe = document.getElementById("fill-me");

var pageClassName = document.getElementsByClassName("change-all-of-me");

var pageHeadings = document.getElementsByTagName("h2");

// Mengubah nilai property dari fillMe
pageFillMe.innerHTML = 'HALO!';
var newPageFillMe = pageFillMe.innerHTML;
console.log('isi baru dari <h1 id="fill-me"> :' + newPageFillMe);

// Meloop array pageClassName
for(var i = 0; i < pageClassName.length; i++) {
  pageClassName[i].innerHTML      = 'HALO JUGA!';
  var currentPageClassNameContent  = pageClassName[i].innerHTML;
  console.log('isi <p class="change-all-of-me"> index ke ' + i + ': ' + currentPageClassNameContent);
}

// Mengubah nilai property dari pageHeadings
pageHeadings[0].innerHTML = 'Apa Kabar!';
var newPageHeadings = pageHeadings[0].innerHTML;
console.log('isi baru dari <h2> :' + newPageHeadings);
