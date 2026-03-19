const TESTIMONIALS = [
  {
    name: "Ravi Kumar",
    area: "Bailey Road",
    rating: 5,
    review:
      "Aqua Fresh has been delivering to my home for over 2 years now. Never missed a single day. The water quality is excellent — pure, odour-free. Highly recommended!",
    initials: "RK",
    avatarBg: "#003F6B",
  },
  {
    name: "Priya Sharma",
    area: "Rajendra Nagar",
    rating: 5,
    review:
      "We switched from bottled water to Aqua Fresh for our office. The dispenser rental service is great and the staff is extremely professional. Cost-effective and reliable.",
    initials: "PS",
    avatarBg: "#00C9E4",
  },
  {
    name: "Amit Singh",
    area: "Boring Road",
    rating: 5,
    review:
      "Excellent service! The monthly subscription plan saves us a lot. Always fresh water, on time. Their WhatsApp ordering system is super convenient. 5 stars!",
    initials: "AS",
    avatarBg: "#005a9a",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: "3px" }}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={i < count ? "#F5A623" : "#e2e8f0"}
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section
      style={{
        background: "#ffffff",
        padding: "80px 1.5rem 80px",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span
            style={{
              display: "inline-block",
              background: "rgba(245,166,35,0.1)",
              color: "#d4881a",
              padding: "6px 18px",
              borderRadius: "50px",
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "1rem",
              border: "1px solid rgba(245,166,35,0.25)",
            }}
          >
            ⭐ Customer Reviews
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
            What Our{" "}
            <span style={{ color: "#00C9E4" }}>Customers Say</span>
          </h2>
          <p style={{ color: "#4A7A9B", fontSize: "1rem", maxWidth: "480px", margin: "0 auto" }}>
            Trusted by 200+ homes and 50+ offices across Patna's Bailey Road area.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.75rem",
          }}
          className="testimonials-grid"
        >
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="testimonial-card fade-in-up"
              style={{
                borderRadius: "20px",
                padding: "2rem",
                position: "relative",
                animationDelay: `${i * 0.15}s`,
                opacity: 0,
              }}
            >
              {/* Quote Mark */}
              <div
                style={{
                  position: "absolute",
                  top: "1.5rem",
                  right: "1.75rem",
                  fontFamily: "Georgia, serif",
                  fontSize: "4rem",
                  lineHeight: 1,
                  color: "rgba(0,201,228,0.18)",
                  userSelect: "none",
                }}
              >
                "
              </div>

              {/* Rating */}
              <div style={{ marginBottom: "1rem" }}>
                <StarRating count={t.rating} />
              </div>

              {/* Review */}
              <p
                style={{
                  color: "#4A7A9B",
                  fontSize: "0.92rem",
                  lineHeight: 1.7,
                  marginBottom: "1.5rem",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                "{t.review}"
              </p>

              {/* Divider */}
              <div
                style={{
                  height: "1px",
                  background: "rgba(0,63,107,0.07)",
                  marginBottom: "1.25rem",
                }}
              />

              {/* Customer info */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    background: t.avatarBg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    flexShrink: 0,
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.92rem",
                      color: "#0A1F33",
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontSize: "0.78rem",
                      color: "#4A7A9B",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    📍 {t.area}, Patna
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall rating strip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            marginTop: "2.5rem",
            padding: "1.25rem 2rem",
            background: "rgba(0,201,228,0.05)",
            borderRadius: "16px",
            border: "1px solid rgba(0,201,228,0.15)",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "2rem",
              color: "#003F6B",
            }}
          >
            4.9
          </div>
          <div>
            <StarRating count={5} />
            <div style={{ fontSize: "0.8rem", color: "#4A7A9B", marginTop: "3px" }}>
              Based on 150+ verified reviews
            </div>
          </div>
          <div
            style={{
              width: "1px",
              height: "40px",
              background: "rgba(0,63,107,0.1)",
              margin: "0 8px",
            }}
            className="hidden sm:block"
          />
          <div style={{ fontSize: "0.88rem", color: "#4A7A9B" }}>
            🏆 <strong style={{ color: "#003F6B" }}>Bailey Road's Most Trusted</strong> Water Supplier since 2015
          </div>
        </div>
      </div>

      {/* Wave to sky blue */}
      <div style={{ marginTop: "80px", lineHeight: 0 }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ width: "100%", height: "80px", display: "block" }}>
          <path d="M0,20 C360,80 1080,0 1440,55 L1440,80 L0,80 Z" fill="#E8F7FC" />
        </svg>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .testimonials-grid { grid-template-columns: 1fr !important; max-width: 480px; margin: 0 auto; }
        }
        @media (min-width: 600px) and (max-width: 900px) {
          .testimonials-grid { grid-template-columns: repeat(2, 1fr) !important; max-width: 100%; }
        }
      `}</style>
    </section>
  );
}
