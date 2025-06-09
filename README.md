# 🩺 DocTalk

**DocTalk** is a responsive, single-page web application built with React and Vite, designed to simplify doctor appointment scheduling and management. Developed as a practice project, it emphasizes modern frontend development practices—leveraging React Router for navigation, Tailwind CSS and DaisyUI for styling, and Recharts for data visualization.

## 🔗 Live Site

👉 [View Live Website](https://project-8-phero.netlify.app/)

---

## 📚 Features Overview

### 🌐 Global Components
- **Navbar** (Visible on all pages including 404): Includes logo, site title, 4 navigation items, and a call-to-action button.
- **Footer** (Visible on all except 404): Centered logo, navigation menu, and social media links.

---

### 🏠 Homepage
- **Banner Section**: Gradient background, centered heading/text, two positioned images (as per design).
- **Doctors Section**: 
  - Displays 6 doctor cards in a 3x2 grid.
  - "Show All" button reveals all 12 doctors.
  - Each card includes: image, name, education, specialty, experience, registration number, and a “View Details” button.
- **Success Metrics**:
  - 4 statistic cards with icons and animated counters using `react-countup`.

---

### 👨‍⚕️ Doctor Details Page
- Full doctor profile with:
  - Name, image, education, specialties, workplace, fee.
  - Availability shown as a badge.
- **Appointment Functionality**:
  - "Book Now" button:
    - Prevents double booking.
    - Shows success/error toast.
    - Redirects to booking page on success.

---

### 📅 Bookings Page
- Displays all booked appointments in a 1-column format.
- Each appointment includes: name, fee, education, specialty, and a “Cancel” button.
- Appointments persist via `localStorage`.
- Canceling an appointment updates state and chart data.

---

### 📝 Blogs Page
- In-depth explanations for key React concepts:
  - `useState` and how it works.
  - `useEffect` and its use cases.
  - Custom hooks and when to use them.
  - Controlled vs. uncontrolled components.
  - Introduction to `useFormStatus()`.

---

### ❌ Error Page
- Shown for all invalid routes (e.g., `/contacts`, `/doctors/invalid-id`).
- Includes navbar.
- Excludes footer.
- Includes button to redirect users to the homepage.

---

## 📊 Data Visualization

### Recharts Integration
- Appointment fees are visualized using Recharts.
- Chart updates dynamically when appointments are added or removed.
- Hidden automatically when no appointments exist.

---

## ⚙️ Additional Functionalities

- **Loading State**: Loader displayed on route changes and during data fetches.
- **Fallbacks**: Prevents crashes on reload or data failure.
- **Dynamic Page Titles**: Updated using `useLocation()` without third-party libraries.
- **Date-Based Availability**:
  - Bookings only allowed if the doctor is available today.
  - Unavailable doctors display a badge and message.

---

## 🛠️ Tech Stack

- **React + Vite**
- **JavaScript (ES6+)**
- **Tailwind CSS + DaisyUI**
- **React Router DOM**
- **LocalStorage (for persistence)**
- **Recharts (data visualization)**
- **React CountUp (animations)**

---


