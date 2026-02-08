// Load shared orders data
const orders = JSON.parse(localStorage.getItem("orders")) || [];

// Total orders
document.getElementById("totalOrders").textContent = orders.length;

// Approved orders
document.getElementById("approvedOrders").textContent =
  orders.filter(o => o.status === "approved").length;

// Pending orders
document.getElementById("pendingOrders").textContent =
  orders.filter(o => o.status === "pending").length;
