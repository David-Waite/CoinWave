"use client";

// login page
import styles from "./login.module.css";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import { SessionTokenContext } from "@/context/sessionToken";

export default function Login() {
  const { sessionToken, updateToken } = useContext(SessionTokenContext);

  // form data saved in form
  const [token, setToken] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const router = useRouter();

  // updates form state baced on input changes
  function handleChange(event) {
    const { type, name, value, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  //function to be returned when login button is pressed
  async function login() {
    const password = formData.password;
    const email = formData.email;

    localStorage.setItem("test", "yeet");
    localStorage.setItem("username", "Anisha");
    console.log("here" + localStorage.getItem("username"));

    try {
      const response = await axios.post("/http://127.0.0.1:8000/login/", {
        email: email,
        password: password,
      });

      if (response.data.access_token) {
        localStorage.setItem("token", response.data.access_token);
        console.log("User logged in successfully");
      } else {
        console.log("Invalid login credentials");
      }
    } catch (error) {
      console.error(`Error logging in: ${error}`);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    login();
  }

  //jsx to be returned
  return (
    <main className={styles.main}>
      <form onSubmit={handleSubmit}>
        <h1 className={styles.title}>Login</h1>
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

        <div className={styles.rememberMeContainer}>
          <input
            className={styles.rememberMeCheckbox}
            type="checkbox"
            id="rememberMe"
            checked={formData.rememberMe}
            onChange={handleChange}
            name="rememberMe"
          />
          <label className={styles.rememberMeText} htmlFor="rememberMe">
            remember me
          </label>
        </div>

        <button className={styles.loginBtn}>Login</button>
        <Link className={styles.signUp} href={"/signUp"}>
          or create an account
        </Link>
      </form>

      <button onClick={""}>click me</button>
    </main>
  );
}
