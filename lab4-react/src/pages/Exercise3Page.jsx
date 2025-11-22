import React from "react";
import { Link } from "react-router-dom";
import Exercise3 from "../exercises/Exercise3";

export default function Exercise3Page() {
  return (
    <div className="container">
      <div className="header">
        <h1>Lab4-CAW</h1>
        <Link to="/" className="back-link">
          ← Back to Home
        </Link>
      </div>
      <Exercise3 />
    </div>
  );
}
