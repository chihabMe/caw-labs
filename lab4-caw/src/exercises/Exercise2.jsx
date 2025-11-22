import React, { useState } from "react";

// DisplayTab with parameterized items
function DisplayTab({ items, numbered = false, removable = false }) {
  const [list, setList] = useState(items);

  function handleRemove(idx) {
    setList((prev) => prev.filter((_, i) => i !== idx));
  }

  return (
    <div style={{ marginBottom: 16 }}>
      <ul>
        {list.map((it, i) => (
          <li
            key={i}
            className="list-item"
            onClick={() => removable && handleRemove(i)}
          >
            {numbered ? `Element ${i + 1} is: ${it}` : it}
            {removable && (
              <button
                className="small-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemove(i);
                }}
              >
                Delete
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Exercise2() {
  const tab = ["hello", "world", "from", "react"];
  const tab2 = ["apple", "banana", "cherry"];

  return (
    <div>
      <h2>Exercise 2</h2>

      <section>
        <h3>1) Simple map -&gt; &lt;ul&gt;</h3>
        <DisplayTab items={tab} numbered={false} removable={false} />
      </section>

      <section>
        <h3>2) Numbered style</h3>
        <DisplayTab items={tab} numbered={true} removable={false} />
      </section>

      <section>
        <h3>3) Click an element to remove it</h3>
        <DisplayTab items={tab} numbered={true} removable={true} />
      </section>

      <section>
        <h3>4 &amp; 5) Parameterized and two components</h3>
        <div style={{ display: "flex", gap: 20 }}>
          <div>
            <h4>List A</h4>
            <DisplayTab items={tab} numbered />
          </div>
          <div>
            <h4>List B</h4>
            <DisplayTab items={tab2} numbered removable />
          </div>
        </div>
      </section>
    </div>
  );
}
