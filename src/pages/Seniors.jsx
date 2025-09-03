import React from "react";
import { Link } from "react-router-dom";

export default function Seniors() {
  const forestGreen = "#013220";
  const leafFilter =
    "brightness(0) saturate(100%) invert(15%) sepia(99%) saturate(600%) hue-rotate(90deg)";

  const button = {
    border: `2px solid ${forestGreen}`,
    color: "white",
    padding: "10px 18px",
    borderRadius: "9999px",
    textDecoration: "none",
    fontWeight: 600,
    fontSize: "1rem",
    background: "transparent",
  };

  return (
    <div
      style={{
        backgroundColor: "#9CAF88",
        minHeight: "100vh",
        color: "white",
        position: "relative",
        overflowX: "hidden",
        border: `3px solid ${forestGreen}`,
        boxSizing: "border-box",
      }}
    >
      {/* Leaves */}
      {["top left", "top right", "bottom left", "bottom right"].map((alt, i) => (
        <img
          key={alt}
          src="/leaves/leaf1.webp"
          alt={`leaf ${alt}`}
          style={{
            position: "fixed",
            ...(i === 0 && { top: 0, left: 0, transform: "scale(-1,-1)" }),
            ...(i === 1 && { top: 0, right: 0, transform: "scaleY(-1)" }),
            ...(i === 2 && { bottom: 0, left: 0, transform: "scaleX(-1)" }),
            ...(i === 3 && { bottom: 0, right: 0 }),
            width: 320,
            opacity: 1,
            filter: leafFilter,
            pointerEvents: "none",
          }}
        />
      ))}

      {/* Content */}
      <main
        style={{
          position: "relative",
          zIndex: 1,
          padding: "40px 16px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: "2.6rem",
            marginBottom: 12,
          }}
        >
          Seniors Album
        </h1>
        <p style={{ fontSize: "1.1rem", marginBottom: 28 }}>
          Celebrating the senior year.
        </p>

        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: 16,
          }}
        >
          <img src="/Albums/Seniors/pic1.jpg" alt="Senior 1" style={{ width: "100%", borderRadius: 8 }} />
          <img src="/Albums/Seniors/pic2.jpg" alt="Senior 2" style={{ width: "100%", borderRadius: 8 }} />
          <img src="/Albums/Seniors/pic3.jpg" alt="Senior 3" style={{ width: "100%", borderRadius: 8 }} />
        </div>

        <div
          style={{
            marginTop: 36,
            display: "flex",
            justifyContent: "center",
            gap: 16,
          }}
        >
          <Link to="/albums" style={button}>
            Back to Albums
          </Link>
          <Link to="/" style={button}>
            Home
          </Link>
        </div>
      </main>
    </div>
  );
}
