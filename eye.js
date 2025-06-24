const buttons = document.querySelectorAll('.nav-btn');

const greenleafUrl = 'https://greenleaf-global.com/'; 

buttons.forEach(button => {
  button.addEventListener('click', () => {
    window.location.href = greenleafUrl;
  });
});













const products = [
  { id: 1, name: "Telefon", price: 1200000, img: "https://via.placeholder.com/150?text=Telefon" },
  { id: 2, name: "Noutbuk", price: 7500000, img: "https://via.placeholder.com/150?text=Noutbuk" },
  { id: 3, name: "Soat", price: 300000, img: "https://via.placeholder.com/150?text=Soat" },
  { id: 4, name: "Naushnik", price: 150000, img: "https://via.placeholder.com/150?text=Naushnik" },
  { id: 5, name: "Kamera", price: 2000000, img: "https://via.placeholder.com/150?text=Kamera" },
  { id: 6, name: "Planshet", price: 3000000, img: "https://via.placeholder.com/150?text=Planshet" },
];

let cart = [];

function showProducts() {
  const content = document.getElementById("content");
  content.innerHTML = "";
  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <img src="${product.img}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>${product.price.toLocaleString()} so'm</p>
      <button onclick="addToCart(${product.id})">Korzinkaga qo‘shish</button>
    `;
    content.appendChild(div);
  });
}

function addToCart(id) {
  const item = products.find(p => p.id === id);
  cart.push(item);
  document.getElementById("cart-count").textContent = cart.length;
}

function showCart() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  if (cart.length === 0) {
    content.innerHTML = "<p>Korzinka bo‘sh.</p>";
    return;
  }

  cart.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <strong>${item.name}</strong> - ${item.price.toLocaleString()} so'm
    `;
    content.appendChild(div);
  });

  const buyButton = document.createElement("button");
  buyButton.className = "checkout-btn";
  buyButton.textContent = "Sotib olish";
  buyButton.onclick = () => alert("Xaridingiz uchun rahmat!");
  content.appendChild(buyButton);
}

// Start with products view
showProducts();

