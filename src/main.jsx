import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// Context
import DarkmodeProvider from "./contexts/Darkmode";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkmodeProvider>
      <App />
    </DarkmodeProvider>
  </React.StrictMode>
);
