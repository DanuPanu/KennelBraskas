"use client";

import React, { useEffect, useState } from "react";
import { useCookieConsent } from "@/app/context/CookieConsentContext";

export default function CookieBanner() {
  const { consent, setConsent } = useCookieConsent();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!consent) {
      setVisible(true);
    }
  }, [consent]);

  const handleAccept = () => {
    setConsent("accepted");
    setVisible(false);
  };

  const handleReject = () => {
    setConsent("rejected");
    setVisible(false);
  };

  if (!visible || consent) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "1rem",
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "#1f2937", // Tailwind: bg-zinc-900
        color: "white",
        padding: "1rem 1.5rem",
        borderRadius: "0.75rem",
        boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
        zIndex: 1000,
        maxWidth: "90%",
        width: "max-content",
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
        textAlign: "center",
      }}
    >
      <span>
        Tämä sivusto käyttää evästeitä näyttääkseen Google Maps -upotuksen. Hyväksytkö evästeet?
      </span>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "0.75rem",
          flexWrap: "wrap",
        }}
      >
        <button
          onClick={handleAccept}
          style={{
            background: "#10b981", // Tailwind: bg-emerald-500
            color: "white",
            border: "none",
            borderRadius: "6px",
            padding: "0.5rem 1rem",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Hyväksy
        </button>
        <button
          onClick={handleReject}
          style={{
            background: "#ef4444", // Tailwind: bg-red-500
            color: "white",
            border: "none",
            borderRadius: "6px",
            padding: "0.5rem 1rem",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Hylkää
        </button>
      </div>
    </div>
  );
}
