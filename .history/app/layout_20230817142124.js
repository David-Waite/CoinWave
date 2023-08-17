import Nav from "./components/Nav/Nav";
import "./globals.css";
import { CartContext } from "@/context/cart";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Coin Wave",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <CartProvider>
      <html lang="en">
        <body className={montserrat.className}>
          <Nav />
          {children}
        </body>
      </html>
    </CartProvider>
  );
}