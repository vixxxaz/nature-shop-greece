import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";
import CartProvider from "../components/Provider";
import ShoppingCartModal from "../components/ShoppingCartModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Naturenshop epanomi",
  description: "shop online from greece",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
              <NavBar />
              <ShoppingCartModal />
              {children}
        </CartProvider>       
      </body>
    </html>
  );
}
