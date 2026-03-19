const STATS = [
  { icon: "💧", value: "5,000+", label: "Jars Delivered" },
  { icon: "🏠", value: "200+",   label: "Regular Homes" },
  { icon: "🏢", value: "50+",    label: "Offices Served" },
  { icon: "⭐", value: "4.9",    label: "Customer Rating" },
];

export function StatsStrip() {
  return (
    <section
      style={{
        background: "#ffffff",
        padding: "3rem 1.5rem",
        borderBottom: "1px solid rgba(0,63,107,0.06)",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1rem",
        }}
        className="stats-grid"
      >
        {STATS.map((stat, i) => (
          <div
            key={i}
            className="fade-in-up"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "2rem 1rem",
              borderRadius: "20px",
              background: "#fff",
              border: "1px solid rgba(0,201,228,0.1)",
              boxShadow: "0 4px 20px rgba(0,100,180,0.06)",
              animationDelay: `${i * 0.12}s`,
              opacity: 0,
              transition: "transform 0.3s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLDivElement).style.transform = "translateY(0)")
            }
          >
            <span style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{stat.icon}</span>
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontWeight: 700,
                color: "#00C9E4",
                lineHeight: 1,
                marginBottom: "0.4rem",
              }}
            >
              {stat.value}
            </span>
            <span
              style={{
                fontSize: "0.9rem",
                color: "#4A7A9B",
                fontWeight: 600,
                textAlign: "center",
              }}
            >
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
