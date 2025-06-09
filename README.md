# 🩺 DocTalk

**DocTalk** is a single-page web application for scheduling and managing doctor appointments. Built with React and Vite, the platform provides a smooth and interactive user experience through dynamic routing, persistent state management, and visually engaging components.

🔗 **Live Site**: [https://your-live-site-link.com](https://your-live-site-link.com)

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

## 👨‍💻 Developer

**Developed by:** [Your Name]  
🔗 [LinkedIn](https://linkedin.com/in/yourprofile) • [Twitter](https://twitter.com/yourhandle) • [Instagram](https://instagram.com/yourhandle)

---

## 📸 Project Preview

### 🏠 Homepage

![DocTalk Homepage](./assets/screenshots/homepage.png)

> _Replace with your actual screenshot path or hosted image link._

---

## 📄 License

This project is built for educational and personal practice purposes. You are free to use, modify, and learn from it.




