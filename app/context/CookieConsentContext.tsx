// app/context/CookieConsentContext.tsx
"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

type ConsentType = "accepted" | "rejected" | null;

interface CookieConsentContextProps {
  consent: ConsentType;
  setConsent: (value: ConsentType) => void;
}

const CookieConsentContext = createContext<CookieConsentContextProps>({
  consent: null,
  setConsent: () => {},
});

export const useCookieConsent = () => useContext(CookieConsentContext);

export const CookieConsentProvider = ({ children }: { children: React.ReactNode }) => {
  const [consent, setConsent] = useState<ConsentType>(null);

  useEffect(() => {
    const stored = localStorage.getItem("google_maps_cookie_consent") as ConsentType;
    if (stored === "accepted") {
      setConsent("accepted");
    } else {
      // Jos arvo on "rejected" tai mitään ei ole tallennettu, kysytään uudelleen
      setConsent(null);
    }
  }, []);

  const handleSetConsent = (value: ConsentType) => {
    localStorage.setItem("google_maps_cookie_consent", value ?? "");
    setConsent(value);
  };

  return (
    <CookieConsentContext.Provider value={{ consent, setConsent: handleSetConsent }}>
      {children}
    </CookieConsentContext.Provider>
  );
};
