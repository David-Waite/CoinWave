"use client";
import { MdAccountCircle } from "react-icons/md";
import Image from "next/image";
import styles from "./accountInformation.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AccountInformation() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    password: "",
    rememberMe: false,
  });

  const router = useRouter();

  function handleChange(event) {
    const { type, name, value, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    router.push("/account");
  }

  return (
    <main className={styles.main}>
      <form onSubmit={handleSubmit}>
        <h1 className={styles.title}>DashBoard</h1>
        <p>Welcome back {"John Doe"}!</p>

        <h2>Account Details</h2>
        <label className={styles.firstNameLable} htmlFor="firstName">
          First Name
        </label>
        <input
          className={styles.firstName}
          type="text"
          placeholder="First Name"
          onChange={handleChange}
          name="firstName"
          value={formData.firstName}
        />
        <label className={styles.firstNameLable} htmlFor="firstName">
          Last Name
        </label>
        <input
          className={styles.firstName}
          type="text"
          placeholder="First Name"
          onChange={handleChange}
          name="firstName"
          value={formData.firstName}
        />
        <input
          className={styles.email}
          type="email"
          placeholder="Email"
          onChange={handleChange}
          name="email"
          value={formData.email}
        />
        <input
          className={styles.password}
          type="password"
          placeholder="Password"
          onChange={handleChange}
          name="password"
          value={formData.password}
        />

        <div className={styles.rememberMeContainer}>
          <input
            className={styles.rememberMeCheckbox}
            type="checkbox"
            id="rememberMe"
            checked={formData.rememberMe}
            onChange={handleChange}
            name="rememberMe"
          />
          <label className={styles.rememberMeText} htmlFor="rememberMe">
            remember me
          </label>
        </div>

        <button className={styles.loginBtn}>Login</button>
      </form>
    </main>
  );
}
