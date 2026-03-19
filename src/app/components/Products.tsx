const WHATSAPP_URL =
  "https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20order%20water%20jars%20from%20Aqua%20Fresh";

const PRODUCTS = [
  {
    id: 1,
    name: "20L Water Jar",
    price: "₹40 / jar",
    description:
      "BIS certified purified drinking water in reusable 20-litre jars. Perfect for home and small offices.",
    image:
      "https://images.unsplash.com/photo-1624392294437-8fc9f876f4d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwyMCUyMGxpdGVyJTIwd2F0ZXIlMjBqYXIlMjBib3R0bGUlMjBkZWxpdmVyeXxlbnwxfHx8fDE3NzM5NDA3Nzl8MA&ixlib=rb-4.1.0&q=80&w=600",
    badge: "Most Popular",
    badgeColor: "#F5A623",
    features: ["BIS Certified", "Purified & Fresh", "Same-day Delivery"],
  },
  {
    id: 2,
    name: "Dispenser on Rent",
    price: "₹299 / month",
    description:
      "Modern hot & cold water dispensers available on monthly rental. Free installation and maintenance.",
    image:
      "https://images.unsplash.com/photo-1769069920512-74fa44c30f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMGRpc3BlbnNlciUyMG9mZmljZSUyMG1vZGVybnxlbnwxfHx8fDE3NzM5NDA3ODB8MA&ixlib=rb-4.1.0&q=80&w=600",
    badge: null,
    features: ["Hot & Cold Water", "Free Installation", "Monthly Service"],
  },
  {
    id: 3,
    name: "Bulk Supply (50+ Jars)",
    price: "Custom Price",
    description:
      "Large-scale water supply for offices, events, and commercial spaces. Special discounted rates.",
    image:
      "https://images.unsplash.com/photo-1692116200677-eb3e7b755fc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMGRlbGl2ZXJ5JTIwaG9tZSUyMGRvb3JzdGVwfGVufDF8fHx8MTc3Mzk0MDc4MHww&ixlib=rb-4.1.0&q=80&w=600",
    badge: "Best Rates",
    badgeColor: "#003F6B",
    features: ["50+ Jars/Order", "Priority Delivery", "Custom Pricing"],
  },
];

export function Products() {
  return (
    <section
      id="products"
      style={{
        background: "#ffffff",
        padding: "80px 1.5rem 100px",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Section Header */}
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
            💧 Our Products
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
            Everything You Need for{" "}
            <span style={{ color: "#00C9E4" }}>Pure Water</span>
          </h2>
          <p style={{ color: "#4A7A9B", fontSize: "1rem", maxWidth: "520px", margin: "0 auto" }}>
            From daily jar delivery to office dispensers — we've got the right solution for every need.
          </p>
        </div>

        {/* Product Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.75rem",
          }}
          className="products-grid"
        >
          {PRODUCTS.map((product, i) => (
            <div
              key={product.id}
              className="product-card fade-in-up"
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                position: "relative",
                animationDelay: `${i * 0.15}s`,
                opacity: 0,
              }}
            >
              {/* Badge */}
              {product.badge && (
                <div
                  style={{
                    position: "absolute",
                    top: "14px",
                    left: "14px",
                    zIndex: 2,
                    background: product.badgeColor || "#F5A623",
                    color: "#fff",
                    padding: "5px 14px",
                    borderRadius: "50px",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  }}
                >
                  {product.badge}
                </div>
              )}

              {/* Image */}
              <div style={{ position: "relative", height: "220px", overflow: "hidden" }}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLImageElement).style.transform = "scale(1.06)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLImageElement).style.transform = "scale(1)")
                  }
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "80px",
                    background:
                      "linear-gradient(to top, rgba(255,255,255,1), transparent)",
                  }}
                />
              </div>

              {/* Content */}
              <div style={{ padding: "1.5rem" }}>
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.15rem",
                    color: "#0A1F33",
                    marginBottom: "0.5rem",
                  }}
                >
                  {product.name}
                </h3>
                <p
                  style={{
                    color: "#4A7A9B",
                    fontSize: "0.88rem",
                    lineHeight: 1.6,
                    marginBottom: "1rem",
                  }}
                >
                  {product.description}
                </p>

                {/* Features */}
                <div style={{ display: "flex", flexDirection: "column", gap: "5px", marginBottom: "1.25rem" }}>
                  {product.features.map((f) => (
                    <div
                      key={f}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "7px",
                        fontSize: "0.82rem",
                        color: "#4A7A9B",
                        fontWeight: 600,
                      }}
                    >
                      <span style={{ color: "#00C9E4", fontSize: "0.85rem" }}>✓</span>
                      {f}
                    </div>
                  ))}
                </div>

                {/* Price & CTA */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: "1rem",
                    borderTop: "1px solid rgba(0,63,107,0.07)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: "1.25rem",
                      color: "#003F6B",
                    }}
                  >
                    {product.price}
                  </span>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="aqua-btn"
                    style={{
                      background: "linear-gradient(135deg, #00C9E4, #009ab5)",
                      color: "#fff",
                      padding: "10px 22px",
                      borderRadius: "50px",
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      textDecoration: "none",
                      boxShadow: "0 4px 14px rgba(0,201,228,0.3)",
                      transition: "transform 0.2s, box-shadow 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                      (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 20px rgba(0,201,228,0.45)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                      (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 14px rgba(0,201,228,0.3)";
                    }}
                  >
                    Order Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Wave to sky blue */}
      <div style={{ marginTop: "80px", lineHeight: 0 }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ width: "100%", height: "80px", display: "block" }}>
          <path
            d="M0,20 C360,80 1080,0 1440,50 L1440,80 L0,80 Z"
            fill="#E8F7FC"
          />
        </svg>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .products-grid { grid-template-columns: 1fr !important; max-width: 480px; margin: 0 auto; }
        }
        @media (min-width: 600px) and (max-width: 900px) {
          .products-grid { grid-template-columns: repeat(2, 1fr) !important; max-width: 100%; }
        }
      `}</style>
    </section>
  );
}
