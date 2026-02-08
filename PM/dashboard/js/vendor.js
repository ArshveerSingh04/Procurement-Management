// const vendorTable = document.getElementById("vendorTable");
// const vendorCount = document.getElementById("vendorCount");

// // 🔹 READ shared orders
// const orders = JSON.parse(localStorage.getItem("orders")) || [];

// // 🔹 Extract UNIQUE vendors
// const vendors = [...new Set(orders.map(o => o.vendor))];

// vendors.forEach(vendor => {
//   const row = document.createElement("tr");
//   row.innerHTML = `<td>${vendor}</td>`;
//   vendorTable.appendChild(row);
// });

// vendorCount.textContent = vendors.length;
const vendorTable = document.getElementById("vendorTable");
const vendorCount = document.getElementById("vendorCount");

const orders = JSON.parse(localStorage.getItem("orders")) || [];

// unique vendors WITH category
const vendorMap = {};

orders.forEach(o => {
  if (!vendorMap[o.vendor]) {
    vendorMap[o.vendor] = o.category || "Uncategorized";
  }
});

Object.entries(vendorMap).forEach(([vendor, category]) => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${vendor}</td>
    <td>${category}</td>
  `;
  vendorTable.appendChild(row);
});

vendorCount.textContent = Object.keys(vendorMap).length;
