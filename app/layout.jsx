import "index.scss";

export const metadata = {
  title: "CV",
  description: "Mina Amrouche - Curriculum Vitae",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
