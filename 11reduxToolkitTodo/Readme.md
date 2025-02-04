### **1. What is Redux Toolkit (RTK)? 🤔**

Redux Toolkit is the **official recommended way to use Redux** for state management in React applications. It simplifies the process of setting up and managing global state by reducing boilerplate code.

---

### **2. Why Use Redux Toolkit?**

- **Simplified Redux Setup:** No need to manually write complex reducers or actions.
- **Better Performance:** Includes powerful tools like `createSlice` and `createAsyncThunk`.
- **Less Boilerplate:** Reduces repetitive code.
- **Built-in DevTools:** Easy debugging using Redux DevTools.

---

### **3. When to Use Redux Toolkit?**

- **Global State:** When multiple components need access to shared data.
- **Complex State Logic:** When state operations become too large or hard to manage with just React's Context API.
- **Asynchronous Logic:** Managing API calls and async logic with `createAsyncThunk`.

---

### **4. Installing Redux Toolkit**

```bash
npm install @reduxjs/toolkit react-redux
```

---

### **5. Basic Workflow (Step-by-Step) 📚**

#### **Step 1: Create a Redux Slice**

A **slice** is a part of the state and contains:
- Initial state
- Reducer functions to handle actions
- Automatically generated action creators

Create a file `counterSlice.js`:

```jsx
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
```

---

#### **Step 2: Configure the Store**

The **store** is where the entire state tree of the application lives.

Create a file `store.js`:

```jsx
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
```

---

#### **Step 3: Provide the Store to React**

Wrap your app in the `<Provider>` component to make the store available.

**index.js:**

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

---

#### **Step 4: Connect Component to Redux State**

Use the `useSelector` and `useDispatch` hooks to interact with the store.

**Counter.js:**

```jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

export default Counter;
```

---

### **Complete Project Structure**

```
src/
├── store.js
├── counterSlice.js
├── Counter.js
├── App.js
└── index.js
```

---

### **6. Advanced Features**

#### **1. Handling Asynchronous Actions**

Use `createAsyncThunk` for API calls.

**fetchDataSlice.js:**

```jsx
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return await response.json();
});

const dataSlice = createSlice({
  name: "data",
  initialState: { data: [], status: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default dataSlice.reducer;
```

**Component Usage:**

```jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./fetchDataSlice";

function DataComponent() {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      <h1>Data Status: {status}</h1>
      {data.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}

export default DataComponent;
```

---

### **7. Useful Hooks**

| **Hook**         | **Purpose**                                      |
|------------------|---------------------------------------------------|
| `useSelector`    | Select data from the Redux store.                |
| `useDispatch`    | Dispatch actions to update the state.            |
| `createAsyncThunk` | Handle asynchronous operations like API calls.|

---

### **8. Best Practices**

1. **Organize Slices:** Group slices in a dedicated folder (`features/`).
2. **Keep Actions Minimal:** Avoid putting complex logic in reducers.
3. **Avoid Direct State Mutation:** RTK uses Immer, so mutations are safe.
4. **Memoize Selectors:** Use `reselect` for optimized state selection if necessary.

---

### **9. Example Recap**

- **State Management Example:** Counter App  
  - Increment, decrement, reset the counter using Redux state.  
  - Global state accessible throughout the app.
