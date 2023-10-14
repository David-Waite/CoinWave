"use client";

//account information for account page
import styles from "./accountInformation.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function AccountInformation() {
  const [user, setUser] = useState(null);

  const router = useRouter();

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
        router.push("/");
      }
    }
    fetchUserData();
  }, []);

  async function logout(event) {
    const token = localStorage.getItem("access_token"); // Get the token from local storage
    event.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/logout/", null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Logout successful:", response.data);
      localStorage.setItem("access_token", "");
      router.push("/");
    } catch (error) {
      console.error("Logout failed:", error.response.data);
    }
  }
  return (
    <div>
      {user ? (
        <main className={styles.main}>
          <form onSubmit={logout}>
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
