# TechItem Hub

A modern, responsive e-commerce style web application built with **Next.js 16 (App Router)**. It features a beautiful landing page, mock authentication, product listing, and detailed product views.


### Live Demo
🌐 [https://techitem-hub.vercel.app/](https://techitem-hub.vercel.app)  
*(Replace with your actual Vercel link)*

### Features Implemented
- **Landing Page** with 7 beautifully designed sections (Hero, Featured Products, Why Choose Us, Testimonials, Latest News, Brands, Call to Action)
- **Mock Authentication** using cookies (hardcoded credentials)
- **Public Product List** (/items) with responsive cards
- **Product Details** page (/items/[id])
- **Protected Routes** using middleware (details page requires login)
- **Responsive Design** with Tailwind CSS (mobile-first)
- **Navbar & Footer** with active link underline, logo, login/logout
- **Loading States** for better UX
- **Auto-fill credentials** button on login page

### Tech Stack
- **Next.js 16** (App Router)
- **Tailwind CSS** (for styling)
- **JavaScript Cookies** (for mock auth)
- **Lucide React** (icons)
- **Vercel** (deployment)

### Setup & Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/akashsarker2478/techitem-hub.git
   cd techitem-hub

Install dependencies:Bashnpm install
Run the development server:Bashnpm run devOpen http://localhost:3000 in your browser.

Routes Overview

/ → Landing Page (Home)
/login → Login Page
/items → All Products List (Public)
/items/[id] → Product Details (Protected - requires login)

Login Credentials (Mock)

Email:test@example.com
Password: 123456

Auto-fill button available on login page for quick testing.
Deployment
Deployed on Vercel (automatic from GitHub repo)
Live Link: https://techitem-hub.vercel.app


Landing Page
Products List
Product Details
Login Page

Future Improvements (Optional)

Real authentication with NextAuth.js (Google login)
Add to Cart functionality
Add Product functionality
Admin dashboard for adding products
Search & filter on products

Made with ❤️ by Akash
Last updated: January 17, 2026