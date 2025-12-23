# Task Management System (API-First, Authenticated)

A backend-focused **Task Management System** built using the MERN stack, emphasizing **authentication, authorization, and clean API design** rather than UI gimmicks.

This project demonstrates how real-world applications handle **user isolation, secure access control, and stateful workflows**, with a minimal frontend acting as a thin client over a robust backend.

---

## 🚀 Project Overview

This is **not a basic todo app**.

It is an **API-first task management system** where:
- Every request is authenticated
- Data access is scoped per user
- Authorization is enforced server-side
- Business logic lives in controllers, not the UI

The frontend exists only to **consume and validate backend APIs**, mirroring real production systems.

---

## 🔐 Authentication & Authorization

- User registration with **bcrypt password hashing**
- Login with **JWT token generation**
- Token-based authentication middleware
- Protected routes for all task operations
- Server-side authorization checks to prevent cross-user access

> Users cannot read, update, or delete tasks they do not own — enforced at the controller level.

---

## 🗂️ Task Workflow System

Each task follows a defined lifecycle:

- `Pending`
- `In Progress`
- `Done`

Features:
- Create tasks with initial state
- Update task status via protected APIs
- Delete tasks securely
- Visual feedback for completed tasks

---

## 🧱 Backend Architecture

The backend follows a clean separation of concerns:

- **Routes** → request mapping
- **Controllers** → business logic
- **Models** → database schema
- **Middleware** → authentication & authorization

Key principles:
- API-first design
- Stateless authentication
- Centralized error handling
- Environment-based configuration

---

## 🛠️ Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- dotenv
- CORS

### Frontend (Thin Client)
- React
- React Router
- Axios

---

## 🔌 REST API Endpoints

### Authentication

- POST /api/auth/register → Register new user
- POST /api/auth/login → Authenticate & receive JWT

### Tasks (Protected)

- GET /api/tasks → Fetch user-specific tasks
- POST /api/tasks → Create a new task
- PUT /api/tasks/:id → Update task status
- DELETE /api/tasks/:id → Delete a task

---

## 🚀 Running the Project Locally

Follow the steps below to run the project on your local machine.

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/<your-username>/task-manager.git
cd task-manager
```
 
### 2️⃣ Backend Setup
```bash
cd server
npm install
```

Create a .env file inside the server directory and add the following variables:
```bash
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Start Backend Server:
```bash
npm start
```
The backend will run on : `http://localhost:5000`


### 3️⃣ Frontend Setup
```bash
cd client
npm install
npm start
```

The frontend will run on : `http://localhost:3000`

---

## 🧪 Testing

- APIs tested using Postman

- Authenticated routes verified using JWT headers

- Frontend tested against live backend APIs

- Edge cases handled (unauthorized access, invalid tokens)

## 👤 Author
 
Khushi Shorey
Student at IIIT Allahabad



