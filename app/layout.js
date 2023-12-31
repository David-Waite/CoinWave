// layout
import Nav from "./components/Nav/Nav";
import "./globals.css";
import { CartProvider } from "../context/cart";
import { Montserrat } from "next/font/google";

// font imported by google fonts

const montserrat = Montserrat({ subsets: ["latin"] });
export const metadata = {
  title: "Coin Wave",
  description: "Generated by create next app",
};

// wraps the nav on top of each page
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
