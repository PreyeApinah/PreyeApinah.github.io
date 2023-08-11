let products = [];

function addProduct() {
  const productName = document.getElementById('product-name').value;
  const productQuantity = document.getElementById('product-quantity').value;

  if (productName !== '' && productQuantity !== '') {
    const product = {
      name: productName,
      quantity: productQuantity
    };

    products.push(product);

    displayProducts();
    clearForm();
  }
}

function displayProducts() {
  const productList = document.getElementById('product-list');
  productList.innerHTML = '';

  products.forEach((product, index) => {
    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.innerText = product.name;
    row.appendChild(nameCell);

    const quantityCell = document.createElement('td');
    quantityCell.innerText = product.quantity;
    row.appendChild(quantityCell);

    const actionCell = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-danger btn-sm';
