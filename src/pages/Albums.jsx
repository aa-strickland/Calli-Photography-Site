import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaCrown,
  FaLeaf,
  FaTractor,
  FaFootballBall,
  FaSmileBeam,
} from "react-icons/fa";

export default function Albums() {
  // THEME COLORS
  const forestGreen = "#013220"; // dark forest green
  const sageGreen = "#9CAF88";   // sage background

  // Force leaves to solid dark green
  const leafFilter =
    "brightness(0) saturate(100%) invert(15%) sepia(99%) saturate(600%) hue-rotate(90deg)";

  const row1 = [
    { label: "Graduation", icon: <FaUserGraduate size={28} />, path: "/albums/graduation" },
    { label: "Prom", icon: <FaCrown size={28} />, path: "/albums/prom" },
    { label: "Seniors", icon: <FaUserGraduate size={28} />, path: "/albums/seniors" },
    { label: "Nature", icon: <FaLeaf size={28} />, path: "/albums/nature" },
  ];
  const row2 = [
    { label: "Farm", icon: <FaTractor size={28} />, path: "/albums/farm" },
    { label: "Sports", icon: <FaFootballBall size={28} />, path: "/albums/sports" },
    { label: "Just for Fun", icon: <FaSmileBeam size={28} />, path: "/albums/just-for-fun" },
  ];

  const card = ({ label, icon, path }) => (
    <Link to={path} key={label} style={{ textDecoration: "none" }}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        style={{
          background: "transparent",
          border: `2px solid ${forestGreen}`,
          borderRadius: 12,
          padding: "40px 20px",
          textAlign: "center",
          color: "white",
          fontSize: "1.2rem",
          fontWeight: 500,
          boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
          cursor: "pointer",
        }}
      >
        <div style={{ marginBottom: 12, color: forestGreen }}>{icon}</div>
        {label}
      </motion.div>
    </Link>
  );

  return (
    <div
      style={{
        backgroundColor: sageGreen,
        minHeight: "100vh",
        color: "white",
        textAlign: "center",
        position: "relative",
        overflowX: "hidden",
        border: `3px solid ${forestGreen}`,
        boxSizing: "border-box",
      }}
    >
      {/* Dark green leaves */}
      <img
        src="/leaves/leaf1.webp"
        alt="leaf top left"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 320,
          opacity: 1,
          transform: "scale(-1, -1)",
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

      {/* Main */}
      <main style={{ position: "relative", zIndex: 1, padding: "40px 16px" }}>
        <h1
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: "2.6rem",
            marginBottom: 8,
            color: "white",
          }}
        >
          Albums
        </h1>
        <p style={{ marginBottom: 32, fontSize: "1.1rem", color: "white" }}>
          Browse featured galleries.
        </p>

        {/* Row 1 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 24,
            maxWidth: 1100,
            margin: "0 auto 24px auto",
          }}
        >
          {row1.map(card)}
        </div>

        {/* Row 2 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
            maxWidth: 825,
            margin: "0 auto",
          }}
        >
          {row2.map(card)}
        </div>

        {/* Back button */}
        <div style={{ marginTop: 50 }}>
          <Link
            to="/"
            style={{
              border: `2px solid ${forestGreen}`,
              color: "white",
              background: "transparent",
              padding: "12px 24px",
              borderRadius: "9999px",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "1rem",
            }}
          >
            Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
