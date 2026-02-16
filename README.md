# Job Application Tracker

A full-stack job tracking web application that helps users manage and monitor their job applications with clear status tracking, authentication, and persistent cloud storage.

Built with React and Supabase, the application focuses on usability, structured state management, and secure data handling.

---

## Live Demo

🔗 [https://url-shortener.me/BLBO](https://url-shortener.me/BLBO)

## Repository

🔗 [https://github.com/estheroluwabuyi/Job-Tracker](https://github.com/estheroluwabuyi/Job-Tracker)

---

# Features

- 🔐 User authentication (Sign up / Log in)
- 📌 Create, edit, and delete job applications
- 🏷 Filter jobs by status:
  - Applied
  - Interviewed
  - Offered
  - Rejected
  - No Response

- 📝 Optional notes per job entry
- 🔗 Optional application link field
- 📅 Date tracking for submissions
- 🔔 Toast notifications for user feedback
- 🎨 Clean, responsive UI (mobile-first)
- ☁️ Persistent cloud-based storage

---

# Tech Stack

## Frontend

- React
- Context API (global state management)
- Tailwind CSS
- React Icons

## Backend / Database

- Supabase
- PostgreSQL
- Supabase Authentication
- Row Level Security (RLS)

---

# Security & Data Handling

- Secure authentication using Supabase Auth
- Row Level Security (RLS) ensures users can only access their own data
- Persistent cloud database storage with PostgreSQL

---

# Architecture & Implementation

- Component-based structure for maintainability
- Context API used for centralized state management
- Controlled forms for input handling
- Conditional rendering for UI states
- Modular folder structure for scalability

---

# Responsive Design

The application follows a mobile-first approach and is optimized for:

- Mobile devices
- Tablets
- Desktop screens

Tailwind CSS utility classes were used to ensure consistent spacing, layout balance, and visual clarity across breakpoints.

---

# Key Focus Areas

- Clean UI and intuitive user flows
- Clear feedback through toast notifications
- Maintainable and readable code structure
- Secure data access and user isolation

---

# Installation

```bash
git clone https://github.com/estheroluwabuyi/Job-Tracker.git
cd Job-Tracker
npm install
npm start
```

---

# Future Improvements

- Advanced filtering and sorting options
- Search functionality
- Analytics dashboard
- Export (CSV/PDF) functionality
- Performance optimization

---

# Author

Esther Oluwabuyi
Frontend Developer

Portfolio: [https://esther-oluwabuyi-portfolio.vercel.app](https://esther-oluwabuyi-portfolio.vercel.app)
