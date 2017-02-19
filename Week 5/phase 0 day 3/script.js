var userName = document.getElementById('username');

userName.addEventListener('input', function(event) {
   userName.value = event.target.value;
});

var passWord = document.getElementById('password');

passWord.addEventListener('input', function(event) {
   passWord.value = event.target.value;
});

var coPassword = document.getElementById('confirm password');

coPassword.addEventListener('input', function(event) {
   coPassword.value = event.target.value;
});

var email = document.getElementById('email');

email.addEventListener('input', function(event) {
   email.value = event.target.value;
});

var coEmail = document.getElementById('confirm email');

coEmail.addEventListener('input', function(event) {
   coEmail.value = event.target.value;
});

var mainForm = document.getElementById('main-form');

mainForm.addEventListener('submit', function() {
  event.preventDefault();
  if(userName.value == '') {
  	alert('Username tidak boleh kosong!');
  	return false;
  }else if(passWord.value == '') {
  	alert('Password tidak boleh kosong!');
  	return false;
  }else if(coPassword.value == '') {
  	alert('Confirm Password tidak boleh kosong!');
  	return false;
  }else if(email.value == '') {
  	alert('Email tidak boleh kosong!');
  	return false;
  }else if(coEmail.value == '') {
  	alert('Confirm Email tidak boleh kosong!');
  	return false;
  }else if(passWord.value !== coPassword.value) {
    alert('Password dan Confirm Password harus sama!');
    return false;
  }else if((passWord.value).length < 6 || (coPassword.value).length < 6) {
  	alert('Password dan Confirm Password harus lebih dari 5 karakter!');
  	return false;
  }else if(email.value !== coEmail.value) {
  	alert('Email dan Confirm Email harus sama!');
  	return false;
  }else {
  	alert('SUKSES SUBMIT!!');
  	userName.value = '';
  	passWord.value = '';
  	coPassword.value = '';
  	email.value = '';
  	coEmail.value = '';	
  }
});