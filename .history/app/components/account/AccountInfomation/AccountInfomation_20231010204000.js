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

        if (response.data) {
          setUser(response.data[0]);
        }
      } catch (error) {
        console.error(`Error fetching user data: ${error}`);
      }
    }
    fetchUserData();
  }, []);

  console.log(user);

  // form for the account information can be updated

  // function for handling the change on the form

  //function to be triggered when the update button is clicked

  return (
    <div>
      {user ? (
        <main className={styles.main}>
          <form>
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
                    name="firstName"
                    value={user.firstName}
                  />
                </div>
                <div className={styles.inputContainer}>
                  <label className={styles.lastNameLable} htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    disabled
                    className={styles.firstName}
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={user.lastName}
                  />
                </div>
              </div>

              <div className={styles.inputContainer}>
                <label className={styles.emailLable} htmlFor="email">
                  Email
                </label>
                <input
                  disabled
                  className={styles.email}
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={user.email}
                />
              </div>
            </div>
            <div className={styles.buttonContainer}></div>
            <button className={styles.logout}>Logout</button>
          </form>
        </main>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
