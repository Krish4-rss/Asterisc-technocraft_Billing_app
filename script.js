let items = [];

function addItem() {
  const itemName = prompt("Enter the item name:");
  const itemPrice = parseFloat(prompt("Enter the item price:"));
  const itemQuantity = parseInt(prompt("Enter the item quantity:"));

  if (itemName && itemPrice && itemQuantity) {
    const total = itemPrice * itemQuantity;
    items.push({ name: itemName, price: itemPrice, quantity: itemQuantity, total });
    updateTable();
    updateTotal();
  }
}

function updateTable() {
  const table = document.getElementById("itemTable");
  table.innerHTML = `
    <tr>
      <th>Item Name</th>
      <th>Price</th>
      <th>Quantity</th>
      <th>Total</th>
    </tr>
    ${items.map(item => `
      <tr>
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td>${item.quantity}</td>
        <td>${item.total}</td>
      </tr>
    `).join('')}
  `;
}

function updateTotal() {
  const totalValue = document.getElementById("totalValue");
  const totalAmount = items.reduce((acc, item) => acc + item.total, 0);
  totalValue.textContent = totalAmount.toFixed(2);
}

function generateInvoice() {
  const customerName = document.getElementById("customerName").value;
  const customerAddress = document.getElementById("customerAddress").value;
  const date = document.getElementById("date").value;

  const invoiceDisplay = document.getElementById("invoiceDisplay");
  invoiceDisplay.innerHTML = `
    <h2>Invoice</h2>
    <p>Customer Name: ${customerName}</p>
    <p>Customer Addres: ${customerAddress}</p>
    <p>Date: ${date}</p>

    <table>
      <tr>
        <th>Item Name</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total</th>
      </tr>
      ${items.map(item => `
        <tr>
          <td>${item.name}</td>
          <td>${item.price}</td>
          <td>${item.quantity}</td>
          <td>${item.total}</td>
        </tr>
      `).join('')}
    </table>
    <p>Total Amount: ${document.getElementById("totalValue").textContent}</p>
  `;
  invoiceDisplay.style.display = "block";
}
