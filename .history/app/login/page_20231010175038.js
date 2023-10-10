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

    try {
      const response = await axios.post("http://127.0.0.1:8000/login/", {
        email: email,
        password: password,
      });

      if (response.data.access_token) {
        console.log(response.data.access_token);
        localStorage.setItem("access_token", response.data.access_token);
        localStorage.setItem("email", email);

        console.log("User logged in successfully");
        router.push("/account");
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

        <button className={styles.loginBtn}>Login</button>
        <Link className={styles.signUp} href={"/signUp"}>
          or create an account
        </Link>
      </form>
    </main>
  );
}
