# 🩺 DocTalk

**DocTalk** is a single-page web application for scheduling and managing doctor appointments. Built with React and Vite, the platform provides a smooth and interactive user experience through dynamic routing, persistent state management, and visually engaging components.

🔗 **Live Site**: [View Live Website](https://project-8-web-development.netlify.app/)

---

## 🧩 Key Features

### 🔹 Global Navigation

- **Navbar** on all pages (including error pages), featuring logo, site name, navigation menus, and a call-to-action button.
- **Footer** on all pages except error routes, with centered logo, menu items, and social icons linking to the developer’s profiles.

---

### 🏠 Homepage

- **Hero Section** with gradient background, heading, text, and decorative images.
- **Doctors Section**:
  - Displays 6 doctor cards by default with details like name, education, specialty, experience, registration number, and image.
  - A “Show All” button loads all 12 doctors.
- **Success Metrics**:
  - 4 animated metric cards with icons using `react-countup`.

---

### 👨‍⚕️ Doctor Details Page

- Full profile view including name, education, specialties, workplace, fee, and availability.
- **Availability** displayed via badges.
- **Book Now Button**:
  - Allows appointment booking only once.
  - Displays success or error toast accordingly.
  - Redirects to the Booking page if successful.

---

### 📅 Booking Page

- Lists all booked appointments in a clean, single-column format.
- Each appointment card shows doctor’s name, fee, education, and specialty.
- Includes **Cancel Appointment** button to remove bookings.
- **localStorage** used to persist appointments even after page reload.
- If no appointments exist, a message and redirect button to the homepage are shown.

---

### 📊 Appointment Analytics

- Visual representation of appointment fees using **Recharts**.
- Updates in real-time when appointments are added or canceled.
- Chart is hidden when no appointments exist.

---

### 📝 Blogs Page

The Blogs page features a set of React-related **questions and answers**, designed to help users understand fundamental and advanced concepts in React. Each topic is presented in a clear Q&A format to support learning and reinforce best practices in React development.

---

### ❌ Error Page

- Displayed for all invalid routes (e.g., `/contacts`, `/doctors/invalid-id`).
- Includes navbar for navigation.
- Excludes footer for visual distinction.
- Contains a button to return to the homepage.

---

### 🌟 Additional Functionalities

- **Loading States** on every route transition and data fetch.
- **Dynamic Page Titles** change based on the current route using `useLocation()`.
- **Doctor Availability Check**:
  - Booking is only allowed if today matches doctor’s available day.
  - Displays an “Unavailable” badge if not available today.
- **Fallback Handling** ensures the app doesn't crash on page reload or data issues.

---

## 🛠️ Technologies Used

- **React + Vite**
- **React Router DOM**
- **Tailwind CSS + DaisyUI**
- **Recharts**
- **React CountUp**
- **JavaScript (ES6+)**
- **LocalStorage** for data persistence

---

## ⚙️ Installation & Setup

Follow the steps below to run **DocTalk** locally on your machine:

### 1. Clone the Repository

```bash
git clone https://github.com/Erfan-Khan-Dhrubo/project-8-Web-development.git
cd project-8
```

### 2. Install Core Dependencies

Make sure you have **Node.js** and **npm** installed, then run:

```bash
npm install
```

### 3. Install Required Packages

If not already installed, run the following commands to install additional dependencies used in this project:

```bash
# React Router
npm install react-router-dom

# Tailwind CSS & PostCSS
npm install tailwindcss @tailwindcss/vite

# DaisyUI (Tailwind plugin for UI components)
npm i -D daisyui@latest
```

### 4. Start the Development Server

```bash
npm run dev
```

The app will start on [http://localhost:5173](http://localhost:5173). Open it in your browser to view it.

---

## A visual representation of my page.

<img src="/Web pic/pic 1.png">
