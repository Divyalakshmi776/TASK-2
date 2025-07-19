let total = 0;

const totalDisplay = document.getElementById('total');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const price = parseInt(button.getAttribute('data-price'));
    total += price;
    totalDisplay.textContent = total;
  });
});