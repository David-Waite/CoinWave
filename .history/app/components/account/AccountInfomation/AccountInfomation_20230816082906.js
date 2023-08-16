"use client";
import { MdAccountCircle } from "react-icons/md";
import Image from "next/image";
import styles from "./accountInformation.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AccountInformation() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastNameName: "",
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
        <label className={styles.lastNameLable} htmlFor="lastName">
          Last Name
        </label>
        <input
          className={styles.firstName}
          type="text"
          placeholder="Last Name"
          onChange={handleChange}
          name="lastName"
          value={formData.lastName}
        />
        <input
          className={styles.email}
          type="email"
          placeholder="Email"
          onChange={handleChange}
          name="email"
          value={formData.email}
        />
        <button className={styles.discardChanges}>Discord Changes</button>
        <button className={styles.saveChanges}>Save Changes</button>
      </form>
    </main>
  );
}
