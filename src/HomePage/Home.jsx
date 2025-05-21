import { Link } from "react-router-dom";
import "./home.css";

export default function Home() {
    return (
        <div className="home-container">
            <div className="home">
                <img className="home-logo" src="/logo.svg" alt="banner-logo" />
                <p className="home-text">KOD ACIKTIRIR <br />PİZZA, DOYURUR</p>
                <Link className="btn" to="/order">ACIKTIM</Link>
            </div>
        </div>
    )
}