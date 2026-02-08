const table = document.getElementById("ordersTable");
const filter = document.getElementById("statusFilter");

// Load shared data
const orders = JSON.parse(localStorage.getItem("orders")) || [];

function render(status = "all") {
  table.innerHTML = "";

  if (orders.length === 0) {
    table.innerHTML = `
      <tr>
        <td colspan="6">No purchase orders found</td>
      </tr>
    `;
    return;
  }

  orders
    .filter(o => status === "all" || o.status === status)
    .forEach(o => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${o.id}</td>
        <td>${o.vendor}</td>
        <td>${o.category || "—"}</td>
        <td>${o.item}</td>
        <td>${o.amount}</td>
        <td>${o.status}</td>
      `;
      table.appendChild(tr);
    });
}

// filter change
filter.addEventListener("change", e => {
  render(e.target.value);
});

// initial render
render();
