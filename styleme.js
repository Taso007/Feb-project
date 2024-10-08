// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


function addToCart(productImage, productName, productLink) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  let existingItem = cart.find(item => item.name === productName);

  if (existingItem) {
    existingItem.quantity = existingItem.quantity + 1;
  } else {
    let newItem = {
      image: productImage,
      name: productName,
      link: productLink,
      quantity: 1,
    };
    cart.push(newItem);
  }

  localStorage.setItem('cart', JSON.stringify(cart));

  alert(`${productName} added to cart!`);
}



function getCartItems() {
  return JSON.parse(localStorage.getItem('cart')) || [];
}



function displayCart() {
  let cartItems = getCartItems();
  let cartContainer = document.getElementById('cartItemsContainer');

  if (cartItems.length === 0) {
    cartContainer.innerHTML = '<p>Your cart is empty</p>';
    return;
  }

  cartContainer.innerHTML = '';

  cartItems.forEach(item => {
    const cartItemDiv = document.createElement('div');
    cartItemDiv.classList.add('cart-item');
    cartItemDiv.innerHTML = `
      <a href="${item.link}">
      <img src="${item.image}" alt="${item.name}" class="cart-img">
      </a>
      ${item.name}
      <div>
      <button class="quantity-but" onclick="reduce('${item.name}');">-</button>
      ${item.quantity}
      <button class="quantity-but" onclick="increase('${item.name}');">+</button>
      </div>

      <div>
      <button class="remove-but" onclick="removeFromCart('${item.name}')">Remove</button>
      <button class="buy-but">Buy</button>
      </div>
    `;
    cartContainer.appendChild(cartItemDiv);
  });
}



function increase(productName) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let item = cart.find(item => item.name === productName);
  let specifiedItem = document.getElementsByClassName(`${item.name}`);
  specifiedItem = item.quantity++;
  localStorage.setItem('cart', JSON.stringify(cart));
  displayCart();
}

function reduce(productName) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let item = cart.find(item => item.name === productName);
  let specifiedItem = document.getElementsByClassName(`${item.name}`);
  if (item.quantity > 1) {
    specifiedItem = item.quantity--;
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
  }
}


function removeFromCart(productName) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let updatedCart = cart.filter(item => item.name !== productName);

  localStorage.setItem('cart', JSON.stringify(updatedCart));
  displayCart(); 
}

window.addEventListener('load', displayCart);


document.addEventListener('DOMContentLoaded', () => {
  displayCart();
});


function performSearch(){
  const searchInput=document.getElementById("search");
  
}