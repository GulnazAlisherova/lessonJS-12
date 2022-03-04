const button = document.querySelector('#example-1 button');
const span = document.querySelector('#example-1 span');

span.textContent = localStorage.getItem('example-1-number') ?? 300;


button.addEventListener('click', function(){
  span.textContent++;
  localStorage.setItem('example-1-number', span.textContent)
});