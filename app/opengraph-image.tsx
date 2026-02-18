import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "Antojitos Doña Martha - Menú Digital"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #E6007E 0%, #B8005F 50%, #8A0047 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.08)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -60,
            left: -60,
            width: 250,
            height: 250,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.06)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 100,
            left: 80,
            width: 120,
            height: 120,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.04)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            position: "relative",
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              fontSize: 18,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.7)",
              fontWeight: 600,
            }}
          >
            Menú Digital
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.1,
              textAlign: "center",
            }}
          >
            Antojitos
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.1,
              textAlign: "center",
            }}
          >
            Doña Martha
          </div>

          {/* Divider */}
          <div
            style={{
              width: 80,
              height: 3,
              background: "rgba(255,255,255,0.4)",
              borderRadius: 2,
              marginTop: 16,
              marginBottom: 16,
            }}
          />

          {/* Menu items */}
          <div
            style={{
              fontSize: 22,
              color: "rgba(255,255,255,0.85)",
              letterSpacing: "0.05em",
              textAlign: "center",
            }}
          >
            Panuchos · Salbutes · Tacos · Huaraches · Sopes
          </div>

          {/* Location */}
          <div
            style={{
              fontSize: 16,
              color: "rgba(255,255,255,0.6)",
              marginTop: 8,
            }}
          >
            Leona Vicario, Puerto Morelos, Q. Roo
          </div>

          {/* CTA pill */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginTop: 24,
              background: "rgba(255,255,255,0.15)",
              borderRadius: 999,
              padding: "10px 24px",
              fontSize: 18,
              color: "#fff",
              fontWeight: 600,
            }}
          >
            Pide por WhatsApp
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
