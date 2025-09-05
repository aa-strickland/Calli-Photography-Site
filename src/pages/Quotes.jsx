import React from "react";
import { Link } from "react-router-dom";

export default function Quotes() {
  const forestGreen = "#013220";
  const sageGreen = "#9CAF88";
  const leafFilter =
    "brightness(0) saturate(100%) invert(15%) sepia(99%) saturate(600%) hue-rotate(90deg)";

  const card = (title, price, items) => (
    <div
      style={{
        background: "transparent",
        border: `2px solid ${forestGreen}`,
        borderRadius: 14,
        padding: "18px 18px",
        color: "white",
      }}
    >
      <h3 style={{ margin: "0 0 6px 0", fontSize: "1.25rem" }}>{title}</h3>
      <div style={{ color: "#e6f0e6", marginBottom: 8 }}>{price}</div>
      <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.5 }}>
        {items.map((it, i) => (
          <li key={i}>{it}</li>
        ))}
      </ul>
    </div>
  );

  const btn = {
    border: `2px solid ${forestGreen}`,
    color: "white",
    background: "transparent",
    padding: "12px 20px",
    borderRadius: 9999,
    textDecoration: "none",
    fontWeight: 600,
    fontSize: "1rem",
    display: "inline-block",
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
      {/* Corner leaves */}
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
      <main style={{ position: "relative", zIndex: 1, padding: "40px 16px", textAlign: "center" }}>
        <h1
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: "2.6rem",
            marginBottom: 8,
          }}
        >
          Quotes & Contact
        </h1>
        <p style={{ margin: "0 0 28px 0" }}>
          These are estimated package prices—final quotes vary by location, time, and details.
        </p>

        {/* Pricing grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 18,
            maxWidth: 1100,
            margin: "0 auto 28px auto",
          }}
        >
          {card("Mini Session", "$100", [
            "30 minutes",
            "1 location",
            "Up to 10 edited images",
            "Online gallery & download",
          ])}
          {card("Standard Session", "$200", [
            "60–90 minutes",
            "1–2 locations",
            "Up to 30 edited images",
            "Online gallery & download",
          ])}
          {card("Premium Portraits", "$350", [
            "2–3 hours",
            "Multiple looks/locations",
            "Up to 60 edited images",
            "Online gallery & download",
          ])}
          {card("Events", "$100/hr (2 hr min.)", [
            "Candid + detail coverage",
            "Online gallery & download",
            "Custom deliverables",
          ])}
        </div>

        {/* Add-ons */}
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto 28px auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 18,
          }}
        >
          <div style={{ border: `2px solid ${forestGreen}`, borderRadius: 14, padding: 16 }}>
            <h3 style={{ marginTop: 0 }}>Add-ons</h3>
            <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.6 }}>
              <li>Extra edited image — <strong>$15</strong> each</li>
              <li>Rush turnaround (48–72 hrs) — <strong>$75</strong></li>
              <li>Travel beyond 25 miles — <strong>$0.65/mi</strong></li>
              <li>Prints & albums — priced by size/material</li>
            </ul>
          </div>

          <div style={{ border: `2px solid ${forestGreen}`, borderRadius: 14, padding: 16 }}>
            <h3 style={{ marginTop: 0 }}>What to Expect</h3>
            <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.6 }}>
              <li>Consult to plan location, outfits, and vibe</li>
              <li>Light posing guidance with candid prompts</li>
              <li>Proof gallery delivered within 7–10 days</li>
              <li>Final edits in high-res and social-ready sizes</li>
            </ul>
          </div>
        </div>

        {/* Contact */}
        <h2 style={{ margin: "8px 0 12px 0" }}>Get a Quote</h2>
        <p style={{ margin: "0 0 18px 0" }}>Tell me about your session and I’ll reply with a custom estimate.</p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            justifyContent: "center",
            marginBottom: 26,
          }}
        >
          <a href="tel:8508699290" style={btn}>Call: (850) 869-9290</a>
          <a href="mailto:calli.knight1@gmail.com?subject=Quote%20Request" style={btn}>
            Email: calli.knight1@gmail.com
          </a>
          <a
            href="https://www.instagram.com/through_the_lens850/"
            target="_blank"
            rel="noopener noreferrer"
            style={btn}
          >
            DM on Instagram
          </a>
          <a
            href="https://www.facebook.com/calli.knight.2025"
            target="_blank"
            rel="noopener noreferrer"
            style={btn}
          >
            DM on Facebook
          </a>
          <a
            href="https://www.tiktok.com/@cal_knight126"
            target="_blank"
            rel="noopener noreferrer"
            style={btn}
          >
            DM on TikTok
          </a>
        </div>

        {/* Back buttons */}
        <div style={{ display: "flex", justifyContent: "center", gap: 16 }}>
          <Link to="/albums" style={btn}>Back to Albums</Link>
          <Link to="/" style={btn}>Home</Link>
        </div>
      </main>
    </div>
  );
}
