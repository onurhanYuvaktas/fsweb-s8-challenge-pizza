import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App"; // ✅ Burası çok önemli
import "./index.css";    // opsiyonel

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />  {/* ✅ App bileşeni burada render edilmeli */}
    </BrowserRouter>
  </React.StrictMode>
);