import { Routes, Route } from "react-router-dom";
import Home from "./HomePage/Home";
import Order from "./OrderPage/Order";
import Success from "./SuccessPage/Success";
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </div>
  );
};