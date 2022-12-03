import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="bg-background-dark text-fg-default relative">
        <img alt="background" src="/background.webp" className="absolute" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
