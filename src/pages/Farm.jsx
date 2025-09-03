import React from "react";
import { Link } from "react-router-dom";

export default function Graduation() {
  const forestGreen = "#013220";
  const sageGreen = "#9CAF88";
  const leafFilter =
    "brightness(0) saturate(100%) invert(15%) sepia(99%) saturate(600%) hue-rotate(90deg)";

  const button = {
    border: `2px solid ${forestGreen}`,
    color: "white",
    background: "transparent",
    padding: "10px 18px",
    borderRadius: "9999px",
    textDecoration: "none",
    fontWeight: 600,
    fontSize: "1rem",
  };

  return (
    <div
      style={{
        backgroundColor: sageGreen,
        minHeight: "100vh",
        color: "white",
        position: "relative",
        overflowX: "hidden",
        border: `3px solid ${forestGreen}`,
        boxSizing: "border-box",
      }}
    >
      {/* Leaves */}
      <img src="/leaves/leaf1.webp" alt="leaf top left" style={{ position: "fixed", top: 0, left: 0, width: 320, opacity: 1, transform: "scale(-1,-1)", filter: leafFilter, pointerEvents: "none", zIndex: 0 }} />
      <img src="/leaves/leaf1.webp" alt="leaf top right" style={{ position: "fixed", top: 0, right: 0, width: 320, opacity: 1, transform: "scaleY(-1)", filter: leafFilter, pointerEvents: "none", zIndex: 0 }} />
      <img src="/leaves/leaf1.webp" alt="leaf bottom left" style={{ position: "fixed", bottom: 0, left: 0, width: 320, opacity: 1, transform: "scaleX(-1)", filter: leafFilter, pointerEvents: "none", zIndex: 0 }} />
      <img src="/leaves/leaf1.webp" alt="leaf bottom right" style={{ position: "fixed", bottom: 0, right: 0, width: 320, opacity: 1, filter: leafFilter, pointerEvents: "none", zIndex: 0 }} />

      <main style={{ position: "relative", zIndex: 1, padding: "40px 16px", textAlign: "center" }}>
        <h1 style={{ fontFamily: "'Great Vibes', cursive", fontSize: "2.6rem", marginBottom: 12, color: "white" }}>
          Graduation Album
        </h1>
        <p style={{ fontSize: "1.1rem", marginBottom: 28, color: "white" }}>
          A collection of graduation memories.
        </p>

        {/* Grid placeholder (add photos later) */}
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: 16,
          }}
        >
          {/* <img src="/albums/graduation/pic1.jpg" alt="Graduation 1" style={{ width: "100%", borderRadius: 8 }} /> */}
        </div>

        <div style={{ marginTop: 36, display: "flex", justifyContent: "center", gap: 16 }}>
          <Link to="/albums" style={button}>Back to Albums</Link>
          <Link to="/" style={button}>Home</Link>
        </div>
      </main>
    </div>
  );
}
