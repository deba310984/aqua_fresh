const AREAS = [
  "Bailey Road",
  "Rajendra Nagar",
  "Boring Road",
  "Patliputra Colony",
  "Punaichak",
  "Anisabad",
  "Kankarbagh",
  "Ashiana Nagar",
  "Rukanpura",
  "Saguna More",
];

export function CoverageArea() {
  return (
    <section
      id="contact"
      style={{
        background: "#E8F7FC",
        padding: "80px 1.5rem 80px",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
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
            📍 Coverage Area
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
            We Deliver Across Bailey Road
            <br />
            <span style={{ color: "#00C9E4" }}>&amp; Nearby Areas</span>
          </h2>
          <p style={{ color: "#4A7A9B", fontSize: "1rem", maxWidth: "520px", margin: "0 auto" }}>
            Currently serving these localities in Patna, Bihar. Don't see your area? Contact us — we're expanding fast!
          </p>
        </div>

        {/* Area Chips */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            justifyContent: "center",
            marginBottom: "3rem",
          }}
        >
          {AREAS.map((area, i) => (
            <div
              key={area}
              style={{
                background: i === 0
                  ? "linear-gradient(135deg, #003F6B, #005a9a)"
                  : "#fff",
                color: i === 0 ? "#fff" : "#003F6B",
                padding: "10px 22px",
                borderRadius: "50px",
                fontSize: "0.9rem",
                fontWeight: 700,
                border: i === 0 ? "none" : "1.5px solid rgba(0,63,107,0.15)",
                boxShadow:
                  i === 0
                    ? "0 6px 20px rgba(0,63,107,0.3)"
                    : "0 3px 12px rgba(0,63,107,0.06)",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                transition: "all 0.25s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                if (i !== 0) {
                  (e.currentTarget as HTMLDivElement).style.background = "linear-gradient(135deg, #003F6B, #005a9a)";
                  (e.currentTarget as HTMLDivElement).style.color = "#fff";
                  (e.currentTarget as HTMLDivElement).style.borderColor = "transparent";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 24px rgba(0,63,107,0.25)";
                }
              }}
              onMouseLeave={(e) => {
                if (i !== 0) {
                  (e.currentTarget as HTMLDivElement).style.background = "#fff";
                  (e.currentTarget as HTMLDivElement).style.color = "#003F6B";
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,63,107,0.15)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 3px 12px rgba(0,63,107,0.06)";
                }
              }}
            >
              <span>📍</span>
              {area}
              {i === 0 && (
                <span
                  style={{
                    background: "#00C9E4",
                    color: "#fff",
                    fontSize: "0.62rem",
                    fontWeight: 700,
                    padding: "2px 8px",
                    borderRadius: "50px",
                    letterSpacing: "0.05em",
                  }}
                >
                  HQ
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Map Embed + CTA row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 360px",
            gap: "2rem",
            alignItems: "stretch",
          }}
          className="map-grid"
        >
          {/* Map Placeholder */}
          <div
            style={{
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 12px 40px rgba(0,63,107,0.12)",
              background: "#fff",
              border: "1px solid rgba(0,63,107,0.08)",
              minHeight: "340px",
              position: "relative",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14407.765820244764!2d85.10975!3d25.60988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5843c5cf5cf3%3A0x48c91b89fb781cf3!2sBailey%20Road%2C%20Patna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="340"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="HZ Aqua Fresh Delivery Area — Bailey Road, Patna"
            />
          </div>

          {/* CTA Card */}
          <div
            style={{
              background: "linear-gradient(160deg, #003F6B, #001f40)",
              borderRadius: "24px",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              gap: "1.25rem",
              boxShadow: "0 12px 40px rgba(0,63,107,0.3)",
            }}
          >
            <div style={{ fontSize: "3rem" }}>🗺️</div>
            <h3
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "1.15rem",
                color: "#fff",
              }}
            >
              Not Sure If We Cover Your Area?
            </h3>
            <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.6 }}>
              Drop us a message on WhatsApp with your location. We'll confirm your area in minutes!
            </p>
            <a
              href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20check%20if%20Aqua%20Fresh%20delivers%20to%20my%20area"
              target="_blank"
              rel="noopener noreferrer"
              className="aqua-btn"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                background: "linear-gradient(135deg, #25D366, #128C7E)",
                color: "#fff",
                padding: "13px 24px",
                borderRadius: "50px",
                fontSize: "0.9rem",
                fontWeight: 700,
                textDecoration: "none",
                boxShadow: "0 6px 20px rgba(37,211,102,0.35)",
                width: "100%",
                justifyContent: "center",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
              }}
            >
              📱 Check Your Area
            </a>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: "rgba(255,255,255,0.5)",
                fontSize: "0.78rem",
              }}
            >
              <span>📍</span>
              Bailey Road, Patna, Bihar
            </div>
          </div>
        </div>
      </div>

      {/* Wave to dark blue */}
      <div style={{ marginTop: "80px", lineHeight: 0 }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ width: "100%", height: "80px", display: "block" }}>
          <path d="M0,45 C300,0 800,80 1440,25 L1440,80 L0,80 Z" fill="#003F6B" />
        </svg>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .map-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
