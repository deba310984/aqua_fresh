const WHATSAPP_URL =
  "https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20order%20water%20jars%20from%20Aqua%20Fresh";

const BUBBLES = [
  { size: 70, left: "8%",  bottom: "18%", dur: "5s",   delay: "0s" },
  { size: 45, left: "18%", bottom: "55%", dur: "7s",   delay: "1s" },
  { size: 90, left: "5%",  bottom: "70%", dur: "6s",   delay: "0.5s" },
  { size: 35, left: "30%", bottom: "80%", dur: "4.5s", delay: "2s" },
  { size: 55, left: "75%", bottom: "15%", dur: "5.5s", delay: "0.8s" },
  { size: 80, left: "85%", bottom: "50%", dur: "8s",   delay: "1.5s" },
  { size: 40, left: "90%", bottom: "75%", dur: "4s",   delay: "2.5s" },
  { size: 60, left: "65%", bottom: "82%", dur: "6.5s", delay: "0.3s" },
  { size: 30, left: "55%", bottom: "20%", dur: "3.5s", delay: "1.8s" },
  { size: 50, left: "42%", bottom: "65%", dur: "5s",   delay: "0.6s" },
];

export function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(160deg, #003F6B 0%, #00294a 50%, #001a30 100%)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        paddingTop: "80px",
      }}
    >
      {/* Animated Bubbles */}
      {BUBBLES.map((b, i) => (
        <div
          key={i}
          className="bubble-float"
          style={{
            position: "absolute",
            width: b.size,
            height: b.size,
            left: b.left,
            bottom: b.bottom,
            borderRadius: "50%",
            background:
              i % 3 === 0
                ? "radial-gradient(circle at 30% 30%, rgba(0,201,228,0.25), rgba(0,201,228,0.05))"
                : "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.12), rgba(255,255,255,0.02))",
            border:
              i % 2 === 0
                ? "1px solid rgba(0,201,228,0.3)"
                : "1px solid rgba(255,255,255,0.12)",
            animationDuration: b.dur,
            animationDelay: b.delay,
            pointerEvents: "none",
          }}
        />
      ))}

      {/* Radial glow center */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "70vw",
          height: "70vw",
          maxWidth: "900px",
          maxHeight: "900px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,201,228,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Content Container */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "3rem 1.5rem",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          gap: "3rem",
        }}
        className="hero-grid"
      >
        {/* Left — Text */}
        <div className="fade-in-left" style={{ animationDelay: "0.1s", opacity: 0 }}>
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(0,201,228,0.15)",
              border: "1px solid rgba(0,201,228,0.35)",
              borderRadius: "50px",
              padding: "6px 16px",
              marginBottom: "1.5rem",
            }}
          >
            <span style={{ fontSize: "0.75rem", color: "#00C9E4", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              🏆 Bailey Road's #1 Choice
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)",
              color: "#fff",
              lineHeight: 1.15,
              marginBottom: "1.25rem",
            }}
          >
            Pure Drinking Water,{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #00C9E4, #6EF5FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Delivered Fresh
            </span>{" "}
            Daily
          </h1>

          {/* Subline */}
          <p
            style={{
              fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
              color: "rgba(255,255,255,0.75)",
              marginBottom: "0.8rem",
              lineHeight: 1.6,
            }}
          >
            Bailey Road's Most Trusted Water Supplier
          </p>
          <p
            style={{
              fontSize: "0.95rem",
              color: "rgba(255,255,255,0.55)",
              marginBottom: "2.2rem",
              lineHeight: 1.6,
            }}
          >
            BIS Certified · 20L Jars · Home & Office Delivery · Monthly Plans Available
          </p>

          {/* CTA Buttons */}
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="aqua-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "linear-gradient(135deg, #25D366, #128C7E)",
                color: "#fff",
                padding: "15px 32px",
                borderRadius: "50px",
                fontSize: "1rem",
                fontWeight: 700,
                textDecoration: "none",
                boxShadow: "0 8px 28px rgba(37,211,102,0.4)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-3px)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 14px 36px rgba(37,211,102,0.55)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 28px rgba(37,211,102,0.4)";
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
                padding: "15px 32px",
                borderRadius: "50px",
                fontSize: "1rem",
                fontWeight: 700,
                textDecoration: "none",
                border: "2px solid rgba(255,255,255,0.45)",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.1)";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#fff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.45)";
              }}
            >
              📞 Call to Subscribe
            </a>
          </div>

          {/* Trust row */}
          <div
            style={{
              display: "flex",
              gap: "24px",
              marginTop: "2.5rem",
              flexWrap: "wrap",
            }}
          >
            {[
              { icon: "⭐", text: "4.9 Rating" },
              { icon: "🚚", text: "Daily Delivery" },
              { icon: "💧", text: "5000+ Jars" },
            ].map((item) => (
              <div
                key={item.text}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                }}
              >
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Jar Image */}
        <div
          className="fade-in-right"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            animationDelay: "0.3s",
            opacity: 0,
            position: "relative",
          }}
        >
          {/* Glow ring */}
          <div
            style={{
              position: "absolute",
              width: "380px",
              height: "380px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(0,201,228,0.18) 0%, transparent 70%)",
              border: "1px solid rgba(0,201,228,0.15)",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: "460px",
              height: "460px",
              borderRadius: "50%",
              border: "1px dashed rgba(0,201,228,0.12)",
            }}
          />
          {/* Water Jar Image */}
          <div
            className="jar-float"
            style={{
              position: "relative",
              zIndex: 2,
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 24px 80px rgba(0,0,0,0.4), 0 0 60px rgba(0,201,228,0.2)",
              width: "min(320px, 100%)",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1624392294437-8fc9f876f4d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwyMCUyMGxpdGVyJTIwd2F0ZXIlMjBqYXIlMjBib3R0bGUlMjBkZWxpdmVyeXxlbnwxfHx8fDE3NzM5NDA3Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="20L Pure Water Jar"
              style={{ width: "100%", display: "block", aspectRatio: "4/5", objectFit: "cover" }}
            />
            {/* Overlay shimmer */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(135deg, rgba(0,201,228,0.12) 0%, transparent 60%)",
                pointerEvents: "none",
              }}
            />
          </div>

          {/* Floating badge */}
          <div
            style={{
              position: "absolute",
              top: "10%",
              right: "-5%",
              background: "rgba(0,201,228,0.9)",
              backdropFilter: "blur(10px)",
              borderRadius: "16px",
              padding: "10px 16px",
              color: "#fff",
              fontSize: "0.8rem",
              fontWeight: 700,
              boxShadow: "0 8px 24px rgba(0,201,228,0.35)",
              zIndex: 3,
            }}
          >
            ₹40 / Jar
          </div>
          <div
            style={{
              position: "absolute",
              bottom: "12%",
              left: "-5%",
              background: "rgba(255,255,255,0.12)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.25)",
              borderRadius: "16px",
              padding: "10px 16px",
              color: "#fff",
              fontSize: "0.8rem",
              fontWeight: 700,
              zIndex: 3,
            }}
          >
            ✅ BIS Certified
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, lineHeight: 0 }}>
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" style={{ width: "100%", height: "90px", display: "block" }}>
          <path
            d="M0,30 C200,80 400,0 600,45 C800,90 1000,10 1200,50 C1300,65 1370,55 1440,60 L1440,90 L0,90 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      {/* Mobile responsive */}
      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
        }
      `}</style>
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
