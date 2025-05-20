import { Link } from "react-router-dom";
import "./success.css";

export default function Success() {
  return (
    <div className="success-container">
      <img src="/images/iteration-1-images/logo.svg" alt="logo" />
      <h2></h2>
      <p>TEBRİKLER! <br /> SİPARİŞİNİZ ALINDI!</p>
      <Link to="/" className="btn">ANA SAYFAYA DÖN</Link>
    </div>
  );
}