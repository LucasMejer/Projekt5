// Produktdata (mock data)
const products = [
    { id: 1, name: 'Wally and Whiz', price: 50.00, image: 'wallyandwhizpink1.jpg', category: 'chokolade' },
    { id: 2, name: 'Summerbird', price: 125.00, image: 'summerbird1.jpg', category: 'chokolade' },
    { id: 3, name: 'Nybro Æblemost', price: 79.99, image: 'nybroæblemost1.jpg', category: 'chokolade' },
    { id: 4, name: 'Nicolas Vahe', price: 25.00, image: 'nicolasvahe1.jpg', category: 'chokolade' },
    { id: 5, name: 'Bagsværd Lakrids', price: 130.00, image: 'bclassic.jpg', category: 'chokolade' },
    { id: 6, name: 'Speedtsberg', price: 65.00, image: 'speedtsberg1.jpg', category: 'chokolade' },
    // Tilføj flere produkter
];

// Gavekurv state
let basket = [];

// Initialiser produkter
function initProducts() {
    const productGrid = document.querySelector('.product-gridJ');
    
    products.forEach(product => {
        const productCard = `
        <div class="product-card">
            <div class="product-card-content">
                <img src="images/${product.image}" alt="${product.name}">
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.price.toFixed(2)} kr.</p>
                    <button onclick="addToBasket(${product.id})" class="btn-primary">Tilføj</button>
                </div>
            </div>
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

// Ny funktion til at fjerne enkelte items
function removeSingleItem(productId) {
    const index = basket.findIndex(item => item.id === productId);
    
    if(index !== -1) {
        if(basket[index].quantity > 1) {
            basket[index].quantity--;
        } else {
            basket.splice(index, 1);
        }
        updateBasketDisplay();
    }
}

// Ny funktion til at fjerne alle items af et produkt
function removeAllItems(productId) {
    basket = basket.filter(item => item.id !== productId);
    updateBasketDisplay();
}

function updateBasketDisplay() {
    const basketItems = document.querySelector('.basket-items');
    let total = 0;
    
    basketItems.innerHTML = basket.map(item => `
        <div class="basket-item">
            <span class="product-name">${item.name}</span>
        
            <div class="quantity-controls">
                <button class="btn-remove" onclick="removeSingleItem(${item.id})">-</button>
                <span class="quantity">${item.quantity}</span>
                <button class="btn-add" onclick="addToBasket(${item.id})">+</button>
            </div>
        
            <button class="btn-trash" onclick="removeAllItems(${item.id})">🗑️</button>
        </div>
    `).join('');
    
    total = basket.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('total').textContent = total.toFixed(2);
}

// Initialisering
document.addEventListener('DOMContentLoaded', initProducts);

