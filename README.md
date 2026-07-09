# ☁️ CloudVault

A modern cloud storage platform built with the MERN stack that allows users to securely upload, manage, download, and share files from anywhere.

Built using React, TypeScript, Express, MongoDB Atlas, AWS S3, and deployed on Vercel + Render.

---

## 🚀 Live Demo

Frontend:
https://cloudvault-olive.vercel.app

Backend API:
https://cloudvault-api-w5ar.onrender.com

---

## 📸 Screenshots

### Login

![Login](screenshots/login.png)

---

### Dashboard

![Dashboard](screenshots/dashboard.png)

---

### Upload Files

![Upload](screenshots/upload-dialog.png)

---

### My Files

![My Files](screenshots/my-files.png)

---

### Shared Files

![Shared Files](screenshots/shared-files.png)

---

### Mobile Responsive

![Mobile](screenshots/mobile-view.png)

---

# ✨ Features

### Authentication

- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Public Routes
- Automatic Redirects

---

### File Management

- Upload files
- Download files
- Delete files
- View uploaded files
- Secure cloud storage
- AWS S3 integration

---

### Sharing

- Generate secure share links
- Disable sharing
- Public download links
- Token-based sharing

---

### Dashboard

- Dynamic statistics
- Storage usage
- File count
- Shared file count
- Responsive layout

---

### Search & Filtering

- Search files
- Filter by type
- Filter shared/private
- Sort by:
  - Name
  - Size
  - Date

---

### UI

- Responsive Design
- Mobile Sidebar
- Loading Skeletons
- Confirmation Dialogs
- Empty States
- Toast Notifications

---

# 🛠 Tech Stack

## Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- TanStack Query
- Zustand
- Axios
- React Hook Form
- Zod
- Shadcn UI
- Lucide Icons

---

## Backend

- Node.js
- Express.js
- TypeScript
- MongoDB Atlas
- Mongoose
- JWT
- Multer

---

## Cloud Services

- AWS S3
- MongoDB Atlas
- Render
- Vercel

---

# 📂 Project Structure

```
cloudvault
│
├── client
│   ├── components
│   ├── pages
│   ├── services
│   ├── hooks
│   └── store
│
├── server
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── config
│   └── utils
│
└── screenshots
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/paritoshXsingh/cloudvault.git

cd cloudvault
```

---

## Backend

```bash
cd server

npm install

npm run dev
```

---

## Frontend

```bash
cd client

npm install

npm run dev
```

---

# 🔐 Environment Variables

## Backend

```env
PORT=

MONGODB_URI=

JWT_SECRET=

AWS_REGION=

AWS_ACCESS_KEY_ID=

AWS_SECRET_ACCESS_KEY=

AWS_BUCKET_NAME=

BASE_URL=

CLIENT_URL=
```

---

## Frontend

```env
VITE_API_URL=
```

---

# 🏗 Architecture

```
React (Vercel)

↓

Express API (Render)

↓

MongoDB Atlas

↓

AWS S3
```

---

# 🎯 Future Improvements

- Starred Files
- Folder Organization
- Storage Quotas
- File Preview
- Drag & Drop Upload
- Multi-file Upload
- Profile Management

---

# 👨‍💻 Author

**Paritosh Singh**

GitHub:
https://github.com/paritoshXsingh

LinkedIn:
https://www.linkedin.com/in/paritosh-singh-dev

---

## ⭐ If you found this project useful, consider giving it a star!
