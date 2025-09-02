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
  // exact gold tone for borders
  const leafGold = "#BF8303";

  const goldFilter =
    "invert(67%) sepia(89%) saturate(511%) hue-rotate(6deg) brightness(105%) contrast(103%)";

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
        border: `3px solid ${leafGold}`, // page border
        boxSizing: "border-box",
      }}
    >
      {/* ===== GOLD LEAVES IN CORNERS ===== */}
      <img
        src="/leaves/leaf1.webp"
        alt="leaf top left"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 320,
          opacity: 0.9,
          transform: "scale(-1, -1)",
          filter: goldFilter,
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
          opacity: 0.9,
          transform: "scaleY(-1)",
          filter: goldFilter,
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
          opacity: 0.9,
          transform: "scaleX(-1)",
          filter: goldFilter,
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
          opacity: 0.9,
          filter: goldFilter,
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
            }}
          >
            Calli Knight Photography
          </motion.h1>
          <p style={{ marginTop: 10, fontSize: "1.05rem" }}>
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
          {/* Socials card */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            style={{
              background: "#0b3621",
              border: `2px solid ${leafGold}`,
              borderRadius: 12,
              padding: 20,
              width: 280,
              minWidth: 260,
              boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
              textAlign: "center",
            }}
          >
            <div style={{ color: leafGold, marginBottom: 10 }}>
              <FaLeaf size={28} />
            </div>
            <h3 style={{ margin: 0 }}>Socials</h3>
            <p style={{ fontSize: ".95rem", color: "#e9e9e9", marginTop: 6 }}>
              Instagram, Facebook, TikTok
            </p>
          </motion.div>

          {/* Albums card (clickable link) */}
          <Link
            to="/albums"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <motion.div
              whileHover={{ scale: 1.04 }}
              style={{
                background: "#0b3621",
                border: `2px solid ${leafGold}`,
                borderRadius: 12,
                padding: 20,
                width: 280,
                minWidth: 260,
                boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
                textAlign: "center",
              }}
            >
              <div style={{ color: leafGold, marginBottom: 10 }}>
                <FaCamera size={28} />
              </div>
              <h3 style={{ margin: 0 }}>Albums</h3>
              <p
                style={{
                  fontSize: ".95rem",
                  color: "#e9e9e9",
                  marginTop: 6,
                }}
              >
                Browse featured galleries
              </p>
            </motion.div>
          </Link>

          {/* Request a Quote card */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            style={{
              background: "#0b3621",
              border: `2px solid ${leafGold}`,
              borderRadius: 12,
              padding: 20,
              width: 280,
              minWidth: 260,
              boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
              textAlign: "center",
            }}
          >
            <div style={{ color: leafGold, marginBottom: 10 }}>
              <FaComments size={28} />
            </div>
            <h3 style={{ margin: 0 }}>Request a Quote</h3>
            <p style={{ fontSize: ".95rem", color: "#e9e9e9", marginTop: 6 }}>
              Tell me about your session
            </p>
          </motion.div>
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
              color: "#0b3621",
              border: `2px solid ${leafGold}`,
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
              Hi, I’m Calli Knight. Photography is my passion—I love capturing
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
              border: `2px solid ${leafGold}`,
              boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
              objectFit: "cover",
            }}
          />
        </div>

        {/* ===== FOLLOW ===== */}
        <div style={{ marginTop: 36, marginBottom: 56 }}>
          <h3 style={{ marginBottom: 14 }}>Follow</h3>

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
                border: `2px solid ${leafGold}`,
                color: leafGold,
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
                border: `2px solid ${leafGold}`,
                color: leafGold,
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
                border: `2px solid ${leafGold}`,
                color: leafGold,
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
