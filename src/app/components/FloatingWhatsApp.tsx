import { useState } from "react";
import { X } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20order%20water%20jars%20from%20Aqua%20Fresh";

export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "28px",
        right: "28px",
        zIndex: 999,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: "10px",
      }}
    >
      {/* Tooltip */}
      {showTooltip && (
        <div
          style={{
            background: "#fff",
            borderRadius: "16px",
            padding: "14px 18px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.14)",
            maxWidth: "220px",
            position: "relative",
            border: "1px solid rgba(37,211,102,0.2)",
          }}
        >
          <button
            onClick={() => setShowTooltip(false)}
            style={{
              position: "absolute",
              top: "6px",
              right: "8px",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#9ca3af",
              padding: "2px",
              display: "flex",
            }}
          >
            <X style={{ width: 14, height: 14 }} />
          </button>
          <div
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "0.82rem",
              color: "#0A1F33",
              marginBottom: "3px",
            }}
          >
            💧 Order Fresh Water!
          </div>
          <div style={{ fontSize: "0.75rem", color: "#4A7A9B" }}>
            Chat with us on WhatsApp for instant ordering
          </div>
          {/* Arrow */}
          <div
            style={{
              position: "absolute",
              bottom: "-8px",
              right: "28px",
              width: "14px",
              height: "8px",
              background: "#fff",
              clipPath: "polygon(0 0, 100% 0, 50% 100%)",
              borderRight: "1px solid rgba(37,211,102,0.2)",
              borderBottom: "1px solid rgba(37,211,102,0.2)",
            }}
          />
        </div>
      )}

      {/* WhatsApp Button */}
      <div style={{ position: "relative" }}>
        {/* Ripple ring */}
        <div
          style={{
            position: "absolute",
            inset: "-8px",
            borderRadius: "50%",
            background: "rgba(37,211,102,0.25)",
            animation: "rippleOut 2s ease-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: "-16px",
            borderRadius: "50%",
            background: "rgba(37,211,102,0.12)",
            animation: "rippleOut 2s ease-out infinite 0.5s",
          }}
        />

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float"
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #25D366, #128C7E)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 8px 28px rgba(37,211,102,0.5)",
            textDecoration: "none",
            position: "relative",
            zIndex: 1,
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.1)";
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 12px 36px rgba(37,211,102,0.65)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 28px rgba(37,211,102,0.5)";
          }}
          aria-label="Order on WhatsApp"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </a>
      </div>

      <style>{`
        @keyframes rippleOut {
          0%   { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(2); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
