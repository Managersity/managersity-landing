import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JE SUIS FOCUS EN 2026 | MANAGERSITY by H&C",
  description: "La plus grande montée en compétences commence maintenant. Accédez à nos Parcours Élites ou à l'Ultimate Pack.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
