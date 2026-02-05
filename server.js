const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;


app.use(express.json());
app.use(express.static("public"));

let complaints = [];

const generateId = () => {
  return "CMP" + Date.now();
};

app.get("/complaints", (req, res) => {
  res.json(complaints);
});

app.get("/complaints/:id", (req, res) => {
  const complaint = complaints.find(c => c.id === req.params.id);
  if (!complaint) {
    return res.status(404).json({ message: "Complaint not found" });
  }
  res.json(complaint);
});
app.post("/complaints", (req, res) => {
  const { name, issue } = req.body;

  if (!name || !issue) {
    return res.status(400).json({ message: "All fields required" });
  }

  const newComplaint = {
    id: generateId(),
    name,
    issue,
    status: "Pending"
  };

  complaints.push(newComplaint);
  res.status(201).json(newComplaint);
});

app.put("/complaints/:id", (req, res) => {
  const { status } = req.body;
  const complaint = complaints.find(c => c.id === req.params.id);

  if (!complaint) {
    return res.status(404).json({ message: "Complaint not found" });
  }

  complaint.status = status;
  res.json(complaint);
});

app.delete("/complaints/:id", (req, res) => {
  complaints = complaints.filter(c => c.id !== req.params.id);
  res.json({ message: "Complaint deleted" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
