// Select <button> dengan id alert-on-click-button
var alertOnClickButton = document.getElementById('alert-on-click-button');

// Tambahkan Event Listener ke <button> alertOnClickButton, dengan trigger atau pemicu nya adalah click dan memanggil function sebagai parameter kedua.
alertOnClickButton.addEventListener('click', function() {
  alert('Hello There!');
});

// Select <button> dengan id alert-on-click-button
var logOnHoverButton = document.getElementById('log-on-hover-button');

// Tambahkan Event Listener ke <button> alertOnHoverButton, dengan trigger atau pemicu nya adalah mouseenter dan memanggil function sebagai parameter kedua.
logOnHoverButton.addEventListener('mouseenter', function() {
  console.log('Hello, saya sedang melakukan hover atau mouseenter ke button!');
});

// Select <button> dengan id alert-on-leave-button
var logOnLeaveButton = document.getElementById('log-on-leave-button');

// Tambahkan Event Listener ke <button> alertOnHoverButton, dengan trigger atau pemicu nya adalah mouseenter dan memanggil function sebagai parameter kedua.
logOnLeaveButton.addEventListener('mouseleave', function() {
  console.log('Hello, saya sedang keluar dari button!');
});

// Select <input> dengan id on-input
var onChangeInput = document.getElementById('on-input');

// Select <span id="on-input-content">
var inputContent = document.getElementById('on-input-content'); 

onChangeInput.addEventListener('input', function(event) {
  inputContent.innerHTML = event.target.value;
  onChangeInput.value = event.target.value;
});

// Select <input> dengan id on-blur
var onBlurInput = document.getElementById('on-blur');

// Select <span id="on-blur-content">
var blurContent = document.getElementById('on-blur-content');

// Tambahkan Event Listener dengan trigger blur ke input dengan id on-blur
onBlurInput.addEventListener('blur', function(event) {
  blurContent.innerHTML = event.target.value;
});

// Select <form> dengan id main-form
var mainForm = document.getElementById('main-form');

// Tambahkan Event Listener dengan trigger submit ke <form id="main-form">
mainForm.addEventListener('submit', function() {
  event.preventDefault();
  if(onChangeInput.value == 'kusir') {
  	alert('isinya kusir kan?');
  }
  alert('Sukses Submit!');
});