"use client";

//account information for account page
import styles from "./accountInformation.module.css";
import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { SessionTokenContext } from "@/context/sessionToken";
export default function AccountInformation() {
  const { sessionToken, updateToken } = useContext(SessionTokenContext);

  function whoami() {
    axios
      .get("http://127.0.0.1:8000/whoami/", {
        headers: { Authorization: `Bearer ${sessionToken}` },
      })
      .then((response) =>
        alert(
          `You are logged in as ${response.data.username} token: ${sessionToken}`
        )
      )
      .catch((error) => alert("You are not logged in"));
  }

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/users`)
      .then((res) => {
        console.log(res.data);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

  // form for the account information can be updated
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "Johndoe@gmail.com",
  });

  const router = useRouter();

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
  function handleSubmit(event) {
    event.preventDefault();

    router.push("/account");
  }

  return (
    <main className={styles.main}>
      <button onClick={whoami}>clikc me </button>
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
        <div className={styles.buttonContainer}>
          <button className={styles.discardChanges}>Discard Changes</button>
          <button className={styles.saveChanges}>Save Changes</button>
        </div>
        <button>Log out</button>
      </form>
    </main>
  );
}
