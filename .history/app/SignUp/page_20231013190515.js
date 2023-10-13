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
    userAddress: ""
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const [signUpSuccessful, setSignUpSuccessful] = useState(null);

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
      .post("http://127.0.0.1:8000/signup/", {
        email: formData.email,
        password: formData.password,
        firstName: formData.firstName,
        lastName: formData.lastName,
      })
      .then(function (response) {
        setFormData({
          email: "",
          password: "",
          firstName: "",
          lastName: "",
        });
        setSignUpSuccessful(true);
      })
      .catch(function (error) {
        setSignUpSuccessful(false);
      });
  }

  // function to be triggered when sign up button is pressed
  function handleSubmit(event) {
    event.preventDefault();
    signup();
  }

  // jsx to be returned
  return (
    <main className={styles.main}>
      {setSignUpSuccessful === false && <div>Error something went wrong</div>}
      <form onSubmit={handleSubmit}>
        <h1 className={styles.title}>
          Sign Up
          {signUpSuccessful && (
            <div className={styles.signUpSuccessful}>
              You have been successfully signed up
            </div>
          )}
          {signUpSuccessful === false && (
            <div className={styles.signUpUnSuccessful}>
              Error something went wrong
            </div>
          )}
        </h1>
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
