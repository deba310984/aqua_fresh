import { Droplets } from "lucide-react";

const QUICK_LINKS = ["Home", "Products", "Services", "About", "Contact"];
const SERVICE_AREAS = ["Bailey Road", "Rajendra Nagar", "Boring Road", "Patliputra", "Punaichak", "Anisabad"];
const SERVICES_LIST = ["20L Jar Delivery", "Dispenser Rental", "Monthly Subscription", "Office Supply", "Bulk Orders", "Same-Day Delivery"];

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        background: "#001a30",
        borderTop: "1px solid rgba(0,201,228,0.1)",
        padding: "60px 1.5rem 0",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "3rem",
            paddingBottom: "3rem",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
          }}
          className="footer-grid"
        >
          {/* Brand col */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1.25rem" }}>
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #00C9E4, #003F6B)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 12px rgba(0,201,228,0.3)",
                }}
              >
                <Droplets style={{ width: 22, height: 22, color: "#fff" }} />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    color: "#fff",
                    lineHeight: 1.1,
                  }}
                >
                  Aqua Fresh
                </div>
                <div
                  style={{
                    fontSize: "0.65rem",
                    color: "#00C9E4",
                    letterSpacing: "0.1em",
                    fontWeight: 600,
                    textTransform: "uppercase",
                  }}
                >
                  Water Supply
                </div>
              </div>
            </div>
            <p
              style={{
                color: "rgba(255,255,255,0.55)",
                fontSize: "0.9rem",
                lineHeight: 1.7,
                marginBottom: "1.25rem",
                fontStyle: "italic",
              }}
            >
              "Pure Water. Delivered to Your Door."
            </p>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.85rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Bailey Road's most trusted purified water supplier since 2015. BIS certified, always fresh, always on time.
            </p>

            {/* Social Links */}
            <div style={{ display: "flex", gap: "10px" }}>
              {[
                { icon: <FacebookIcon />, href: "#", label: "Facebook" },
                { icon: <InstagramIcon />, href: "#", label: "Instagram" },
                { icon: <WhatsAppIcon />, href: "https://wa.me/919876543210", label: "WhatsApp" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "10px",
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(255,255,255,0.6)",
                    textDecoration: "none",
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(0,201,228,0.2)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(0,201,228,0.4)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#00C9E4";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.07)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.12)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.6)";
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "0.88rem",
                color: "#fff",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}
            >
              Quick Links
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {QUICK_LINKS.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollTo(link)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      color: "rgba(255,255,255,0.5)",
                      fontSize: "0.88rem",
                      padding: 0,
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      transition: "color 0.2s",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "#00C9E4")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.5)")}
                  >
                    <span style={{ color: "#00C9E4", fontSize: "0.65rem" }}>→</span>
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "0.88rem",
                color: "#fff",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}
            >
              Services
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {SERVICES_LIST.map((s) => (
                <li
                  key={s}
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "0.88rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <span style={{ color: "#00C9E4", fontSize: "0.65rem" }}>•</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas + Contact */}
          <div>
            <h4
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "0.88rem",
                color: "#fff",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}
            >
              Service Areas
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem 0", display: "flex", flexDirection: "column", gap: "8px" }}>
              {SERVICE_AREAS.map((area) => (
                <li
                  key={area}
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "0.85rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <span style={{ fontSize: "0.7rem" }}>📍</span>
                  {area}
                </li>
              ))}
            </ul>

            <div
              style={{
                background: "rgba(0,201,228,0.08)",
                border: "1px solid rgba(0,201,228,0.15)",
                borderRadius: "12px",
                padding: "14px",
              }}
            >
              <p style={{ color: "#00C9E4", fontSize: "0.8rem", fontWeight: 700, marginBottom: "4px" }}>
                📞 Contact Us
              </p>
              <a
                href="tel:+919876543210"
                style={{ color: "#fff", fontSize: "0.9rem", fontWeight: 700, textDecoration: "none", display: "block", marginBottom: "4px" }}
              >
                +91 98765 43210
              </a>
              <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.75rem" }}>
                Mon–Sun · 6AM–8PM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1.25rem 0",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.8rem" }}>
            © 2025 Aqua Fresh Water Supply · Bailey Road, Patna, Bihar · All rights reserved.
          </p>
          <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.78rem" }}>
            Made with 💧 for pure hydration
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 540px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
