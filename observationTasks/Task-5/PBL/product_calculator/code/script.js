// Grab references to the HTML elements we need
const nameInput     = document.getElementById("productName");
const quantityInput = document.getElementById("quantity");
const priceInput    = document.getElementById("price");
const resultBox     = document.getElementById("result");

/**
 * Recalculates the total price and updates the DOM.
 * Runs every time quantity or price changes.
 */
function updateTotal() {
  const quantity = parseFloat(quantityInput.value) || 0;
  const price    = parseFloat(priceInput.value)    || 0;
  const total    = quantity * price;

  // Show the product name if the user typed one
  const productName = nameInput.value.trim();
  const label = productName ? `${productName} — ` : "";

  resultBox.textContent = `${label}Total: ₹${total.toFixed(2)}`;
}

// Attach listeners — recalculate on every keystroke
quantityInput.addEventListener("input", updateTotal);
priceInput.addEventListener("input", updateTotal);
nameInput.addEventListener("input", updateTotal);

// Initial calculation on page load
updateTotal();