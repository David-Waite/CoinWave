"use client";
import styles from "./sellProduct.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { MdSecurityUpdate } from "react-icons/md";

export default function SellProduct() {
  const [formData, setFormData] = useState({
    itemName: "",
    category: "",
    photo: "",
    description: "",
    price: "",
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
        <h1 className={styles.title}>Sell Product</h1>

        <div className={styles.form}>
          <div className={styles.nameContainer}>
            <div className={styles.inputContainer}>
              <label className={styles.firstNameLable} htmlFor="itemName">
                Item Name
              </label>
              <input
                className={styles.input}
                type="text"
                placeholder="Item Name"
                onChange={handleChange}
                name="itemName"
                value={formData.itemName}
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
        <div className={styles.buttonContainer}>
          <button className={styles.discardChanges}>Discard Changes</button>
          <button className={styles.saveChanges}>Save Changes</button>
        </div>
      </form>
    </main>
  );
}
