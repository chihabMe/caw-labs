import React, { useState } from "react";

export default function Exercise1() {
  // Part 1: simple ClickMe showing "Clicked" when clicked
  const [clickedOnce, setClickedOnce] = useState(false);

  // Part 2: toggle button (odd click => "Clicked", even => "Not Clicked")
  const [toggleCount, setToggleCount] = useState(0);

  // Part 3: 3 buttons and show "Button #i was clicked"
  const [lastButton, setLastButton] = useState(null);

  // Part 4: counter with Inc and Dec
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h2>Exercise 1</h2>

      <div style={{ marginBottom: 12 }}>
        <h3>1) ClickMe</h3>
        <button onClick={() => setClickedOnce(true)}>ClickMe</button>
        <p>{clickedOnce ? "Clicked" : ""}</p>
      </div>

      <div style={{ marginBottom: 12 }}>
        <h3>2) Toggle button (odd: Clicked / even: Not Clicked)</h3>
        <button onClick={() => setToggleCount((c) => c + 1)}>Toggle</button>
        <p>{toggleCount % 2 === 1 ? "Clicked" : "Not Clicked"}</p>
        <small>Clicks: {toggleCount}</small>
      </div>

      <div style={{ marginBottom: 12 }}>
        <h3>3) Three buttons</h3>
        <button onClick={() => setLastButton(1)}>Button1</button>
        <button onClick={() => setLastButton(2)}>Button2</button>
        <button onClick={() => setLastButton(3)}>Button3</button>
        <p>
          {lastButton
            ? `Button #${lastButton} was clicked`
            : "No button clicked yet."}
        </p>
      </div>

      <div style={{ marginBottom: 12 }}>
        <h3>4) Counter</h3>
        <h1>{counter}</h1>
        <button onClick={() => setCounter((c) => c + 1)}>Inc</button>
        <button onClick={() => setCounter((c) => c - 1)}>Dec</button>
      </div>
    </div>
  );
}
