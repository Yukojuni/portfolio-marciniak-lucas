"use client"

export function PaperBackground() {
  return (
    <div 
      className="fixed inset-0 pointer-events-none"
      style={{
        backgroundImage: "url('/images/paper-texture.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        opacity: 0.5,
        zIndex: 0,
      }}
      aria-hidden="true"
    />
  )
}
