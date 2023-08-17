"use client";

import styles from "./nav.module.css";
import Link from "next/link";
import { MdAccountCircle } from "react-icons/md";
import { BsBagFill } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "@/context/cart";

export default function Nav() {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    getCartTotal,
    updateQuantity,
  } = useContext(CartContext);
  return (
    <nav className={styles.main}>
      <Link className={styles.homeLink} href="/">
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="18" cy="18" r="18" fill="#FF9E9E" />
          <mask
            id="mask0_7_9"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="36"
            height="36"
          >
            <path
              d="M36 18C36 27.9411 27.9411 36 18 36C8.05887 36 0 27.9411 0 18C0 8.05887 8.05887 0 18 0C27.9411 0 36 8.05887 36 18Z"
              fill="#FF9E9E"
            />
          </mask>
          <g mask="url(#mask0_7_9)">
            <path
              d="M2.13416 37.6684L12.0865 22.0755L16.3706 24.9865L24.7305 11.8885L29.6267 15.2153L36.3942 4.61218"
              stroke="white"
              strokeWidth="1.5"
            />
          </g>
        </svg>
        CoinWave
      </Link>
      <div>
        <Link className={styles.loginLink} href="/login">
          <MdAccountCircle size={24} />
        </Link>
        <Link href="/cart">
          <BsBagFill size={24} />
        </Link>
      </div>
    </nav>
  );
}
