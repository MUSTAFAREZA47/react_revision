### **1. What is Context API?** 🤔

React Context API is a way to share **data** across components without having to pass props through multiple levels (called **prop drilling**).

#### **Example of Prop Drilling Problem**

```jsx
function App() {
  const user = "John Doe";
  return <Parent user={user} />;
}

function Parent({ user }) {
  return <Child user={user} />;
}

function Child({ user }) {
  return <GrandChild user={user} />;
}

function GrandChild({ user }) {
  return <h1>Hello, {user}!</h1>;
}
```

Here, `user` is passed down unnecessarily through every component until `GrandChild`. With Context API, you avoid this.

---

### **2. Why Use Context API?**

- **Avoid Prop Drilling**: Share data between components easily.
- **Global State Management**: Manage app-wide settings like themes, user authentication, etc.
- **Cleaner Code**: Keep your components simpler.

---

### **3. How to Use Context API? (Step-by-Step) 📚**

---

#### **Step 1: Create Context**

Create a separate file (`UserContext.js`) to define the context.

```jsx
import { createContext } from "react";

// Create context and export it
const UserContext = createContext();
export default UserContext;
```

---

#### **Step 2: Provide the Context Value**

Wrap the components that need access to the shared data inside a **Provider**.  
The `Provider` component gives child components access to data.

```jsx
import React, { useState } from "react";
import UserContext from "./UserContext";
import Home from "./Home";

function App() {
  const [user, setUser] = useState("John Doe");

  return (
    // Provide the context value
    <UserContext.Provider value={{ user, setUser }}>
      <Home />
    </UserContext.Provider>
  );
}

export default App;
```

Here, the `UserContext.Provider` shares `user` and `setUser` with the entire app.

---

#### **Step 3: Consume the Context**

In any child component, use the `useContext` hook to access the shared data.

```jsx
import React, { useContext } from "react";
import UserContext from "./UserContext";

function Home() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h1>Hello, {user}!</h1>
      <button onClick={() => setUser("Jane Doe")}>Change User</button>
    </div>
  );
}

export default Home;
```

---

### **Complete Example Code Structure**
```
src/
├── App.js
├── Home.js
└── UserContext.js
```

**App.js**
```jsx
import React, { useState } from "react";
import UserContext from "./UserContext";
import Home from "./Home";

function App() {
  const [user, setUser] = useState("John Doe");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Home />
    </UserContext.Provider>
  );
}

export default App;
```

**Home.js**
```jsx
import React, { useContext } from "react";
import UserContext from "./UserContext";

function Home() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h1>Hello, {user}!</h1>
      <button onClick={() => setUser("Jane Doe")}>Change User</button>
    </div>
  );
}

export default Home;
```

**UserContext.js**
```jsx
import { createContext } from "react";

const UserContext = createContext();
export default UserContext;
```

---

### **4. How it Works (Recap)** 🔄

1. **Create Context:** `createContext()` to define shared data.
2. **Provide Context:** Wrap components using `<Provider>`.
3. **Consume Context:** Use `useContext()` to access shared data.

---

### **5. Advanced Tips**

#### **1. Multiple Contexts**
You can create and use multiple contexts by nesting them.

```jsx
<AuthContext.Provider value={authValue}>
  <ThemeContext.Provider value={themeValue}>
    <App />
  </ThemeContext.Provider>
</AuthContext.Provider>
```

#### **2. Performance Optimization**
Avoid unnecessary re-renders by memoizing the context value.

```jsx
const contextValue = useMemo(() => ({ user, setUser }), [user]);
<UserContext.Provider value={contextValue}>
```

#### **3. Create Custom Hooks for Cleaner Code**
Encapsulate context logic into a custom hook.

```jsx
import { useContext } from "react";
import UserContext from "./UserContext";

export const useUser = () => useContext(UserContext);
```

---

### **6. Common Use Cases**
1. **Theme Management:** Light/Dark Mode
2. **Authentication:** User login state
3. **Language Selection:** Multi-language apps

---

### **Final Notes for Beginners**
- Context API is **great for small to medium projects**.
- For larger apps, you may need tools like **Redux** or **Zustand** for better scalability.
- Start by practicing simple examples to fully understand the power of Context API.