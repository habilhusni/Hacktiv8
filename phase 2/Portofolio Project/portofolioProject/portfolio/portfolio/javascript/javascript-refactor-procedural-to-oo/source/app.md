---
layout: code
title: app.html & app.js
---

**app.html**

```html
<html>

  <head>
    <title></title>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script src="app.js"></script>
    <style>
      .die {
        text-align: center;
        float: left;
        border: 1px solid black;
        padding: 40px
      }
    </style>
  </head>


  <body>
    <div id="roller">
      <button class="add">Add dice!</button>
      <button class="roll">Roll dice!</button>
      <div class="dice"></div>
    </div>

  </body>

</html>
```

**app.js**

```javascript
$(document).ready(function() {
  $('#roller button.add').on('click', function() {
    console.log("WAT")
    $('.dice').append('<div class="die">0</div>')
  })

  $('#roller button.roll').on('click', function() {
    $('.die').each(function(k, die) {
      var value = Math.floor((Math.random()*6)+1)
      $(die).text(value)
    })
  })
})
```

