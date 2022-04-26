const input = document.querySelector('input');
const errorNode = document.getElementById('error');

input.addEventListener('input', () => {
  if (input.value.length < 3) {
    errorNode.innerHTML = 'Too short';
  } else if (input.value.length > 7) {
    errorNode.innerHTML = 'Too Long';
  } else if (input.value.includes('a')) {
    errorNode.innerHTML = 'Må ikke indeholde a';
  }
});
