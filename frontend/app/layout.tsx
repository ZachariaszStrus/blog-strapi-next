export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
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
