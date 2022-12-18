import { ReactNode } from "react";

import "../styles/globals.css";

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html>
      <body className="relative bg-background-dark text-fg-default">
        <img alt="background" src="/background.webp" className="absolute" />
        {children}
      </body>
    </html>
  );
}
