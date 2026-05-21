import "./globals.css";

export const metadata = {
  title: "Pookie Janta Dal — For Those Who Cares",
  description: "No More Rants. Only Results. Establishment 2026 — Bharat.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
