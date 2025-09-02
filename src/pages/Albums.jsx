import React from "react";

export default function Albums() {
  const leafGold = "#BF8303";

  return (
    <div
      style={{
        backgroundColor: "#0b3621",
        minHeight: "100vh",
        color: "white",
        fontFamily:
          "'Poppins', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
        textAlign: "center",
        border: `3px solid ${leafGold}`,
        boxSizing: "border-box",
        padding: "48px 16px",
      }}
    >
      <h1 style={{ fontFamily: "'Great Vibes', cursive", fontSize: "3rem" }}>
        Albums
      </h1>
      <p style={{ maxWidth: 720, margin: "12px auto", color: "#e9e9e9" }}>
        Featured galleries will appear here. You can add categories or a grid of
        image sets next.
      </p>
    </div>
  );
}
