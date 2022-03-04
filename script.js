const button = document.querySelector('#example-1 button');
const span = document.querySelector('#example-1 span');

button.addEventListener('click', function(){
  span.textContent++;
  localStorage.setItem('example-1-number', span.textContent)
});