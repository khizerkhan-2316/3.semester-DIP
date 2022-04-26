console.log('Up and running');
const input = document.querySelector('input');
const errorNode = document.getElementById('error');

input.addEventListener('change', () => {
  console.log('df');

  if (input.value.length < 3) {
    errorNode.innerHTML = 'Too short';
    input.focus();
  } else if (input.value.length > 7) {
    errorNode.innerHTML = 'Too Long';
    input.focus();
  } else if (input.value.includes('a')) {
    errorNode.innerHTML = 'Må ikke indeholde a';
    input.focus();
  } else {
    errorNode.innerHTML = '';
  }
});
