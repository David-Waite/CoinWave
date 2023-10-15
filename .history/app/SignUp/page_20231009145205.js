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
    email: "",
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

  function signup(username, password) {
    axios
      .post("/signup", {
        username: username,
        password: password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  function register() {
    const username = formData.email;
    const password = formData.password;
    axios
      .post("http://127.0.0.1:8000/register/", { username, password })
      .then((response) => console.log(response.data.message))
      .catch((error) => console.log(error.response.data.detail));
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
        <input
          className={styles.password}
          type="email"
          placeholder="Email"
          onChange={handleChange}
          name="firstName"
          value={formData.email}
        />

        <button className={styles.loginBtn}>Create Account</button>
        <Link className={styles.login} href={"/login"}>
          already got an account? Log in
        </Link>
      </form>
    </main>
  );
}