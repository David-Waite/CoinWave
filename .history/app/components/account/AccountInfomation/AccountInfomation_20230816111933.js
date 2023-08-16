"use client";
import styles from "./accountInformation.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { MdSecurityUpdate } from "react-icons/md";

export default function AccountInformation() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastNameName: "",
    email: "",
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
        <p className={styles.welcomeText}>Welcome back {"John Doe"}!</p>

        <div className={styles.form}>
          <div className={styles.inputContainer}>
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
          </div>
          <div className={styles.inputContainer}>
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
          </div>
          <div className={styles.inputContainer}>
            <label className={styles.emailLable} htmlFor="email">
              Email
            </label>
            <input
              className={styles.email}
              type="email"
              placeholder="Email"
              onChange={handleChange}
              name="email"
              value={formData.email}
            />
          </div>
        </div>

        <button className={styles.discardChanges}>Discard Changes</button>
        <button className={styles.saveChanges}>Save Changes</button>
      </form>
    </main>
  );
}
