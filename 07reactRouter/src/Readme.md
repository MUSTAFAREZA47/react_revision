### **1. What is React Router? 🤔**

React Router is a library for **navigating between different pages or views** in a React application without reloading the entire page.  
It allows you to create **Single Page Applications (SPAs)** where content dynamically updates without full page reloads.

---

### **2. Why Use React Router?**

1. **Navigation:** Easily switch between views (Home, About, etc.).
2. **Dynamic URLs:** Handle pages like `/user/:id` or `/product/:category`.
3. **No Full Page Reload:** Keeps your app fast by avoiding unnecessary page loads.
4. **Nested Routes:** Organize complex applications with subroutes.

---

### **3. Installing React Router**

```bash
npm install react-router-dom
```

---

### **4. Basic Workflow (Step-by-Step) 📚**

#### **Step 1: Setup BrowserRouter**
Wrap your entire app in `<BrowserRouter>`. This component enables routing in a web application.

```jsx
import { BrowserRouter } from "react-router-dom";
import App from "./App";

function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default Root;
```

---

#### **Step 2: Define Routes**
In your main app component (`App.js`), use `Routes` and `Route` to map URLs to components.

```jsx
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
```

- **`path`** defines the URL.
- **`element`** specifies which component to render.

---

#### **Step 3: Create Components for Pages**
Each component represents a "page" in your app.

**Home.js**
```jsx
function Home() {
  return <h1>Welcome to the Home Page!</h1>;
}

export default Home;
```

**About.js**
```jsx
function About() {
  return <h1>About Us Page</h1>;
}

export default About;
```

---

#### **Step 4: Navigation with Links**
Use the `Link` component to navigate between pages without reloading.

```jsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/about">About</Link>
    </nav>
  );
}

export default Navbar;
```

---

### **Complete Project Structure**

```
src/
├── components/
│   └── Navbar.js
├── pages/
│   ├── Home.js
│   └── About.js
├── App.js
└── index.js
```

---

### **5. Adding Advanced Features**

#### **1. Nested Routes**
Organize routes within subcomponents.

```jsx
import { Routes, Route } from "react-router-dom";

function Dashboard() {
  return (
    <Routes>
      <Route path="/" element={<h2>Dashboard Home</h2>} />
      <Route path="settings" element={<h2>Settings Page</h2>} />
    </Routes>
  );
}

// Parent route
<Route path="/dashboard/*" element={<Dashboard />} />
```

#### **2. Dynamic Routes with URL Parameters**
Use `:paramName` in the path to handle dynamic URLs.

```jsx
import { useParams } from "react-router-dom";

function UserProfile() {
  const { userId } = useParams();

  return <h1>Viewing profile of user: {userId}</h1>;
}

<Route path="/user/:userId" element={<UserProfile />} />
```

---

#### **3. Programmatic Navigation**
Navigate using code instead of links with `useNavigate`.

```jsx
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate("/about")}>Go to About</button>
  );
}
```

---

#### **4. Not Found Page (404 Handling)**
Catch all unmatched routes using `"*"`.

```jsx
function NotFound() {
  return <h1>404 - Page Not Found</h1>;
}

<Route path="*" element={<NotFound />} />
```

---

#### **5. Lazy Loading Components**
Improve performance by loading components only when needed.

```jsx
import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Suspense>
  );
}
```

---

### **6. Useful Hooks**

| **Hook**      | **Purpose**                                       |
|---------------|----------------------------------------------------|
| `useNavigate` | Navigate programmatically between routes.         |
| `useParams`   | Access dynamic URL parameters.                    |
| `useLocation` | Access current URL information (query strings).   |
| `useMatch`    | Check if the current route matches a specific URL.|

---

### **7. Key Best Practices**

1. **Organize Components:** Keep route components in a `pages/` directory.
2. **Error Handling:** Always handle 404 routes.
3. **Performance Optimization:** Use lazy loading for large apps.
4. **Relative Links:** Prefer relative paths for nested routes.

---

### **8. Example App Walkthrough**

Let's create a simple app with:
- A **Home** page (`/`)
- An **About** page (`/about`)
- A **Profile** page (`/profile/:id`)
- A **404 Not Found** page

**App.js**
```jsx
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Profile from "./Profile";
import NotFound from "./NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile/:id" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
```

**Profile.js**
```jsx
import { useParams } from "react-router-dom";

function Profile() {
  const { id } = useParams();

  return <h1>Profile Page for User {id}</h1>;
}

export default Profile;
```

---

### **Final Recap**
1. **Install React Router:** `npm install react-router-dom`
2. **Set up `<BrowserRouter>`**
3. **Define routes with `<Routes>` and `<Route>`**
4. **Navigate using `<Link>` and `useNavigate()`**
5. **Handle 404s and dynamic routes**