const hamburgerMenu = document.querySelector('.hamburger-menu');
const navigation = document.querySelector('.navigation');

hamburgerMenu.addEventListener('click', () => {
  navigation.classList.toggle('active');
});


const products = document.querySelectorAll('.product');

products.forEach((product) => {
  product.addEventListener('click', () => {
    product.querySelector('.product-info').classList.toggle('active');
  });
});


const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value.toLowerCase();
  const productNames = document.querySelectorAll('.product h3');

  productNames.forEach((name) => {
    const productName = name.textContent.toLowerCase();
    const product = name.parentElement.parentElement;

    if (productName.includes(searchTerm)) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
});