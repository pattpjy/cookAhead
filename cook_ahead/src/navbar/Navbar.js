import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <header className="header-container">
      <nav className="header-nav">
        <button className="invis-button" onClick={() => navigate("/")}>
          <h1 className="main-title">My Meal Plan</h1>
        </button>
      </nav>
    </header>
  );
};
export default Navbar;
