# Online Complaint / Issue Tracker System

## 📌 Objective
To build a basic full-stack web application where users can submit complaints and an admin can manage them, using HTML, CSS, JavaScript, Node.js, and Express.js without using any database.

---

## 🧩 Problem Statement
Design and develop a web-based Online Complaint / Issue Tracker System where:
- Users can submit complaints
- Complaints are assigned a unique ID automatically
- Admin can view, update, and delete complaints
- Data is stored using in-memory data structures (no database)

---

## 🛠️ Technology Stack
- **Frontend:** HTML, CSS, JavaScript (Vanilla JS)
- **Backend:** Node.js, Express.js
- **Database:** Not used (In-memory storage)

---

## ✨ Features

### 👤 User Module
- Submit a complaint
- Auto-generated complaint ID
- Complaint status set to **Pending** by default

### 🧑‍💼 Admin Module
- View all complaints
- Update complaint status (Pending / Resolved / Rejected)
- Delete complaints

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|------|----------|------------|
| GET | /complaints | Get all complaints |
| GET | /complaints/:id | Get complaint by ID |
| POST | /complaints | Submit a new complaint |
| PUT | /complaints/:id | Update complaint status |
| DELETE | /complaints/:id | Delete a complaint |

---

## 📁 Project Structure

