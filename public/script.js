
const form = document.getElementById("complaintForm");
if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const issue = document.getElementById("issue").value;

    const res = await fetch("/complaints", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, issue })
    });

    const data = await res.json();
    document.getElementById("message").innerText =
      "Complaint Submitted! ID: " + data.id;

    form.reset();
  });
}
const table = document.getElementById("complaintTable");
if (table) {
  loadComplaints();
}

async function loadComplaints() {
  const res = await fetch("/complaints");
  const complaints = await res.json();

  table.innerHTML = "";
  complaints.forEach(c => {
    table.innerHTML += `
      <tr>
        <td>${c.id}</td>
        <td>${c.name}</td>
        <td>${c.issue}</td>
        <td>
          <select onchange="updateStatus('${c.id}', this.value)">
            <option ${c.status === "Pending" ? "selected" : ""}>Pending</option>
            <option ${c.status === "Resolved" ? "selected" : ""}>Resolved</option>
            <option ${c.status === "Rejected" ? "selected" : ""}>Rejected</option>
          </select>
        </td>
        <td>
          <button onclick="deleteComplaint('${c.id}')">Delete</button>
        </td>
      </tr>
    `;
  });
}

async function updateStatus(id, status) {
  await fetch(`/complaints/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status })
  });
}

async function deleteComplaint(id) {
  await fetch(`/complaints/${id}`, { method: "DELETE" });
  loadComplaints();
}
