const quantityElement = document.getElementById('quantity');
const decreaseButton = document.getElementById('decrease');
const increaseButton = document.getElementById('increase');
const maxStock = 50;

let quantity = 1;

decreaseButton.addEventListener('click', () => {
    if (quantity > 1) {
        quantity--;
        quantityElement.textContent = quantity;
    }
});

increaseButton.addEventListener('click', () => {
    if (quantity < maxStock) {
        quantity++;
        quantityElement.textContent = quantity;
    }
});