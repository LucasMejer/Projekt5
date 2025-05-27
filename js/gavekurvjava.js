// Produktdata (mock data)
const products = [
    { id: 1, name: 'Wally and Whiz', price: 25.00, category: 'chokolade' },
    { id: 2, name: 'Summerbird', price: 25.00, category: 'chokolade' },
    // Tilføj flere produkter
];

// Gavekurv state
let basket = [];

// Initialiser produkter
function initProducts() {
    const productGrid = document.querySelector('.product-grid');
    
    products.forEach(product => {
        const productCard = `
            <div class="product-card">
                <img src="products/${product.id}.jpg" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.price.toFixed(2)} kr.</p>
                <button onclick="addToBasket(${product.id})" class="btn-primary">Tilføj</button>
            </div>
        `;
        productGrid.innerHTML += productCard;
    });
}

// Basket funktionalitet
function addToBasket(productId) {
    const product = products.find(p => p.id === productId);
    const existing = basket.find(item => item.id === productId);
    
    if(existing) {
        existing.quantity++;
    } else {
        basket.push({...product, quantity: 1});
    }
    
    updateBasketDisplay();
}

function updateBasketDisplay() {
    const basketItems = document.querySelector('.basket-items');
    let total = 0;
    
    basketItems.innerHTML = basket.map(item => `
        <div class="basket-item">
            <span>${item.name}</span>
            <button onclick="adjustQuantity(${item.id}, -1)">-</button>
            <span>${item.quantity}</span>
            <button onclick="adjustQuantity(${item.id}, 1)">+</button>
        </div>
    `).join('');
    
    total = basket.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('total').textContent = total.toFixed(2);
}

// Initialisering
document.addEventListener('DOMContentLoaded', initProducts);