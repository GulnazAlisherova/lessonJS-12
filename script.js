const example1Span = document.querySelector('#example-1 button');
example1Span.textContent = localStorage.getItem('example-1-number') ?? 0;
document.querySelector('#example-1 button').addEventListener('click', function)