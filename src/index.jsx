import React from "react";
import ReactDOM from "react-dom/client";  // <-- updated import
import App from "./components/App";
import "./../public/styles.css";

// Create a root container
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// CHALLENGE:
// 1. Implement the add note functionality.
// - Create a constant that keeps track of the title and content.
// - Pass the new note back to the App.
// - Add new note to an array.
// - Take array and render separate Note components for each item.

// 2. Implement the delete note functionality.
// - Callback from the Note component to trigger a delete function.
// - Use the filter function to filter out the item that needs deletion.
// - Pass an id over to the Note component, pass it back to the App when deleting.
