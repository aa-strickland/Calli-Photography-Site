import React from "react";
import { Link } from "react-router-dom";

export default function Nature() {
  const forestGreen = "#013220";
  const sageGreen = "#9CAF88";

  const leafFilter =
    "brightness(0) saturate(100%) invert(15%) sepia(99%) saturate(600%) hue-rotate(90deg)";

  // Nature images
  const natureFiles = Array.from({ length: 6 }, (_, i) => `/Albums/Nature/Nature${i + 1}.JPG`);

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
      {/* Corner Leaves */}
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
            zIndex: 0,
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
          Nature Album
        </h1>
        <p style={{ fontSize: "1.1rem", marginBottom: 28 }}>
          Beautiful views of the outdoors.
        </p>

        {/* Masonry grid */}
        <div
          style={{
            columnCount: 3,
            columnGap: "16px",
            maxWidth: 1000,
            margin: "0 auto",
          }}
        >
          {natureFiles.map((src, idx) => (
            <img
              key={src}
              src={src}
              alt={`Nature ${idx + 1}`}
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
          <Link
            to="/albums"
            style={{
              border: `2px solid ${forestGreen}`,
              color: "white",
              padding: "10px 18px",
              borderRadius: "9999px",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "1rem",
            }}
          >
            Back to Albums
          </Link>
          <Link
            to="/"
            style={{
              border: `2px solid ${forestGreen}`,
              color: "white",
              padding: "10px 18px",
              borderRadius: "9999px",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "1rem",
            }}
          >
            Home
          </Link>
        </div>
      </main>
    </div>
  );
}
