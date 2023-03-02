import React from "react";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  let navigate = useNavigate();

  return (
    <section className="error-page">
      <h2 className="error-message">Something went wrong...</h2>
      <button className="error-back-button" onClick={() => navigate("/")}>
        Back
      </button>
      {/* back button navigates to landing page for now, can be changed if decided */}
    </section>
  );
}
