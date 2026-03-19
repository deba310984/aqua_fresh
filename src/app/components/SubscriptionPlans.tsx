const PLANS = [
  {
    name: "Basic",
    jars: "10 Jars",
    period: "per month",
    price: "₹380",
    perJar: "₹38 / jar",
    featured: false,
    features: [
      "10 × 20L water jars",
      "Home delivery included",
      "Flexible schedule",
      "WhatsApp support",
    ],
  },
  {
    name: "Standard",
    jars: "20 Jars",
    period: "per month",
    price: "₹720",
    perJar: "₹36 / jar",
    featured: true,
    badge: "Best Value",
    features: [
      "20 × 20L water jars",
      "Priority home delivery",
      "Fixed or flexible schedule",
      "Free dispenser rental",
      "24/7 WhatsApp support",
    ],
  },
  {
    name: "Premium",
    jars: "30 Jars",
    period: "per month",
    price: "₹1,050",
    perJar: "₹35 / jar",
    featured: false,
    features: [
      "30 × 20L water jars",
      "Same-day delivery guarantee",
      "Custom schedule",
      "Free dispenser rental",
      "Dedicated support agent",
      "Monthly water quality report",
    ],
  },
];

const WHATSAPP_PLAN = (plan: string) =>
  `https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20subscribe%20to%20the%20${plan}%20Plan%20from%20Aqua%20Fresh`;

export function SubscriptionPlans() {
  return (
    <section
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
            💰 Subscription Plans
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
            Choose Your{" "}
            <span style={{ color: "#003F6B" }}>Monthly Plan</span>
          </h2>
          <p style={{ color: "#4A7A9B", fontSize: "1rem", maxWidth: "480px", margin: "0 auto" }}>
            Save more with a monthly subscription. Cancel or change anytime.
          </p>
        </div>

        {/* Plan Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.75rem",
            alignItems: "center",
          }}
          className="plans-grid"
        >
          {PLANS.map((plan, i) => (
            <div
              key={plan.name}
              className={`fade-in-up ${plan.featured ? "plan-card-featured" : "plan-card"}`}
              style={{
                borderRadius: "24px",
                padding: "2.25rem",
                position: "relative",
                animationDelay: `${i * 0.15}s`,
                opacity: 0,
                transform: plan.featured ? "scale(1.03)" : "scale(1)",
              }}
            >
              {/* Best Value Badge */}
              {plan.badge && (
                <div
                  style={{
                    position: "absolute",
                    top: "-14px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "linear-gradient(135deg, #F5A623, #d4881a)",
                    color: "#fff",
                    padding: "5px 20px",
                    borderRadius: "50px",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    boxShadow: "0 4px 14px rgba(245,166,35,0.45)",
                    whiteSpace: "nowrap",
                  }}
                >
                  ⭐ {plan.badge}
                </div>
              )}

              {/* Plan Name */}
              <div style={{ marginBottom: "1.5rem" }}>
                <span
                  style={{
                    display: "inline-block",
                    background: plan.featured ? "rgba(0,201,228,0.2)" : "rgba(0,63,107,0.07)",
                    color: plan.featured ? "#00C9E4" : "#003F6B",
                    padding: "4px 14px",
                    borderRadius: "50px",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: "0.8rem",
                  }}
                >
                  {plan.name}
                </span>
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: plan.featured ? "rgba(255,255,255,0.7)" : "#4A7A9B",
                    marginBottom: "0.4rem",
                  }}
                >
                  {plan.jars} / month
                </h3>
              </div>

              {/* Price */}
              <div style={{ marginBottom: "1.75rem" }}>
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                    color: plan.featured ? "#fff" : "#003F6B",
                    lineHeight: 1,
                    marginBottom: "4px",
                  }}
                >
                  {plan.price}
                </div>
                <div
                  style={{
                    fontSize: "0.82rem",
                    color: plan.featured ? "rgba(255,255,255,0.55)" : "#4A7A9B",
                    fontWeight: 600,
                  }}
                >
                  {plan.perJar} · {plan.period}
                </div>
              </div>

              {/* Divider */}
              <div
                style={{
                  height: "1px",
                  background: plan.featured ? "rgba(255,255,255,0.12)" : "rgba(0,63,107,0.08)",
                  marginBottom: "1.5rem",
                }}
              />

              {/* Features */}
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem 0", display: "flex", flexDirection: "column", gap: "10px" }}>
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      fontSize: "0.88rem",
                      color: plan.featured ? "rgba(255,255,255,0.8)" : "#4A7A9B",
                      fontWeight: 500,
                    }}
                  >
                    <span
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        background: plan.featured ? "rgba(0,201,228,0.25)" : "rgba(0,201,228,0.12)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        fontSize: "0.65rem",
                        color: plan.featured ? "#00C9E4" : "#00C9E4",
                        fontWeight: 700,
                      }}
                    >
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={WHATSAPP_PLAN(plan.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="aqua-btn"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  background: plan.featured
                    ? "linear-gradient(135deg, #00C9E4, #009ab5)"
                    : "linear-gradient(135deg, #003F6B, #005a9a)",
                  color: "#fff",
                  padding: "14px",
                  borderRadius: "50px",
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  textDecoration: "none",
                  boxShadow: plan.featured
                    ? "0 8px 24px rgba(0,201,228,0.4)"
                    : "0 8px 24px rgba(0,63,107,0.25)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                }}
              >
                📱 Subscribe on WhatsApp
              </a>
            </div>
          ))}
        </div>

        {/* Note */}
        <p
          style={{
            textAlign: "center",
            color: "#4A7A9B",
            fontSize: "0.85rem",
            marginTop: "2rem",
            fontWeight: 500,
          }}
        >
          ✅ No contracts · Cancel anytime · Free delivery included in all plans
        </p>
      </div>

      {/* Wave to white */}
      <div style={{ marginTop: "80px", lineHeight: 0 }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ width: "100%", height: "80px", display: "block" }}>
          <path d="M0,50 C400,0 1040,80 1440,30 L1440,80 L0,80 Z" fill="#ffffff" />
        </svg>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .plans-grid { grid-template-columns: 1fr !important; max-width: 440px; margin: 0 auto; }
        }
        @media (min-width: 600px) and (max-width: 900px) {
          .plans-grid { grid-template-columns: repeat(2, 1fr) !important; max-width: 100%; }
        }
      `}</style>
    </section>
  );
}
