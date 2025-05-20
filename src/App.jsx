import { Routes, Route } from "react-router-dom";
import Home from "./HomePage/Home";
import Order from "./OrderPage/Order";
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </div>
  );
};