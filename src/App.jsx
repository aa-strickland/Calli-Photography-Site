import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import PhotographyPortfolio from "./PhotographyPortfolio";
import Albums from "./pages/Albums";

// Album subpages
import Graduation from "./pages/Graduation";
import Prom from "./pages/Prom";
import Seniors from "./pages/Seniors";
import Nature from "./pages/Nature";
import Farm from "./pages/Farm";
import Sports from "./pages/Sports";
import JustForFun from "./pages/JustForFun";
import Pets from "./pages/Pets";

// NEW: Quotes page
import Quotes from "./pages/Quotes";
import Socials from "./pages/Socials";

// ===== letter-by-letter animation for the landing title =====
const letterVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.08, type: "tween" },
  }),
};

function AnimatedWord({ text }) {
  return (
    <span style={{ display: "inline-block", margin: "0 12px" }}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          initial="hidden"
          animate="visible"
          variants={letterVariant}
          style={{ display: "inline-block", color: "white" }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

function LandingScreen({ onEnter }) {
  const forestGreen = "#013220";
  const sageGreen = "#9CAF88";
  const leafFilter =
    "brightness(0) saturate(100%) invert(15%) sepia(99%) saturate(600%) hue-rotate(90deg)";

  const leafStyle = (extra = {}) => ({
    width: 320,
    opacity: 1,
    filter: leafFilter,
    pointerEvents: "none",
    position: "absolute",
    ...extra,
  });

  return (
    <motion.div
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: sageGreen,
        zIndex: 9999,
        textAlign: "center",
        padding: "0 16px",
        overflow: "hidden",
        border: `3px solid ${forestGreen}`,
        boxSizing: "border-box",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.0 }}
    >
      {/* Corner leaves */}
      <img
        src="/leaves/leaf1.webp"
        alt="leaf top left"
        style={leafStyle({ top: 0, left: 0, transform: "scale(-1, -1)" })}
      />
      <img
        src="/leaves/leaf1.webp"
        alt="leaf top right"
        style={leafStyle({ top: 0, right: 0, transform: "scaleY(-1)" })}
      />
      <img
        src="/leaves/leaf1.webp"
        alt="leaf bottom left"
        style={leafStyle({ bottom: 0, left: 0, transform: "scaleX(-1)" })}
      />
      <img
        src="/leaves/leaf1.webp"
        alt="leaf bottom right"
        style={leafStyle({ bottom: 0, right: 0 })}
      />

      {/* Title */}
      <h1
        style={{
          fontFamily: "'Great Vibes', cursive",
          fontSize: "140px",
          marginBottom: "-20px",
          color: "white",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <AnimatedWord text="Calli" />
        <AnimatedWord text="Knight" />
        <AnimatedWord text="Photography" />
      </h1>

      {/* underline */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 140"
        style={{ width: "90%", maxWidth: "1400px", marginTop: "-6px", marginBottom: "40px" }}
      >
        <motion.path
          d="M20 90 C 260 20, 740 160, 980 70"
          stroke={forestGreen}
          strokeWidth="6"
          fill="transparent"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.2, ease: "easeOut" }}
        />
      </svg>

      {/* Explore */}
      <button
        onClick={onEnter}
        style={{
          padding: "18px 44px",
          borderRadius: "9999px",
          fontSize: "24px",
          border: `2px solid ${forestGreen}`,
          background: "transparent",
          color: "white",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Explore
      </button>
    </motion.div>
  );
}

export default function App() {
  const [showLanding, setShowLanding] = useState(true);

  return (
    <Router>
      <AnimatePresence>
        {showLanding && <LandingScreen onEnter={() => setShowLanding(false)} />}
      </AnimatePresence>

      <Routes>
        <Route path="/" element={<PhotographyPortfolio />} />
        <Route path="/albums" element={<Albums />} />

        {/* Album subpages */}
        <Route path="/albums/graduation" element={<Graduation />} />
        <Route path="/albums/prom" element={<Prom />} />
        <Route path="/albums/seniors" element={<Seniors />} />
        <Route path="/albums/nature" element={<Nature />} />
        <Route path="/albums/farm" element={<Farm />} />
        <Route path="/albums/sports" element={<Sports />} />
        <Route path="/albums/just-for-fun" element={<JustForFun />} />
        <Route path="/albums/pets" element={<Pets />} />

        {/* NEW: Quotes & Contact */}
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/socials" element={<Socials />} />
      </Routes>
    </Router>
  );
}
