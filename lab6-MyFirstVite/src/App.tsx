import React, { useState, type FormEvent } from "react";
import ProfileCard from "./components/ProfileCard";

type User = {
  id: string;
  name: string;
  role: string;
  email: string;
};

const initialUsers: User[] = [
  {
    id: Math.random().toString(),
    name: "Adil Chekati",
    role: "Senior Lecturer",
    email: "adil.chekati@univ-constantine2.dz",
  },
  {
    id: Math.random().toString(),
    name: "Mohamed Amin Bouchehed",
    role: "Frontend Engineer",
    email: "aminlazir@gmail.com",
  },
  {
    id: Math.random().toString(),
    name: "Mohamed Amin Bouchehed",
    role: "Frontend Engineer",
    email: "aminlazir@gmail.com",
  },
];

function App() {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [username, setUserName] = useState("");
  const [userrole, setUserRole] = useState("");
  const [useremail, setUserEmail] = useState("");

  const addUser = (e: FormEvent) => {
    e.preventDefault();
    const newUser: User = {
      id: Math.random().toString(), // random id generation via Math.random().toString()
      name: username,
      role: userrole,
      email: useremail,
    };
    setUsers((prev) => [...prev, newUser]);
    setUserName("");
    setUserRole("");
    setUserEmail("");
  };

  const removeUser = (id: string) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  return (
    <div>
      <form
        style={{ textAlign: "center", marginBottom: "20px" }}
        onSubmit={addUser}
      >
        <input
          type="text"
          placeholder="Name"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Role"
          value={userrole}
          onChange={(e) => setUserRole(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={useremail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <button type="submit">Add User</button>
      </form>
      <h1 style={{ textAlign: "center" }}>My Team</h1>

      {users.map((user) => (
        <ProfileCard
          key={user.id}
          name={user.name}
          role={user.role}
          email={user.email}
          onRemove={() => removeUser(user.id)}
        />
      ))}
    </div>
  );
}

export default App;
