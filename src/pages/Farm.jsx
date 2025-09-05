import React from "react";
import { Link } from "react-router-dom";

export default function Farm() {
  const forestGreen = "#013220";
  const sageGreen = "#9CAF88";

  // Force leaves to render as solid dark forest green
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

  // Farm1.JPG - Farm11.JPG in /public/Albums/Farm
  const farmFiles = Array.from(
    { length: 11 },
    (_, i) => `/Albums/Farm/Farm${i + 1}.JPG`
  );

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
      {/* ===== Corner Leaves ===== */}
      <img
        src="/leaves/leaf1.webp"
        alt="leaf top left"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 320,
          opacity: 1,
          transform: "scale(-1,-1)",
          filter: leafFilter,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <img
        src="/leaves/leaf1.webp"
        alt="leaf top right"
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: 320,
          opacity: 1,
          transform: "scaleY(-1)",
          filter: leafFilter,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <img
        src="/leaves/leaf1.webp"
        alt="leaf bottom left"
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: 320,
          opacity: 1,
          transform: "scaleX(-1)",
          filter: leafFilter,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <img
        src="/leaves/leaf1.webp"
        alt="leaf bottom right"
        style={{
          position: "fixed",
          bottom: 0,
          right: 0,
          width: 320,
          opacity: 1,
          filter: leafFilter,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* ===== Content ===== */}
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
          Farm Album
        </h1>
        <p style={{ fontSize: "1.1rem", marginBottom: 28 }}>
          Life on the farm, rustic beauty, and country charm.
        </p>

        {/* Masonry Layout */}
        <div
          style={{
            columnCount: 3,
            columnGap: "16px",
            maxWidth: 1100,
            margin: "0 auto",
          }}
        >
          {farmFiles.map((src, idx) => (
            <img
              key={src}
              src={src}
              alt={`Farm ${idx + 1}`}
              style={{
                width: "100%",
                borderRadius: 10,
                border: `2px solid ${forestGreen}`,
                marginBottom: 16,
                display: "inline-block",
              }}
            />
          ))}
        </div>

        {/* Navigation */}
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
