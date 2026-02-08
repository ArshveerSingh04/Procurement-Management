// // const recordsBody = document.getElementById("recordsBody");
// // const vendorInput = document.getElementById("vendorInput");
// // const itemInput = document.getElementById("itemInput");
// // const amountInput = document.getElementById("amountInput");
// // const statusInput = document.getElementById("statusInput");

// // const saveBtn = document.getElementById("saveBtn");
// // const cancelBtn = document.getElementById("cancelBtn");
// // const toggleFormBtn = document.getElementById("toggleFormBtn");
// // const formSection = document.getElementById("formSection");

// // const totalOrdersEl = document.getElementById("totalOrders");
// // const pendingOrdersEl = document.getElementById("pendingOrders");
// // const vendorCountEl = document.getElementById("vendorCount");

// // let records = [
// //   { id: "PO-1001", vendor: "Acme", item: "Paper", amount: 200, status: "pending" },
// //   { id: "PO-1002", vendor: "Dell", item: "Laptop", amount: 1200, status: "approved" }
// // ];

// // function render() {
// //   recordsBody.innerHTML = "";

// //   records.forEach(r => {
// //     const tr = document.createElement("tr");
// //     tr.innerHTML = `
// //       <td>${r.id}</td>
// //       <td>${r.vendor}</td>
// //       <td>${r.item}</td>
// //       <td>${r.amount}</td>
// //       <td>${r.status}</td>
// //       <td><button data-id="${r.id}">Delete</button></td>
// //     `;
// //     recordsBody.appendChild(tr);
// //   });

// //   totalOrdersEl.textContent = records.length;
// //   pendingOrdersEl.textContent = records.filter(r => r.status === "pending").length;
// //   vendorCountEl.textContent = new Set(records.map(r => r.vendor)).size;
// // }

// // toggleFormBtn.addEventListener("click", () => {
// //   formSection.classList.toggle("hidden");
// // });

// // saveBtn.addEventListener("click", () => {
// //   const vendor = vendorInput.value.trim();
// //   const item = itemInput.value.trim();
// //   const amount = Number(amountInput.value);

// //   if (!vendor || !item || amount <= 0) {
// //     alert("Please fill all fields correctly");
// //     return;
// //   }

// //   records.push({
// //     id: `PO-${1000 + records.length + 1}`,
// //     vendor,
// //     item,
// //     amount,
// //     status: statusInput.value
// //   });

// //   vendorInput.value = "";
// //   itemInput.value = "";
// //   amountInput.value = "";

// //   formSection.classList.add("hidden");
// //   render();
// // });

// // cancelBtn.addEventListener("click", () => {
// //   formSection.classList.add("hidden");
// // });

// // recordsBody.addEventListener("click", e => {
// //   if (e.target.tagName === "BUTTON") {
// //     records = records.filter(r => r.id !== e.target.dataset.id);
// //     render();
// //   }
// // });

// // render();
// const recordsBody = document.getElementById("recordsBody");
// const vendorInput = document.getElementById("vendorInput");
// const itemInput = document.getElementById("itemInput");
// const amountInput = document.getElementById("amountInput");
// const statusInput = document.getElementById("statusInput");

// const saveBtn = document.getElementById("saveBtn");
// const cancelBtn = document.getElementById("cancelBtn");
// const toggleFormBtn = document.getElementById("toggleFormBtn");
// const formSection = document.getElementById("formSection");

// const totalOrdersEl = document.getElementById("totalOrders");
// const pendingOrdersEl = document.getElementById("pendingOrders");
// const vendorCountEl = document.getElementById("vendorCount");

// // 🔹 LOAD FROM localStorage (shared source)
// let records = JSON.parse(localStorage.getItem("orders")) || [
//   { id: "PO-1001", vendor: "Acme", item: "Paper", amount: 200, status: "pending" },
//   { id: "PO-1002", vendor: "Dell", item: "Laptop", amount: 1200, status: "approved" }
// ];

// // 🔹 SAVE helper
// function saveToStorage() {
//   localStorage.setItem("orders", JSON.stringify(records));
// }

// function render() {
//   recordsBody.innerHTML = "";

//   records.forEach(r => {
//     const tr = document.createElement("tr");
//     tr.innerHTML = `
//       <td>${r.id}</td>
//       <td>${r.vendor}</td>
//       <td>${r.item}</td>
//       <td>${r.amount}</td>
//       <td>${r.status}</td>
//       <td><button data-id="${r.id}">Delete</button></td>
//     `;
//     recordsBody.appendChild(tr);
//   });

