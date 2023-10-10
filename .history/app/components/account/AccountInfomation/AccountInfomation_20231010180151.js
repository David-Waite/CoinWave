"use client";

//account information for account page
import styles from "./accountInformation.module.css";
import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import fetchUserData from "@/app/utils/fetchUserData";

export default function AccountInformation() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUserData() {
      const token = localStorage.getItem("access_token"); // Get the token from local storage

      try {
        const response = await axios.get("http://127.0.0.1:8000/users/me/", {
          headers: {
            Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
          },
        });

        console.log(response);

        if (response.data) {
          console.log("User data fetched successfully");
          setUser(response.data[0]);
          console.log(response.data[0].email); // Log the user data
        } else {
          console.log("Failed to fetch user data");
        }
      } catch (error) {
        console.error(`Error fetching user data: ${error}`);
      }
    }
    fetchUserData();
  }, []);

  console.log(user);

  // form for the account information can be updated
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "s",
  });

  // function for handling the change on the form

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  //function to be triggered when the update button is clicked

  return (
    <div>
      {user ? (
        <main className={styles.main}>
          <form onSubmit={handleSubmit}>
            <h1 className={styles.title}>DashBoard</h1>
            <p className={styles.welcomeText}>Welcome back {"John Doe"}!</p>

            <div className={styles.form}>
              <div className={styles.nameContainer}>
                <div className={styles.inputContainer}>
                  <label className={styles.firstNameLable} htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    disabled
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
            <div className={styles.buttonContainer}></div>
            <button>Logout</button>
          </form>
        </main>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
