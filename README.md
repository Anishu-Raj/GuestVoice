GuestVoice: Understanding Customer Experience in Homestays

An AI-powered web application that analyzes homestay guest reviews to identify sentiment, extract key themes, and generate helpful response suggestions for improving customer experience.

Tech Stack
Frontend: React.js + Tailwind CSS
Backend: Node.js + Express.js
Database: MongoDB Atlas
AI Integration: Google Gemini API

Project Structure

GuestVoice 
│
├── frontend/
├── backend/
├── README.md
└── .gitignore
Setup 

# GuestVoice Backend

Backend REST API for the GuestVoice project.

## Tech Stack

- Node.js
- Express.js
- CORS
- dotenv
- Nodemon (Development)

---

## Features

- REST API
- CRUD Operations
- Search Reviews
- Review Statistics API
- JSON Responses
- Error Handling Middleware
- Environment Variable Support (.env)

---

## API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/reviews | Get all reviews |
| GET | /api/reviews/:id | Get review by ID |
| POST | /api/reviews | Create review |
| PUT | /api/reviews/:id | Update review |
| DELETE | /api/reviews/:id | Delete review |
| GET | /api/reviews/search?q=value | Search reviews |
| GET | /api/reviews/stats | Review statistics |

---

## Environment Variables

Create a `.env` file.

Example:

```env
PORT=5000
```

A sample file is available as:

```
.env.example
```

---

## Run Backend Locally

### 1. Clone Repository

```bash
git clone <repository-url>
```

### 2. Go to backend

```bash
cd backend
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start Development Server

```bash
npm run dev
```

> Uses **Nodemon** for automatic server restart during development.

Or start normally:

```bash
npm start
```

Server runs at:

```
http://localhost:5000
```

---

## Dependencies

- express
- cors
- dotenv

## Dev Dependency

- nodemon
