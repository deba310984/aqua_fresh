const BENEFITS = [
  { text: "BIS Certified Purified Water", detail: "Tested and certified for safety standards" },
  { text: "Daily Fresh Delivery", detail: "Fresh supply delivered every single day" },
  { text: "No Plastic Smell / No Impurities", detail: "Multi-stage purification process" },
  { text: "Affordable Monthly Plans", detail: "Plans starting at just ₹380/month" },
  { text: "Punctual & Reliable Service", detail: "On-time delivery, guaranteed" },
  { text: "Serving Bailey Road Since 2015", detail: "10+ years of trusted local service" },
];

export function WhyChooseUs() {
  return (
    <section
      style={{
        background: "#ffffff",
        padding: "80px 1.5rem 80px",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Section label */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span
            style={{
              display: "inline-block",
              background: "rgba(0,201,228,0.1)",
              color: "#00C9E4",
              padding: "6px 18px",
              borderRadius: "50px",
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "1rem",
              border: "1px solid rgba(0,201,228,0.25)",
            }}
          >
            🏆 Why HZ Aqua Fresh
          </span>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              color: "#0A1F33",
            }}
          >
            Why Choose{" "}
            <span style={{ color: "#00C9E4" }}>HZ Aqua Fresh?</span>
          </h2>
        </div>

        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
          }}
          className="why-grid"
        >
          {/* Left — Image */}
          <div
            className="fade-in-left"
            style={{
              position: "relative",
              animationDelay: "0.1s",
              opacity: 0,
            }}
          >
            {/* Background decoration */}
            <div
              style={{
                position: "absolute",
                top: "-20px",
                left: "-20px",
                width: "calc(100% + 20px)",
                height: "calc(100% + 20px)",
                borderRadius: "28px",
                background: "linear-gradient(135deg, rgba(0,201,228,0.12), rgba(0,63,107,0.06))",
                zIndex: 0,
              }}
            />
            {/* Main image */}
            <div
              style={{
                position: "relative",
                zIndex: 1,
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(0,63,107,0.18)",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1657368567330-662b92e03dcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdXJlJTIwZHJpbmtpbmclMjB3YXRlciUyMHNwbGFzaCUyMGNsZWFufGVufDF8fHx8MTc3Mzk0MDc3OXww&ixlib=rb-4.1.0&q=80&w=800"
                alt="Pure clean water"
                style={{ width: "100%", aspectRatio: "5/4", objectFit: "cover", display: "block" }}
              />
              {/* Overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(135deg, rgba(0,201,228,0.1) 0%, transparent 60%)",
                  pointerEvents: "none",
                }}
              />
            </div>

            {/* Floating stat badges */}
            <div
              style={{
                position: "absolute",
                bottom: "-20px",
                right: "20px",
                background: "#003F6B",
                color: "#fff",
                borderRadius: "16px",
                padding: "14px 20px",
                boxShadow: "0 12px 36px rgba(0,63,107,0.35)",
                zIndex: 2,
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.5rem",
                  color: "#00C9E4",
                }}
              >
                10+
              </div>
              <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.7)", fontWeight: 600 }}>
                Years of Trust
              </div>
            </div>

            <div
              style={{
                position: "absolute",
                top: "20px",
                right: "-16px",
                background: "#00C9E4",
                color: "#fff",
                borderRadius: "16px",
                padding: "12px 18px",
                boxShadow: "0 8px 24px rgba(0,201,228,0.4)",
                zIndex: 2,
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.3rem",
                }}
              >
                100%
              </div>
              <div style={{ fontSize: "0.72rem", fontWeight: 700, opacity: 0.9 }}>
                Pure Water
              </div>
            </div>
          </div>

          {/* Right — Benefits */}
          <div
            className="fade-in-right"
            style={{
              animationDelay: "0.2s",
              opacity: 0,
            }}
          >
            <p
              style={{
                color: "#4A7A9B",
                fontSize: "1rem",
                lineHeight: 1.7,
                marginBottom: "2rem",
              }}
            >
              We're more than a water delivery service — we're your neighbourhood's trusted partner for
              health, purity, and convenience. Here's why thousands of families choose us:
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {BENEFITS.map((benefit, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "14px",
                    padding: "14px 18px",
                    borderRadius: "14px",
                    background: i % 2 === 0 ? "rgba(0,201,228,0.05)" : "transparent",
                    border: "1px solid rgba(0,63,107,0.06)",
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.background = "rgba(0,201,228,0.08)";
                    (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,201,228,0.25)";
                    (e.currentTarget as HTMLDivElement).style.transform = "translateX(4px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.background = i % 2 === 0 ? "rgba(0,201,228,0.05)" : "transparent";
                    (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,63,107,0.06)";
                    (e.currentTarget as HTMLDivElement).style.transform = "translateX(0)";
                  }}
                >
                  <div
                    style={{
                      width: "26px",
                      height: "26px",
                      borderRadius: "50%",
                      background: "#00C9E4",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: "1px",
                    }}
                  >
                    <span style={{ color: "#fff", fontSize: "0.75rem", fontWeight: 700 }}>✓</span>
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 700,
                        fontSize: "0.95rem",
                        color: "#0A1F33",
                        marginBottom: "2px",
                      }}
                    >
                      {benefit.text}
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "#4A7A9B" }}>
                      {benefit.detail}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20order%20water%20jars%20from%20Aqua%20Fresh"
              target="_blank"
              rel="noopener noreferrer"
              className="aqua-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "linear-gradient(135deg, #003F6B, #005a9a)",
                color: "#fff",
                padding: "14px 30px",
                borderRadius: "50px",
                fontSize: "0.92rem",
                fontWeight: 700,
                textDecoration: "none",
                marginTop: "2rem",
                boxShadow: "0 8px 24px rgba(0,63,107,0.3)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-3px)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 14px 36px rgba(0,63,107,0.45)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 24px rgba(0,63,107,0.3)";
              }}
            >
              Experience the Difference →
            </a>
          </div>
        </div>
      </div>

      {/* Wave to sky blue */}
      <div style={{ marginTop: "80px", lineHeight: 0 }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ width: "100%", height: "80px", display: "block" }}>
          <path d="M0,30 C500,80 940,0 1440,45 L1440,80 L0,80 Z" fill="#E8F7FC" />
        </svg>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .why-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
}
