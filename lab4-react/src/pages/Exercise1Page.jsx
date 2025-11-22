import React from "react";
import { Link } from "react-router-dom";
import Exercise1 from "../exercises/Exercise1";

export default function Exercise1Page() {
  return (
    <div className="container">
      <div className="header">
        <h1>Lab4-CAW</h1>
        <Link to="/" className="back-link">
          ← Back to Home
        </Link>
      </div>
      <Exercise1 />
    </div>
  );
}
