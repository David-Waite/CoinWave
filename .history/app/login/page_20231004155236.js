"use client";

// login page
import styles from "./login.module.css";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import { SessionTokenContext } from "@/context/sessionToken";

export default function Login() {
  const { sessionToken, setSessionToken } = useContext(SessionTokenContext);

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
  function login() {
    const password = formData.password;
    const username = formData.email;
    axios
      .post("http://127.0.0.1:8000/login/", { username, password })
      .then((response) => {
        setToken(response.data.token);
        alert("User logged in successfully");
      })
      .catch((error) => alert(error.response.data.detail));
  }

  function whoami() {
    axios
      .get("http://127.0.0.1:8000/whoami/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) =>
        alert(
          `You are logged in as ${response.data.username} token: ${sessionToken}`
        )
      )
      .catch((error) => alert("You are not logged in"));
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

      <button onClick={whoami}>click me</button>
    </main>
  );
}
