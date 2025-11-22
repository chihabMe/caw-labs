import React, { useState } from "react";

export default function Exercise3() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;
    setUsers((prev) => [...prev, { id: Date.now(), username, password }]);
    setUsername("");
    setPassword("");
  }

  function handleDelete(id) {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  }

  return (
    <div>
      <h2>Exercise 3 — Authentication form + users list</h2>

      <form onSubmit={handleSubmit} style={{ marginBottom: 12 }}>
        <div>
          <label>Username: </label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      <div>
        <h3>Submitted users:</h3>
        {users.length === 0 ? (
          <p>No users yet.</p>
        ) : (
          <ul>
            {users.map((u) => (
              <li key={u.id}>
                <strong>{u.username}</strong> — <em>{u.password}</em>
                <button
                  className="small-btn"
                  onClick={() => handleDelete(u.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