//   totalOrdersEl.textContent = records.length;
//   pendingOrdersEl.textContent = records.filter(r => r.status === "pending").length;
//   vendorCountEl.textContent = new Set(records.map(r => r.vendor)).size;
// }

// toggleFormBtn.addEventListener("click", () => {
//   formSection.classList.toggle("hidden");
// });

// saveBtn.addEventListener("click", () => {
//   const vendor = vendorInput.value.trim();
//   const item = itemInput.value.trim();
//   const amount = Number(amountInput.value);

//   if (!vendor || !item || amount <= 0) {
//     alert("Please fill all fields correctly");
//     return;
//   }

//   records.push({
//     id: `PO-${1000 + records.length + 1}`,
//     vendor,
//     item,
//     amount,
//     status: statusInput.value
//   });

//   saveToStorage(); // 🔹 persist data

//   vendorInput.value = "";
//   itemInput.value = "";
//   amountInput.value = "";

//   formSection.classList.add("hidden");
//   render();
// });

// cancelBtn.addEventListener("click", () => {
//   formSection.classList.add("hidden");
// });

// recordsBody.addEventListener("click", e => {
//   if (e.target.tagName === "BUTTON") {
//     records = records.filter(r => r.id !== e.target.dataset.id);
//     saveToStorage(); // 🔹 persist delete
//     render();
//   }
// });

// render();

// ===== DOM REFERENCES =====
const recordsBody = document.getElementById("recordsBody");
const vendorInput = document.getElementById("vendorInput");
const categoryInput = document.getElementById("categoryInput");
const itemInput = document.getElementById("itemInput");
const amountInput = document.getElementById("amountInput");
const statusInput = document.getElementById("statusInput");

const saveBtn = document.getElementById("saveBtn");
const cancelBtn = document.getElementById("cancelBtn");
const toggleFormBtn = document.getElementById("toggleFormBtn");
const formSection = document.getElementById("formSection");

const totalOrdersEl = document.getElementById("totalOrders");
const pendingOrdersEl = document.getElementById("pendingOrders");
const vendorCountEl = document.getElementById("vendorCount");

// ===== LOAD DATA (BACKWARD COMPATIBLE) =====
let records = JSON.parse(localStorage.getItem("orders")) || [
  {
    id: "PO-1001",
    vendor: "Acme",
    category: "Office Supplies",
    item: "Paper",
    amount: 200,
    status: "pending"
  },
  {
    id: "PO-1002",
    vendor: "Dell",
    category: "IT Equipment",
    item: "Laptop",
    amount: 1200,
    status: "approved"
  }
];

// ===== SAVE HELPER =====
function saveToStorage() {
  localStorage.setItem("orders", JSON.stringify(records));
}

// ===== RENDER DASHBOARD =====
function render() {
  recordsBody.innerHTML = "";

  records.forEach(r => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${r.id}</td>
      <td>${r.vendor}</td>
      <td>${r.item}</td>
      <td>${r.amount}</td>
      <td>${r.status}</td>
      <td><button data-id="${r.id}">Delete</button></td>
    `;
    recordsBody.appendChild(tr);
  });

  totalOrdersEl.textContent = records.length;
  pendingOrdersEl.textContent =
    records.filter(r => r.status === "pending").length;

  vendorCountEl.textContent =
    new Set(records.map(r => r.vendor)).size;
}

// ===== FORM TOGGLE =====
toggleFormBtn.addEventListener("click", () => {
  formSection.classList.toggle("hidden");
});

// ===== SAVE ORDER =====
saveBtn.addEventListener("click", () => {
  const vendor = vendorInput.value.trim();
  const category = categoryInput.value.trim();
  const item = itemInput.value.trim();
  const amount = Number(amountInput.value);
  const status = statusInput.value;

  if (!vendor || !category || !item || amount <= 0) {
    alert("Please fill all fields correctly");
    return;
  }

  records.push({
    id: `PO-${1000 + records.length + 1}`,
    vendor,
    category,
    item,
    amount,
    status
  });

  saveToStorage();
  render();

  // reset form
  vendorInput.value = "";
  categoryInput.value = "";
  itemInput.value = "";
  amountInput.value = "";

  formSection.classList.add("hidden");
});

// ===== CANCEL FORM =====
cancelBtn.addEventListener("click", () => {
  formSection.classList.add("hidden");
});

// ===== DELETE ORDER =====
recordsBody.addEventListener("click", e => {
  if (e.target.tagName === "BUTTON") {
    records = records.filter(r => r.id !== e.target.dataset.id);
    saveToStorage();
    render();
  }
});

// ===== INITIAL LOAD =====
render();
