// src/Socials.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebook, FaTiktok, FaCopy, FaArrowLeft } from "react-icons/fa";

export default function Socials() {
  const goldFilter =
    "invert(67%) sepia(89%) saturate(511%) hue-rotate(6deg) brightness(105%) contrast(103%)";

  // --- helper to copy a handle/username ---
  const copy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert(`Copied: ${text}`);
    } catch {
      prompt("Copy this:", text);
    }
  };

  const socials = [
    {
      label: "Instagram",
      href: "https://www.instagram.com/through_the_lens850/",
      handle: "@through_the_lens850",
      icon: <FaInstagram />,
      color: "#E1306C",
    },
    {
      label: "TikTok",
      href: "https://www.tiktok.com/@cal_knight126",
      handle: "@cal_knight126",
      icon: <FaTiktok />,
      color: "#000000",
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/calli.knight.2025",
      handle: "calli.knight.2025",
      icon: <FaFacebook />,
      color: "#1877F2",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#0b3621",
        minHeight: "100vh",
        fontFamily:
          "'Poppins', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
        color: "white",
        textAlign: "center",
        position: "relative",
        overflowX: "hidden",
        paddingBottom: 60,
      }}
    >
      {/* ===== GOLD LEAF BORDER ===== */}
      <img
        src="/leaves/leaf-top left.png"
        alt="top left leaves"
        style={{
          position: "fixed",
          top: -40,
          left: -40,
          width: 360,
          filter: goldFilter,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <img
        src="/leaves/leaf-top right.png"
        alt="top right leaves"
        style={{
          position: "fixed",
          top: -40,
          right: -40,
          width: 360,
          filter: goldFilter,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <img
        src="/leaves/leaf-bottom left.png"
        alt="bottom left leaves"
        style={{
          position: "fixed",
          bottom: -40,
          left: -40,
          width: 360,
          filter: goldFilter,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <img
        src="/leaves/leaf1.webp"
        alt="bottom right leaves"
        style={{
          position: "fixed",
          bottom: -40,
          right: -40,
          width: 360,
          filter: goldFilter,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* ===== HEADER ===== */}
      <div style={{ position: "relative", zIndex: 2, paddingTop: 24 }}>
        <motion.h1
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: "3.2rem",
            margin: 0,
          }}
        >
          Find Me Online
        </motion.h1>
        <p style={{ marginTop: 10, fontSize: "1.05rem" }}>
          Follow along for recent shoots, behind-the-scenes, and updates.
        </p>
      </div>

      {/* ===== SOCIAL BUTTONS ===== */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 22,
          maxWidth: 980,
          margin: "28px auto 0",
          padding: "0 16px",
        }}
      >
        {socials.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            style={{
              background: "#0b3621",
              border: "2px solid #FFD700",
              borderRadius: 14,
              padding: 18,
              boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
            }}
          >
            <a
              href={s.href}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
                textDecoration: "none",
                color: "#FFD700",
                fontWeight: 700,
                fontSize: "1.05rem",
                border: "2px solid #FFD700",
                borderRadius: 999,
                padding: "12px 18px",
              }}
            >
              <span
                style={{
                  display: "grid",
                  placeItems: "center",
                  width: 34,
                  height: 34,
                  borderRadius: "50%",
                  background: "rgba(255,215,0,0.15)",
                  color: s.color,
                  fontSize: 18,
                }}
              >
                {s.icon}
              </span>
              {s.label}
            </a>

            {/* handle row */}
            <div
              style={{
                marginTop: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                color: "#e9e9e9",
              }}
            >
              <span
                style={{
                  padding: "6px 10px",
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  fontSize: ".95rem",
                }}
              >
                {s.handle}
              </span>

              <button
                onClick={() => copy(s.handle)}
                title="Copy handle"
                style={{
                  display: "grid",
                  placeItems: "center",
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.18)",
                  background: "rgba(255,255,255,0.06)",
                  color: "#FFD700",
                  cursor: "pointer",
                }}
              >
                <FaCopy />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ===== BACK TO HOME ===== */}
      <div style={{ position: "relative", zIndex: 2, marginTop: 34 }}>
        <a
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            color: "#FFD700",
            textDecoration: "none",
            border: "2px solid #FFD700",
            borderRadius: 999,
            padding: "10px 16px",
            fontWeight: 700,
          }}
        >
          <FaArrowLeft />
          Back to Home
        </a>
      </div>
    </div>
  );
}
