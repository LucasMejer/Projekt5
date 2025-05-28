document.addEventListener('DOMContentLoaded', function() {
    // Produktdata
    const products = [
        {
            id: 1,
            name: "Bagsværd Lakrids (Classic)",
            price: 75,
            image: "images/bclassic.jpg",
            quantity: 1
        }
    ];

    // Cart state
    let cart = {
        items: [],
        total: 0,
        shipping: 0
    };

    // DOM elements
    const popupOverlay = document.getElementById('popupOverlay');
    const addToCartBtn = document.getElementById('addToCartBtn');

    // Funktioner
    function addToCart(productId) {
        console.log("Tilføjer produkt til kurv"); // Debug log
        const product = products.find(p => p.id === productId);
        if (product) {
            const existingItem = cart.items.find(item => item.id === productId);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.items.push({...product});
            }
            updateCartTotal();
            renderCart();
            showCart();
        }
    }

    function updateCartTotal() {
        cart.total = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cart.shipping = cart.total > 500 ? 0 : 49;
    }

    function renderCart() {
        const cartElement = document.createElement('div');
        cartElement.className = 'cart';
        
        // Header
        const header = document.createElement('div');
        header.className = 'cart__header';
        header.innerHTML = `
            <h3 class="cart__title">Din kurv (${cart.items.reduce((sum, item) => sum + item.quantity, 0)} varer)</h3>
            <button class="cart__close-btn" id="closePopup">&times;</button>
        `;
        cartElement.appendChild(header);
        
        // Produktliste
        cart.items.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart__item';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart__item-image">
                <div class="cart__item-details">
                    <div class="cart__item-name">${item.name}</div>
                    <div>Antal: ${item.quantity}</div>
                    <div>Pris: ${(item.price * item.quantity).toLocaleString('da-DK')} kr.</div>
                </div>
            `;
            cartElement.appendChild(cartItem);
        });
        
        // Summary
        const summary = document.createElement('div');
        summary.className = 'cart__summary';
        summary.innerHTML = `
            <div class="cart__summary-row">
                <span>Subtotal:</span>
                <span>${cart.total.toLocaleString('da-DK')} kr.</span>
            </div>
            <div class="cart__summary-row">
                <span>Fragt:</span>
                <span>${cart.shipping === 0 ? 'Gratis' : cart.shipping + ' kr.'}</span>
            </div>
            <div class="cart__summary-row cart__summary-total">
                <span>I alt:</span>
                <span>${(cart.total + cart.shipping).toLocaleString('da-DK')} kr.</span>
            </div>
        `;
        cartElement.appendChild(summary);
        
        // Footer
        const footer = document.createElement('div');
        footer.className = 'cart__footer';
        footer.innerHTML = `
            <button class="cart__btn cart__btn--checkout" id="goToCheckout">Gå til kassen</button>
            <button class="cart__btn cart__btn--continue" id="continueShopping">Fortsæt med at handle</button>
        `;
        cartElement.appendChild(footer);
        
        // Clear existing content and add new
        popupOverlay.innerHTML = '';
        popupOverlay.appendChild(cartElement);
        
        // Event listeners
        document.getElementById('closePopup').addEventListener('click', hideCart);
        document.getElementById('continueShopping').addEventListener('click', hideCart);
        document.getElementById('goToCheckout').addEventListener('click', goToCheckout);
    }

    function showCart() {
        console.log("Viser kurv"); // Debug log
        popupOverlay.style.display = 'block';
    }

    function hideCart() {
        popupOverlay.style.display = 'none';
    }

    function goToCheckout() {
        alert('Du bliver nu viderestillet til kassen');
        hideCart();
    }

    // Event listeners
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function(e) {
            e.preventDefault();
            addToCart(1);
        });
    }
    
    if (popupOverlay) {
        popupOverlay.addEventListener('click', function(e) {
            if (e.target === this) {
                hideCart();
            }
        });
    }
});