# 🚀 ProjectHub - Project Management Dashboard

A modern full-stack Project Management Dashboard built with the MERN Stack. The application enables users to efficiently manage projects and tasks through a clean, responsive interface with real-time dashboard analytics.

---

## 🌐 Live Demo

### Frontend
https://project-management-dashboard-sable.vercel.app/

### Backend API
https://project-management-backend-ftc0.onrender.com/

---

# 📌 Features

### 📊 Dashboard
- View total projects
- Active projects count
- Completed tasks count
- Pending tasks count

### 📁 Project Management
- Create new projects
- Edit project details
- Delete projects
- Search projects
- Filter projects by status
- Sort projects
- View individual project details

### ✅ Task Management
- Create tasks for projects
- Update task status
- Delete tasks
- Organize tasks project-wise

### 🎨 User Interface
- Responsive design
- Modern dark theme
- Loading skeletons
- Error handling
- Clean dashboard layout

---

# 🛠️ Tech Stack

## Frontend
- React.js
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- Lucide React Icons

## Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

## Deployment
- Vercel
- Render
- MongoDB Atlas

---

# 📂 Project Structure

```
project-management-dashboard/
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   └── App.jsx
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── seed/
│   └── server.js
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/PanabakaMahesh/project-management-dashboard.git

cd project-management-dashboard
```

---

## Backend Setup

```bash
cd backend

npm install
```

Create a `.env` file

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string
```

Run Backend

```bash
npm run dev
```

---

## Frontend Setup

```bash
cd frontend

npm install
```

Create a `.env` file

```env
VITE_API_URL=http://localhost:5000/api
```

Run Frontend

```bash
npm run dev
```

---

# 🔌 REST API

## Dashboard

```
GET /api/dashboard
```

## Projects

```
GET    /api/projects
GET    /api/projects/:id
POST   /api/projects
PUT    /api/projects/:id
DELETE /api/projects/:id
```

## Tasks

```
GET    /api/tasks/project/:projectId
POST   /api/tasks
PUT    /api/tasks/:id
DELETE /api/tasks/:id
```

---

# 🚀 Deployment

### Frontend
Vercel

### Backend
Render

### Database
MongoDB Atlas

---

# 🔮 Future Enhancements

- User Authentication (JWT)
- Team Collaboration
- File Attachments
- Email Notifications
- Activity Timeline
- Charts & Analytics
- Role-Based Access Control
- Due Date Reminders

---

# 👨‍💻 Author

**Mahesh Panabaka**

LinkedIn:
https://www.linkedin.com/in/panabaka-mahesh-1637m/

GitHub:
https://github.com/PanabakaMahesh

---

# ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.