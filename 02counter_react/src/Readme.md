How javascript is injected in html in react when we create create-react-app and vite@latest

Component naming conventions to capitalise first letter

How react convert jsx into javascript with the help of babel 

React provide special methods named hooks, by which react maintain to maintain variable states and ui updation

/+++   Virtual DOM, Fiber, and Reconciliation



```
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
export default Counter;
```


1. Initial Render: React creates a Virtual DOM representing the initial UI.
2. State Change: When you click the button, the count state updates.
3. Re-render: React creates a new Virtual DOM with the updated UI.
4. Diffing: React compares the new Virtual DOM with the previous one.
5. Reconciliation: React finds that only the text content inside the  <p> element has changed and updates only that part of the real DOM.

In summary, the Virtual DOM is an in-memory representation of the UI, and reconciliation is the process of updating the real DOM to match the Virtual DOM. They work together to provide efficient and performant updates in React applications.Fiber is a significant improvement to React's core, making the reconciliation process more efficient and flexible. It enables incremental rendering, better error handling, and improved support for animations and concurrency. By adopting Fiber, React applications can offer a smoother and more responsive user experience, even in complex and demanding scenarios.
In summary, Fiber is not a new feature you use directly, but an underlying improvement that enhances the performance and capabilities of React applications.
