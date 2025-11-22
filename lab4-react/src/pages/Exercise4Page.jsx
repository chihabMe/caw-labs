import React from "react";
import { Link } from "react-router-dom";
import Exercise4 from "../exercises/Exercise4";

export default function Exercise4Page() {
  return (
    <div className="container">
      <div className="header">
        <h1>Lab4-CAW</h1>
        <Link to="/" className="back-link">
          ← Back to Home
        </Link>
      </div>
      <Exercise4 />
    </div>
  );
}
