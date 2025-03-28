# Algo Root - Frontend Developer Task

A React.js/Next.js application with user authentication and dashboard data table implementation.

## Features

- **User Authentication**
  - Login/Signup with email/password
  - Form validation and error handling
  - Session management using localStorage

- **Dashboard**
  - Responsive navbar with user dropdown
  - Sidebar navigation
  - Data table with:
    - Sorting (ascending/descending)
    - Searching/filtering
    - Pagination

## Technologies Used

- Next.js (React framework)
- React Context API (state management)
- localStorage (session persistence)
- CSS Modules (styling)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/algoroot-task.git
   cd algoroot-task

Install dependencies:

bash
Copy
npm install
Run the development server:

bash
Copy
npm run dev
Open http://localhost:3000 in your browser.

Project Structure
Copy
/src
├── components/
│   ├── AuthForm.js      # Login/Signup form
│   ├── DataTable.js     # Interactive data table
│   ├── Navbar.js        # Top navigation bar
│   └── Sidebar.js       # Side navigation
├── context/
│   └── AuthContext.js   # Authentication state
├── pages/
│   ├── index.js         # Login/Signup page
│   └── details.js       # Dashboard page
└── styles/
    └── globals.css      # Global styles
Usage
Authentication

Visit / to access the login page

Use any email format (validation is basic for demo)

Password must be at least 6 characters

Dashboard

After login, you'll be redirected to /details

Table features:

Click column headers to sort

Use search box to filter data

Pagination controls at bottom
