let cartItems = [
    { id: 1, name: 'product 1', price: 50, image: 'r7.jpg' },
    { id: 2, name: 'product 2', price: 30, image: 'r8.jpg' },
    { id: 3, name: 'product 3', price: 20, image: 'r10.jpg' },
    { id: 4, name: 'product 3', price: 60, image: 'r10.jpg' },
    { id: 5, name: 'product 3', price: 70, image: 'r10.jpg' },
];

// عرض العناصر في السلة
function displayCartItems() {
    const cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = '';
    let htmlString = '';
    let htmlStringEmptyCart = '';

    let totalPrice = 0;
    if (cartItems.length === 0) {
        htmlStringEmptyCart = `
        <div class="emptyCart">
        <img class="empty-image" src="images.jpeg">
        <div class="message">Your cart is empty.</div>
        </div>
        `;
    }

    for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];

        htmlString += `
    <div class="cart-item">
      <img class="item-image" src="${item.image}">
      <div class="item-details">
        <div class="item-name">${item.name}</div>
        <div class="item-price">${item.price} $dollar</div>
      </div>
      <button class="delete-button" onclick="removeItemFromCart(${item.id})">delete</button>
    </div>
  `;
    }


    cartItemsDiv.innerHTML = cartItems.length === 0 ? htmlStringEmptyCart : htmlString;

    for (let i = 0; i < cartItems.length; i++) {
        totalPrice += cartItems[i].price;
    }


    const totalPriceElement = document.getElementById('total-price');
    totalPriceElement.textContent = totalPrice;
}


function removeItemFromCart(itemId) {
    cartItems = cartItems.filter(item => item.id !== itemId);
    displayCartItems();
}

// عرض العناصر عند تحميل الصفحة
displayCartItems();