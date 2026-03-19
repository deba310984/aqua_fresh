import { useState, useEffect } from "react";
import { Menu, X, Droplets, Phone } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20order%20water%20jars%20from%20Aqua%20Fresh";

const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "Products", id: "products" },
  { label: "Services", id: "services" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.35s ease",
        background: scrolled
          ? "rgba(255,255,255,0.92)"
          : "rgba(0,63,107,0.15)",
        backdropFilter: scrolled ? "blur(16px)" : "blur(8px)",
        boxShadow: scrolled ? "0 4px 24px rgba(0,63,107,0.12)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,63,107,0.08)" : "none",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "72px",
          }}
        >
          {/* Logo */}
          <div
            style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}
            onClick={() => scrollTo("home")}
          >
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #00C9E4, #003F6B)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 12px rgba(0,201,228,0.4)",
              }}
            >
              <Droplets style={{ width: 22, height: 22, color: "#fff" }} />
            </div>
            <div>
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.15rem",
                  color: scrolled ? "#003F6B" : "#fff",
                  lineHeight: 1.1,
                }}
              >
                Aqua Fresh
              </div>
              <div
                style={{
                  fontSize: "0.68rem",
                  color: scrolled ? "#4A7A9B" : "#00C9E4",
                  letterSpacing: "0.08em",
                  fontWeight: 600,
                  textTransform: "uppercase",
                }}
              >
                Water Supply
              </div>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div
            className="hidden lg:flex"
            style={{ alignItems: "center", gap: "2rem" }}
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  color: scrolled ? "#0A1F33" : "rgba(255,255,255,0.9)",
                  transition: "color 0.2s ease",
                  padding: "4px 0",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLButtonElement).style.color = "#00C9E4")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLButtonElement).style.color = scrolled
                    ? "#0A1F33"
                    : "rgba(255,255,255,0.9)")
                }
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex" style={{ alignItems: "center", gap: "12px" }}>
            <a
              href="tel:+919876543210"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                color: scrolled ? "#003F6B" : "rgba(255,255,255,0.85)",
                textDecoration: "none",
                fontSize: "0.85rem",
                fontWeight: 600,
              }}
            >
              <Phone style={{ width: 16, height: 16 }} />
              +91 98765 43210
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="aqua-btn"
              style={{
                background: "linear-gradient(135deg, #00C9E4, #009ab5)",
                color: "#fff",
                padding: "10px 24px",
                borderRadius: "50px",
                fontSize: "0.88rem",
                fontWeight: 700,
                textDecoration: "none",
                boxShadow: "0 4px 16px rgba(0,201,228,0.35)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  "0 8px 24px rgba(0,201,228,0.5)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  "0 4px 16px rgba(0,201,228,0.35)";
              }}
            >
              Order Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: scrolled ? "#003F6B" : "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "6px",
            }}
          >
            {mobileOpen ? <X style={{ width: 26, height: 26 }} /> : <Menu style={{ width: 26, height: 26 }} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          style={{
            background: "rgba(255,255,255,0.98)",
            backdropFilter: "blur(16px)",
            borderTop: "1px solid rgba(0,63,107,0.08)",
            padding: "1rem 1.5rem 1.5rem",
          }}
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "12px 0",
                fontSize: "0.95rem",
                fontWeight: 600,
                color: "#0A1F33",
                borderBottom: "1px solid rgba(0,63,107,0.06)",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              {link.label}
            </button>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              width: "100%",
              textAlign: "center",
              background: "linear-gradient(135deg, #00C9E4, #009ab5)",
              color: "#fff",
              padding: "14px",
              borderRadius: "50px",
              fontSize: "0.95rem",
              fontWeight: 700,
              textDecoration: "none",
              marginTop: "1rem",
              boxShadow: "0 4px 16px rgba(0,201,228,0.35)",
            }}
          >
            📱 Order on WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}
