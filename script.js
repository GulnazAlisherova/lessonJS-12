// // const example1Span = document.querySelector('#example-1 button');
// // example1Span.textContent =localStorage.getItem('example-1-number') ?? 0;
// // document.querySelector('#example-1 button').addEventListener('click', function(){
// //   example1Span.textContent++;
// //   localStorage.setItem('example-1-number', example1Span.textContent);
// // });

// document.querySelector('input');


// const example3Input = document.querySelector('#example-3 input');
// example3Input.value = localStorage.getItem('example-3-input');
// example3Input.addEventListener('input', function(){
//   localStorage.setItem('example-3-input', example3Input.value)
// });

// const darkTheme = document.querySelector('input[type=checkbox]');
// //remember
// darkTheme.checked = +localStorage.getItem('dark-theme');
// document.body.classList.toggle('dark-theme', darkTheme.checked);
// //react
// darkTheme.addEventListener('change', function(){
//   localStorage.setItem('dark-theme', +darkTheme.checked);
//   document.body.classList.toggle('dark-theme');
// });

// const timeoutExample = setTimeout(function(){
//   document.querySelector('span').textContent = "Hello";
// },
// document.querySelector('button').addEventListener('click', function(){
//   clearTimeout(timeoutExample);
// }));

// document.querySelector('button')









let timeoutId;
document.querySelector('button').addEventListener('click', function(){

})
const span = document.querySelector('span');
setInterval(() => {
  span.textContent++;
}, 1000);