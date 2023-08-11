"use client";
import Image from "next/image";
import styles from "./login.module.css";
import { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: false,
    employment: "",
    favColor: "",
  });
  return <main className={styles.main}>Login</main>;
}
