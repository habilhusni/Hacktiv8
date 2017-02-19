var body = document.body;


//Keturunan Pertama
var mainDiv = document.getElementsByTagName('div');

var mainId = document.getElementById('main');

//mainId.innerHTML = 'ANAK PERTAMA';


//Keturunan Kedua
var childMainDiv = document.createElement('div');

var childMainDivId = document.createAttribute('id');

childMainDivId.value = 'content';

childMainDiv.setAttributeNode(childMainDivId);

mainDiv[0].appendChild(childMainDiv);

var childMainId2 = document.getElementById('content');

//childMainId2.innerHTML = 'ANAK KEDUA';


//Keturunan Ketiga Saudara 1
var child2MainDiv = document.createElement('div');

child2MainDiv.setAttribute('class', 'content-post');

childMainDiv.appendChild(child2MainDiv);

var classChild2MainDiv = document.getElementsByClassName('content-post');

//classChild2MainDiv[0].innerHTML = 'ANAK KETIGA SAUDARA 1';

var h1 = document.createElement('h1');

var h1Text = document.createTextNode('Judul Post');

h1.appendChild(h1Text);

child2MainDiv.appendChild(h1);	

var span = document.createElement('span');

var spanText = document.createTextNode('Published on 12 May 2016');

span.appendChild(spanText);

child2MainDiv.appendChild(span);

var par = document.createElement('p');

var parText = document.createTextNode('Lorem Ipsum Dolor Sit Amet');

par.appendChild(parText);

child2MainDiv.appendChild(par);

var button = document.createElement('button');

button.setAttribute('class', 'share-post-btn');

var buttonText = document.createTextNode('Share this Post');

button.appendChild(buttonText);

child2MainDiv.appendChild(button);


//Keturunan Ketiga Saudara 2
var child2MainDiv2 = document.createElement('div');

child2MainDiv2.setAttribute('class', 'content-post');

childMainDiv.appendChild(child2MainDiv2);

//classChild2MainDiv[1].innerHTML = 'ANAK KETIGA SAUDARA 2';

var h12 = document.createElement('h1');

var h12Text = document.createTextNode('Judul Post 2');

h12.appendChild(h12Text);

child2MainDiv2.appendChild(h12);	

var span2 = document.createElement('span');

var span2Text = document.createTextNode('Published on 13 May 2016');

span2.appendChild(span2Text);

child2MainDiv2.appendChild(span2);

var par2 = document.createElement('p');

var par2Text = document.createTextNode('Lorem Ipsum Dolor Sit Amet');

par2.appendChild(par2Text);

child2MainDiv2.appendChild(par2);

var button2 = document.createElement('button');

button2.setAttribute('class', 'share-post-btn');

var button2Text = document.createTextNode('Share this Post');

button2.appendChild(button2Text);

child2MainDiv2.appendChild(button2);

var pencet = document.getElementsByClassName('share-post-btn');

pencet[0].addEventListener('click', function() {
    alert('You have shared this post!');
});

pencet[1].addEventListener('click', function() {
    alert('You have shared this post!');
});












