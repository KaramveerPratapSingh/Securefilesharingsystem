# 📞 Contact Manager API

A secure RESTful API built with **Node.js**, **Express**, and **MongoDB** for managing user accounts and their personal contacts. Supports authentication with **JWT**, password hashing with **bcrypt**, and follows clean MVC architecture.

---

## 🌟 Features

✅ User Registration & Login  
✅ JWT-based Authentication  
✅ Secure Contact CRUD (Create, Read, Update, Delete)  
✅ Auth Middleware for Protected Routes  
✅ Modular File Structure (Controllers, Routes, Middleware)  
✅ MongoDB & Mongoose Integration  
✅ Centralized Error Handling

---

## 🛠 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **JWT** for authentication
- **bcrypt** for password hashing
- **dotenv** for environment config
- **nodemon** for development

---

## 📂 Project Structure

mycontacts-backend/
│
├── controller/
│ └── contactController.js
│ └── userController.js
│
├── routes/
│ └── contactRoutes.js
│ └── userRoutes.js
│
├── models/
│ └── contactModel.js
│ └── userModel.js
│
├── middleware/
│ └── validateTokenHandler.js
│ └── errorHandler.js
│
├── config/
│ └── dbConnection.js
│
├── server.js
└── .env

---

## 🔐 API Endpoints

### 🧑‍💻 User Routes (`/api/user`)
| Method | Endpoint         | Description             |
|--------|------------------|-------------------------|
| POST   | /register        | Register a new user     |
| POST   | /login           | Login and get JWT token |
| GET    | /current         | Get current user (auth) |

---

### 📞 Contact Routes (`/api/contacts`) 🔒 *Requires JWT*
| Method | Endpoint         | Description                    |
|--------|------------------|--------------------------------|
| GET    | /                | Get all contacts (user-specific) |
| POST   | /                | Create a new contact           |
| GET    | /:id             | Get a contact by ID            |
| PUT    | /:id             | Update contact by ID           |
| DELETE | /:id             | Delete contact by ID           |

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory with:
PORT=5001
MONGO_URI=your_mongo_connection_string
ACCESS_TOKEN_SECRET=your_jwt_secret


---

## ▶️ Getting Started

1. **Clone the repo:**
```bash
git clone https://github.com/yourusername/mycontacts-backend.git
cd mycontacts-backend
npm install
npm run dev

🧪 Testing
You can test endpoints using:

Postman
Thunder Client
Or curl commands

Ensure to include JWT in Authorization header as:
nginx
Copy
Edit
Bearer your_token_here

This project is open source and available under the MIT License.