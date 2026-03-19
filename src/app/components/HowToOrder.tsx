const STEPS = [
  {
    number: "01",
    icon: "📱",
    title: "WhatsApp or Call Us",
    description:
      "Send us a message on WhatsApp or give us a quick call to place your order. We respond within minutes!",
  },
  {
    number: "02",
    icon: "🗓️",
    title: "Choose Delivery Schedule",
    description:
      "Tell us your preferred delivery time — morning or evening. Set up a recurring schedule for hassle-free refills.",
  },
  {
    number: "03",
    icon: "🚚",
    title: "Fresh Water at Your Door",
    description:
      "Our delivery team brings fresh purified water right to your doorstep — on time, every time.",
  },
];

export function HowToOrder() {
  return (
    <section
      id="about"
      style={{
        background: "#E8F7FC",
        padding: "80px 1.5rem 100px",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span
            style={{
              display: "inline-block",
              background: "rgba(0,63,107,0.08)",
              color: "#003F6B",
              padding: "6px 18px",
              borderRadius: "50px",
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            🚀 How It Works
          </span>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              color: "#0A1F33",
              marginBottom: "0.8rem",
            }}
          >
            Order in{" "}
            <span style={{ color: "#003F6B" }}>3 Simple Steps</span>
          </h2>
          <p style={{ color: "#4A7A9B", fontSize: "1rem", maxWidth: "480px", margin: "0 auto" }}>
            Getting pure water delivered has never been easier — start in under a minute.
          </p>
        </div>

        {/* Steps */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2rem",
            position: "relative",
          }}
          className="steps-grid"
        >
          {/* Dashed connecting line (desktop only) */}
          <div
            className="steps-line"
            style={{
              position: "absolute",
              top: "68px",
              left: "calc(16.66% + 1rem)",
              right: "calc(16.66% + 1rem)",
              height: "2px",
              background:
                "repeating-linear-gradient(90deg, #003F6B 0px, #003F6B 8px, transparent 8px, transparent 20px)",
              opacity: 0.25,
              zIndex: 0,
            }}
          />

          {STEPS.map((step, i) => (
            <div
              key={i}
              className="fade-in-up"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                position: "relative",
                zIndex: 1,
                animationDelay: `${i * 0.18}s`,
                opacity: 0,
              }}
            >
              {/* Number Circle */}
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #003F6B, #005a9a)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.5rem",
                  boxShadow: "0 8px 28px rgba(0,63,107,0.3)",
                  position: "relative",
                  flexShrink: 0,
                }}
              >
                {/* Outer ring */}
                <div
                  style={{
                    position: "absolute",
                    inset: "-5px",
                    borderRadius: "50%",
                    border: "2px dashed rgba(0,63,107,0.25)",
                  }}
                />
                <span style={{ fontSize: "2rem" }}>{step.icon}</span>
                {/* Step number badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "-4px",
                    right: "-4px",
                    width: "26px",
                    height: "26px",
                    borderRadius: "50%",
                    background: "#00C9E4",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.65rem",
                    fontWeight: 800,
                    color: "#fff",
                  }}
                >
                  {i + 1}
                </div>
              </div>

              {/* Card */}
              <div
                style={{
                  background: "#fff",
                  borderRadius: "20px",
                  padding: "1.75rem",
                  boxShadow: "0 8px 32px rgba(0,100,180,0.09)",
                  border: "1px solid rgba(0,63,107,0.07)",
                  width: "100%",
                  transition: "transform 0.3s, box-shadow 0.3s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 16px 40px rgba(0,100,180,0.15)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(0,100,180,0.09)";
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    color: "#003F6B",
                    marginBottom: "0.75rem",
                  }}
                >
                  {step.title}
                </h3>
                <p style={{ color: "#4A7A9B", fontSize: "0.88rem", lineHeight: 1.65 }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <a
            href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20order%20water%20jars%20from%20Aqua%20Fresh"
            target="_blank"
            rel="noopener noreferrer"
            className="aqua-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "linear-gradient(135deg, #25D366, #128C7E)",
              color: "#fff",
              padding: "15px 36px",
              borderRadius: "50px",
              fontSize: "1rem",
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 8px 28px rgba(37,211,102,0.35)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-3px)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 14px 36px rgba(37,211,102,0.5)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 28px rgba(37,211,102,0.35)";
            }}
          >
            📱 Start Your Order Now
          </a>
        </div>
      </div>

      {/* Wave to deep blue */}
      <div style={{ marginTop: "80px", lineHeight: 0 }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ width: "100%", height: "80px", display: "block" }}>
          <path d="M0,60 C300,0 900,80 1440,20 L1440,80 L0,80 Z" fill="#003F6B" />
        </svg>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .steps-grid { grid-template-columns: 1fr !important; }
          .steps-line { display: none !important; }
        }
      `}</style>
    </section>
  );
}
