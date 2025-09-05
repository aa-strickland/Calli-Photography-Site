// src/pages/Socials.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebook, FaTiktok, FaPaperPlane } from "react-icons/fa";

export default function Socials() {
  const forestGreen = "#013220";
  const sageGreen = "#9CAF88";

  // force leaf image to solid dark forest green
  const leafFilter =
    "brightness(0) saturate(100%) invert(15%) sepia(99%) saturate(600%) hue-rotate(90deg)";

  const card = {
    background: "transparent",
    border: `2px solid ${forestGreen}`,
    borderRadius: 16,
    padding: 24,
    boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
    color: "white",
  };

  const cta = {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    border: `2px solid ${forestGreen}`,
    color: "white",
    background: "transparent",
    borderRadius: 9999,
    padding: "10px 18px",
    textDecoration: "none",
    fontWeight: 700,
  };

  const backBtn = {
    border: `2px solid ${forestGreen}`,
    color: "white",
    background: "transparent",
    padding: "12px 24px",
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
      {/* dark green corner leaves */}
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

      <main style={{ position: "relative", zIndex: 1, padding: "40px 16px" }}>
        {/* Title */}
        <h1
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: "3.2rem",
            margin: 0,
            textAlign: "center",
            color: "white",
          }}
        >
          Connect with Me
        </h1>
        <p style={{ textAlign: "center", marginTop: 10 }}>
          Follow along for new shoots, behind-the-scenes, and highlights. My DMs are always open!
        </p>

        {/* three descriptive cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(260px, 1fr))",
            gap: 24,
            maxWidth: 1200,
            margin: "28px auto 0",
            padding: "0 12px",
          }}
        >
          {/* Instagram */}
          <motion.div whileHover={{ scale: 1.02 }} style={card}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
              <FaInstagram size={26} color={forestGreen} />
              <h2 style={{ margin: 0, fontSize: "1.4rem", color: "white" }}>Instagram</h2>
            </div>
            <p style={{ marginTop: 8, lineHeight: 1.55 }}>
              Daily highlights, portrait peeks, and stories in motion. This is where I share the most
              frequent updates, mini reels, and post-session favorites. DM me here for the quickest reply.
            </p>
            <a
              href="https://www.instagram.com/through_the_lens850/"
              target="_blank"
              rel="noopener noreferrer"
              style={cta}
            >
              <FaInstagram /> Open Instagram
            </a>
          </motion.div>

          {/* Facebook */}
          <motion.div whileHover={{ scale: 1.02 }} style={card}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
              <FaFacebook size={26} color={forestGreen} />
              <h2 style={{ margin: 0, fontSize: "1.4rem", color: "white" }}>Facebook</h2>
            </div>
            <p style={{ marginTop: 8, lineHeight: 1.55 }}>
              Albums, announcements, sneak peeks, and event info. Great for tagging friends and sharing
              full galleries after your session!
            </p>
            <a
              href="https://www.facebook.com/calli.knight.2025"
              target="_blank"
              rel="noopener noreferrer"
              style={cta}
            >
              <FaFacebook /> Open Facebook
            </a>
          </motion.div>

          {/* TikTok */}
          <motion.div whileHover={{ scale: 1.02 }} style={card}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
              <FaTiktok size={26} color={forestGreen} />
              <h2 style={{ margin: 0, fontSize: "1.4rem", color: "white" }}>TikTok</h2>
            </div>
            <p style={{ marginTop: 8, lineHeight: 1.55 }}>
              Short-form edits, outfit inspo, and behind-the-scenes clips from shoots. Come hang out for the fun side!
            </p>
            <a
              href="https://www.tiktok.com/@cal_knight126"
              target="_blank"
              rel="noopener noreferrer"
              style={cta}
            >
              <FaTiktok /> Open TikTok
            </a>
          </motion.div>
        </div>

        {/* DM / Contact blurb */}
        <div
          style={{
            maxWidth: 1100,
            margin: "36px auto 0",
            padding: "18px 20px",
            border: `2px solid ${forestGreen}`,
            borderRadius: 16,
            textAlign: "center",
            background: "transparent",
            boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
          }}
        >
          <p style={{ margin: 0, lineHeight: 1.6 }}>
            Prefer to message directly? <strong>DM me on any platform</strong> or contact me here:
            <br />
            <span style={{ display: "inline-flex", gap: 14, marginTop: 8, alignItems: "center" }}>
              <FaPaperPlane /> <b>calli.knight1@gmail.com</b> &nbsp;•&nbsp; <b>(850) 869-9290</b>
            </span>
          </p>
        </div>

        {/* Back buttons */}
        <div
          style={{
            marginTop: 32,
            display: "flex",
            justifyContent: "center",
            gap: 16,
          }}
        >
          <Link to="/albums" style={backBtn}>
            Back to Albums
          </Link>
          <Link to="/" style={backBtn}>
            Home
          </Link>
        </div>
      </main>
    </div>
  );
}
