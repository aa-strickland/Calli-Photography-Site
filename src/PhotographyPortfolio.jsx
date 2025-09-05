import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaLeaf,
  FaCamera,
  FaComments,
  FaInstagram,
  FaFacebook,
  FaTiktok,
} from "react-icons/fa";

export default function PhotographyPortfolio() {
  // THEME
  const forestGreen = "#013220"; // dark forest green (accents/borders)
  const sageGreen = "#9CAF88";   // page background

  // Force leaf image to solid dark forest green
  const leafFilter =
    "brightness(0) saturate(100%) invert(15%) sepia(99%) saturate(600%) hue-rotate(90deg)";

  return (
    <div
      style={{
        backgroundColor: sageGreen,
        minHeight: "100vh",
        fontFamily:
          "'Poppins', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
        color: "white",
        textAlign: "center",
        position: "relative",
        overflowX: "hidden",
        border: `3px solid ${forestGreen}`, // page border
        boxSizing: "border-box",
      }}
    >
      {/* ===== DARK-GREEN LEAVES IN CORNERS ===== */}
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

      {/* ===== MAIN CONTENT ABOVE LEAVES ===== */}
      <main style={{ position: "relative", zIndex: 1 }}>
        {/* ===== HEADER ===== */}
        <div style={{ paddingTop: 24 }}>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: "3.2rem",
              margin: 0,
              color: "white",
            }}
          >
            Calli Knight Photography
          </motion.h1>
          <p style={{ marginTop: 10, fontSize: "1.05rem", color: "white" }}>
            Welcome home—jump to albums, connect on socials, or request a quote.
          </p>
        </div>

        {/* ===== TOP CARDS ===== */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 24,
            marginTop: 24,
            padding: "0 16px",
            flexWrap: "wrap",
          }}
        >
          {/* Socials card (clickable link) */}
          <Link to="/socials" style={{ textDecoration: "none", color: "inherit" }}>
            <motion.div
              whileHover={{ scale: 1.04 }}
              style={{
                background: "transparent",
                border: `2px solid ${forestGreen}`,
                borderRadius: 12,
                padding: 20,
                width: 280,
                minWidth: 260,
                boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
                textAlign: "center",
                color: "white",
                cursor: "pointer",
              }}
              role="button"
              aria-label="Open Socials"
            >
              <div style={{ color: forestGreen, marginBottom: 10 }}>
                <FaLeaf size={28} />
              </div>
              <h3 style={{ margin: 0, color: "white" }}>Socials</h3>
              <p style={{ fontSize: ".95rem", color: "white", marginTop: 6 }}>
                Instagram, Facebook, TikTok
              </p>
            </motion.div>
          </Link>

          {/* Albums card */}
          <Link to="/albums" style={{ textDecoration: "none", color: "inherit" }}>
            <motion.div
              whileHover={{ scale: 1.04 }}
              style={{
                background: "transparent",
                border: `2px solid ${forestGreen}`,
                borderRadius: 12,
                padding: 20,
                width: 280,
                minWidth: 260,
                boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
                textAlign: "center",
                color: "white",
                cursor: "pointer",
              }}
              role="button"
              aria-label="Open Albums"
            >
              <div style={{ color: forestGreen, marginBottom: 10 }}>
                <FaCamera size={28} />
              </div>
              <h3 style={{ margin: 0, color: "white" }}>Albums</h3>
              <p style={{ fontSize: ".95rem", color: "white", marginTop: 6 }}>
                Browse featured galleries
              </p>
            </motion.div>
          </Link>

          {/* Request a Quote card */}
          <Link to="/quotes" style={{ textDecoration: "none", color: "inherit" }}>
            <motion.div
              whileHover={{ scale: 1.04 }}
              style={{
                background: "transparent",
                border: `2px solid ${forestGreen}`,
                borderRadius: 12,
                padding: 20,
                width: 280,
                minWidth: 260,
                boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
                textAlign: "center",
                color: "white",
                cursor: "pointer",
              }}
              role="button"
              aria-label="Open Quotes"
            >
              <div style={{ color: forestGreen, marginBottom: 10 }}>
                <FaComments size={28} />
              </div>
              <h3 style={{ margin: 0, color: "white" }}>Request a Quote</h3>
              <p style={{ fontSize: ".95rem", color: "white", marginTop: 6 }}>
                Request pricing and availability
              </p>
            </motion.div>
          </Link>
        </div>

        {/* ===== ABOUT + PORTRAIT ===== */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: 28,
            marginTop: 40,
            padding: "0 16px",
            flexWrap: "wrap",
          }}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            style={{
              background: "white",
              color: forestGreen,
              border: `2px solid ${forestGreen}`,
              borderRadius: 12,
              padding: 22,
              width: 520,
              maxWidth: "92vw",
              textAlign: "left",
              boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
            }}
          >
            <h2 style={{ marginTop: 0 }}>About Me</h2>
            <p style={{ lineHeight: 1.55, marginBottom: 0 }}>
              Hi, I’m Calli Knight. I’m 19 years old and based in{" "}
              Tallahassee, Florida. Photography is my passion.I love capturing
              the raw beauty of moments in nature, portraits, and stories told
              through light. Every photo is an expression of creativity and
              connection. Welcome to my portfolio; I’m excited to share my work
              with you.
            </p>
          </motion.div>

          <motion.img
            whileHover={{ scale: 1.05 }}
            src="/about/calli.png"
            alt="Calli Knight"
            style={{
              width: 300,
              maxWidth: "92vw",
              height: "auto",
              borderRadius: 12,
              border: `2px solid ${forestGreen}`,
              boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
              objectFit: "cover",
            }}
          />
        </div>

        {/* ===== FOLLOW ===== */}
        <div style={{ marginTop: 36, marginBottom: 56 }}>
          <h3 style={{ marginBottom: 14, color: "white" }}>Follow</h3>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 16,
              flexWrap: "wrap",
              padding: "0 12px",
            }}
          >
            <motion.a
              whileHover={{ scale: 1.08 }}
              href="https://www.instagram.com/through_the_lens850/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                border: `2px solid ${forestGreen}`,
                color: "white",
                borderRadius: 28,
                padding: "10px 18px",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              <FaInstagram /> Instagram
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.08 }}
              href="https://www.facebook.com/calli.knight.2025"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                border: `2px solid ${forestGreen}`,
                color: "white",
                borderRadius: 28,
                padding: "10px 18px",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              <FaFacebook /> Facebook
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.08 }}
              href="https://www.tiktok.com/@cal_knight126"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                border: `2px solid ${forestGreen}`,
                color: "white",
                borderRadius: 28,
                padding: "10px 18px",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              <FaTiktok /> TikTok
            </motion.a>
          </div>
        </div>
      </main>
    </div>
  );
}
