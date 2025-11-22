import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <div className="header">
        <h1>Lab4-CAW — React Exercises</h1>
      </div>

      <section>
        <h2>Welcome to the React Lab Exercises</h2>
        <p>Click on any exercise below to view and interact with it:</p>

        <div className="exercise-links">
          <Link to="/exercise1" className="exercise-card">
            <h3>Exercise 1</h3>
            <p>ClickMe button, toggle, three buttons, and counter</p>
          </Link>

          <Link to="/exercise2" className="exercise-card">
            <h3>Exercise 2</h3>
            <p>
              List mapping with DisplayTab component (numbered, removable items)
            </p>
          </Link>

          <Link to="/exercise3" className="exercise-card">
            <h3>Exercise 3</h3>
            <p>Authentication form with user management</p>
          </Link>

          <Link to="/exercise4" className="exercise-card">
            <h3>Exercise 4</h3>
            <p>Styled div creator with color picker</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
