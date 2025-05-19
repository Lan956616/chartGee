import "./globals.css";
import AuthInit from "@/components/AuthInit";
import StoreProvider from "./storeProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "ChartGee",
  icons: [
    { rel: "icon", url: "/logos/favicon.png" },
    { rel: "shortcut icon", url: "/logos/favicon.png" },
  ],
};

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
        <ToastContainer position="top-center" autoClose={3000} />
      </body>
    </html>
  );
}
