// sell product compontent for account page
"use client";
import axios from "axios";
import styles from "./sellProduct.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SellProduct() {
  // data stored in state for the form
  const [formData, setFormData] = useState({
    itemName: "",
    category: "",
    photo: "",
    description: "",
    price: "",
  });

  const router = useRouter();

  // function that updates the form data when the form is changed
  function handleChange(event) {
    const { type, name, value, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  // function to be triggered when the submit button is pressed
  function handleSubmit(event) {
    event.preventDefault();

    const item = {
      {
        "id": 2,
        "productName": "Deluxe Golden Ultra Chicken",
        "description": "Deluxe Golden Ultra Chicken is a cool pfp apart of the golden collection",
        "category": "pfp",
        "imageURL": "/DeluxeGoldenUltraChicken.png",
        "altText": "Deluxe Golden Ultra Chicken",
        "author": "AB",
        "price": 20
        },
    };

    axios
      .post("http://localhost:8000/items/", item)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });

    router.push("/account");
  }

  // jsx to return the form
  return (
    <main className={styles.main}>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <h1 className={styles.title}>List Product</h1>

        <div className={styles.form}>
          <div className={styles.inputContainer}>
            <label className={styles.lable} htmlFor="itemName">
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
            <label className={styles.lable} htmlFor="category">
              Category
            </label>
            <input
              className={styles.input}
              type="text"
              placeholder="Category"
              onChange={handleChange}
              name="category"
              value={formData.category}
            />
          </div>

          <div className={styles.inputContainer}>
            <label className={styles.lable} htmlFor="photo">
              Photo
            </label>
            <input
              className={styles.input}
              type="text"
              placeholder="photo"
              onChange={handleChange}
              name="photo"
              value={formData.photo}
            />
          </div>
          <div className={styles.inputContainer}>
            <label className={styles.lable} htmlFor="description">
              Description
            </label>
            <input
              className={styles.input}
              type="text"
              placeholder="Description"
              onChange={handleChange}
              name="description"
              value={formData.description}
            />
          </div>
          <div className={styles.inputContainer}>
            <label className={styles.lable} htmlFor="price">
              Price
            </label>
            <input
              className={styles.input}
              type="text"
              placeholder="Price"
              onChange={handleChange}
              name="price"
              value={formData.price}
            />
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.saveChanges}>Submit</button>
        </div>
      </form>
    </main>
  );
}
