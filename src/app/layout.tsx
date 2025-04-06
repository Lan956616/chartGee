import "./globals.css";
import AuthInit from "@/components/AuthInit";
import StoreProvider from "./storeProvider";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <StoreProvider>
          <AuthInit />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
