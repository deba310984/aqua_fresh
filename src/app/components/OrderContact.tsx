export function OrderContact() {
  return (
    <section
      style={{
        background: "linear-gradient(160deg, #003F6B 0%, #001a30 100%)",
        padding: "80px 1.5rem 80px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decorative elements */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,201,228,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "10%",
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          border: "1px solid rgba(0,201,228,0.15)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          right: "8%",
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          border: "1px solid rgba(0,201,228,0.1)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "780px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Label */}
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
            marginBottom: "1.5rem",
            border: "1px solid rgba(0,201,228,0.3)",
          }}
        >
          🚀 Get Started Today
        </span>

        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            color: "#fff",
            marginBottom: "1rem",
            lineHeight: 1.2,
          }}
        >
          Ready for{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #00C9E4, #6EF5FF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Pure Water
          </span>{" "}
          Every Day?
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.65)",
            fontSize: "1.05rem",
            marginBottom: "2.5rem",
            lineHeight: 1.6,
          }}
        >
          Join 200+ happy homes and offices on Bailey Road. Get fresh, BIS-certified purified water delivered to your door — starting at just ₹40/jar.
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "3rem",
          }}
        >
          <a
            href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20order%20water%20jars%20from%20Aqua%20Fresh"
            target="_blank"
            rel="noopener noreferrer"
            className="aqua-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              background: "linear-gradient(135deg, #25D366, #128C7E)",
              color: "#fff",
              padding: "17px 40px",
              borderRadius: "50px",
              fontSize: "1.05rem",
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 10px 36px rgba(37,211,102,0.45)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-4px)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 18px 48px rgba(37,211,102,0.55)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 10px 36px rgba(37,211,102,0.45)";
            }}
          >
            <WhatsAppIcon />
            Order on WhatsApp
          </a>
          <a
            href="tel:+919876543210"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "transparent",
              color: "#fff",
              padding: "17px 36px",
              borderRadius: "50px",
              fontSize: "1.05rem",
              fontWeight: 700,
              textDecoration: "none",
              border: "2px solid rgba(255,255,255,0.35)",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.1)";
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "#fff";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.35)";
            }}
          >
            📞 Call Now
          </a>
        </div>

        {/* Phone number large */}
        <div
          style={{
            marginBottom: "2rem",
          }}
        >
          <a
            href="tel:+919876543210"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
              color: "#00C9E4",
              textDecoration: "none",
              display: "block",
              marginBottom: "8px",
              letterSpacing: "0.02em",
            }}
          >
            +91 98765 43210
          </a>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem" }}>
            📞 Replace with your actual phone number
          </p>
        </div>

        {/* Info strip */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "2rem",
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.12)",
            backdropFilter: "blur(10px)",
            borderRadius: "16px",
            padding: "16px 32px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {[
            { icon: "🕐", text: "Mon–Sun · 6AM–8PM" },
            { icon: "🚚", text: "Same-day Delivery" },
            { icon: "📍", text: "Bailey Road, Patna" },
          ].map((info) => (
            <div
              key={info.text}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: "rgba(255,255,255,0.75)",
                fontSize: "0.9rem",
                fontWeight: 600,
              }}
            >
              <span>{info.icon}</span>
              <span>{info.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}
