const SERVICES = [
  {
    icon: "🏠",
    title: "Home Delivery",
    description: "Fresh 20L jars delivered directly to your home. Morning and evening slots available, 7 days a week.",
  },
  {
    icon: "🏢",
    title: "Office Supply",
    description: "Reliable bulk water supply for offices and commercial spaces. Scheduled deliveries with priority service.",
  },
  {
    icon: "🔄",
    title: "Monthly Subscription",
    description: "Set up a recurring delivery plan and save more. No need to reorder — we show up automatically.",
  },
  {
    icon: "🚚",
    title: "Same Day Delivery",
    description: "Order before noon and get your jars delivered the same day. Fast, fresh, and reliable — always.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      style={{
        background: "linear-gradient(160deg, #003F6B 0%, #002a50 100%)",
        padding: "80px 1.5rem 100px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative circles */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          border: "1px solid rgba(0,201,228,0.1)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-60px",
          left: "-80px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          border: "1px solid rgba(0,201,228,0.08)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span
            style={{
              display: "inline-block",
              background: "rgba(0,201,228,0.15)",
              color: "#00C9E4",
              padding: "6px 18px",
              borderRadius: "50px",
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "1rem",
              border: "1px solid rgba(0,201,228,0.3)",
            }}
          >
            ⚡ What We Offer
          </span>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              color: "#fff",
              marginBottom: "0.8rem",
            }}
          >
            Our{" "}
            <span style={{ color: "#00C9E4" }}>Services</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1rem", maxWidth: "480px", margin: "0 auto" }}>
            Comprehensive water supply solutions tailored for homes and businesses across Bailey Road.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1.5rem",
          }}
          className="services-grid"
        >
          {SERVICES.map((service, i) => (
            <div
              key={i}
              className="glass-card glass-card-hover fade-in-up"
              style={{
                borderRadius: "20px",
                padding: "2rem 1.5rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                animationDelay: `${i * 0.12}s`,
                opacity: 0,
                cursor: "default",
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: "58px",
                  height: "58px",
                  borderRadius: "16px",
                  background: "rgba(0,201,228,0.15)",
                  border: "1px solid rgba(0,201,228,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.6rem",
                  marginBottom: "1.25rem",
                  flexShrink: 0,
                }}
              >
                {service.icon}
              </div>

              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  color: "#fff",
                  marginBottom: "0.75rem",
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.6)",
                  fontSize: "0.88rem",
                  lineHeight: 1.65,
                }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Wave to white */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, lineHeight: 0 }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ width: "100%", height: "80px", display: "block" }}>
          <path d="M0,40 C480,80 960,0 1440,50 L1440,80 L0,80 Z" fill="#ffffff" />
        </svg>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
