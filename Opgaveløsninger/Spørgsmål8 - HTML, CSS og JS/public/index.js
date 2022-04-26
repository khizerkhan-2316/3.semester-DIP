const table = document.querySelector('table');
const totalQuantity = document.querySelector('h4');
const button = document.querySelector('button');

const products = [];

const addProduct = () => {
  const productName = document.querySelector('.product').value;
  const quantity = parseInt(document.querySelector('.quantity').value);

  if (!validateInput(productName, quantity)) {
    return;
  }

  products.push(createProduct(productName, quantity));
  createRow(productName, quantity, table);
  totalQuantity.innerHTML = `Total quantity: ${calculateQuantity(products)}`;
};

const validateInput = (productname, quantity) => {
  if (productname === undefined || productname === null || productname === '') {
    alert('Error in product name');
    return false;
  }

  if (quantity === undefined || quantity === null || quantity === '') {
    alert('Error in product name');
    return false;
  }

  return true;
};

const createProduct = (product, quantity) => {
  return { product, quantity };
};

const createRow = (productName, quantity, node) => {
  const tablerow = document.createElement('tr');

  const tdproductName = document.createElement('td');

  const tdquantity = document.createElement('td');

  tdproductName.innerHTML = productName;
  tdquantity.innerHTML = quantity;

  tablerow.appendChild(tdproductName);
  tablerow.appendChild(tdquantity);

  node.appendChild(tablerow);
};

calculateQuantity = (products) => {
  return products.reduce((sum, product) => sum + product.quantity, 0);
};
button.addEventListener('click', addProduct);
