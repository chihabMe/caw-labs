import React from "react";

interface ProfileCardProps {
  name: string;
  role?: string;
  email?: string;
  onRemove?: () => void;
}

function ProfileCard({
  name,
  role,
  email,
  onRemove = () => {},
}: ProfileCardProps) {
  // Inline styles for a quick card look
  const cardStyle: React.CSSProperties = {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "20px",
    width: "300px",
    textAlign: "center",
    margin: "20px auto",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  };
  const btnStyle: React.CSSProperties = {
    backgroundColor: "#ff4d4f",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  };

  return (
    <div style={cardStyle}>
      <h2>{name}</h2>
      <p style={{ color: "gray" }}>{role}</p>
      <p>Email: {email}</p>
      <button onClick={onRemove} style={btnStyle}>
        Remove
      </button>
    </div>
  );
}

export default ProfileCard;
