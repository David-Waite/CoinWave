"use client";
// sign up page
import styles from "./signUp.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";

export default function SignUp() {
  // form data saved in state
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const router = useRouter();

  // function updating state whenever the value of an input is changed
  function handleChange(event) {
    const { type, name, value, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function signup() {
    axios
      .post("http://127.0.0.1:8000/signup", {
        email: formData.email,
        password: formData.password,
        firstName: formData.firstName,
        lastName: formData.lastName,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // function to be triggered when sign up button is pressed
  function handleSubmit(event) {
    event.preventDefault();
    register();
  }

  // jsx to be returned
  return (
    <main className={styles.main}>
      <form onSubmit={handleSubmit}>
        <h1 className={styles.title}>Sign Up</h1>
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
        <input
          className={styles.password}
          type="firstName"
          placeholder="First name"
          onChange={handleChange}
          name="firstName"
          value={formData.firstName}
        />
        <input
          className={styles.password}
          type="lastName"
          placeholder="Last name"
          onChange={handleChange}
          name="lastName"
          value={formData.lastName}
        />

        <button className={styles.loginBtn}>Create Account</button>
        <Link className={styles.login} href={"/login"}>
          already got an account? Log in
        </Link>
      </form>
    </main>
  );
}
