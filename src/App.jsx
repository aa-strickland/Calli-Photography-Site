import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import PhotographyPortfolio from "./PhotographyPortfolio";
import Albums from "./pages/Albums";

// Per-letter animation
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
  // Match the exact gold used on the home page
  const leafGold = "#BF8303";

  // Same gold tint you’ve been using for the leaf images
  const goldFilter =
    "invert(67%) sepia(89%) saturate(511%) hue-rotate(6deg) brightness(105%) contrast(103%)";

  return (
    <motion.div
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#013220",
        zIndex: 9999,
        textAlign: "center",
        padding: "0 16px",
        overflow: "hidden",
        // NEW: gold border (same tone as the home page)
        border: `3px solid ${leafGold}`,
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
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 320,
          opacity: 0.9,
          transform: "scale(-1, -1)",
          filter: goldFilter,
          pointerEvents: "none",
        }}
      />
      <img
        src="/leaves/leaf1.webp"
        alt="leaf top right"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: 320,
          opacity: 0.9,
          transform: "scaleY(-1)",
          filter: goldFilter,
          pointerEvents: "none",
        }}
      />
      <img
        src="/leaves/leaf1.webp"
        alt="leaf bottom left"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: 320,
          opacity: 0.9,
          transform: "scaleX(-1)",
          filter: goldFilter,
          pointerEvents: "none",
        }}
      />
      <img
        src="/leaves/leaf1.webp"
        alt="leaf bottom right"
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: 320,
          opacity: 0.9,
          filter: goldFilter,
          pointerEvents: "none",
        }}
      />

      {/* Animated Title */}
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

      {/* Swirly underline — now using the same gold */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 140"
        style={{
          width: "90%",
          maxWidth: "1400px",
          marginTop: "-6px",
          marginBottom: "40px",
        }}
      >
        <motion.path
          d="M20 90 C 260 20, 740 160, 980 70"
          stroke={leafGold}
          strokeWidth="6"
          fill="transparent"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.2, ease: "easeOut" }}
        />
      </svg>

      {/* Explore Button — styled with the same gold */}
      <button
        onClick={onEnter}
        style={{
          padding: "18px 44px",
          borderRadius: "9999px",
          fontSize: "24px",
          border: `2px solid ${leafGold}`,
          background: "transparent",
          color: leafGold,
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
        {showLanding && (
          <LandingScreen onEnter={() => setShowLanding(false)} />
        )}
      </AnimatePresence>

      {/* Routes render under the landing overlay */}
      <Routes>
        <Route path="/" element={<PhotographyPortfolio />} />
        <Route path="/albums" element={<Albums />} />
      </Routes>
    </Router>
  );
}
