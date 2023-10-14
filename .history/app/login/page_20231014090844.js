"use client";

// login page
import styles from "./login.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";

export default function Login() {
  const [loginInResponse, setLoginResponse] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

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
          router.push("/account");
        }
      } catch (error) {
        console.error(`Error fetching user data: ${error}`);
      }
    }
    fetchUserData();
  }, []);

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
        localStorage.setItem("access_token", response.data.access_token);
        localStorage.setItem("email", email);

        console.log("User logged in successfully");
        router.push("/account");
      } else {
        setLoginResponse("Invalid login credentials");
      }
    } catch (error) {
      console.error(`Error logging in: ${error}`);
      setLoginResponse(`Account not registered`);
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
        <h1 className={styles.title}>
          Login
          {loginInResponse === "Invalid login credentials" && (
            <div className={styles.loginInResponse}>{loginInResponse}</div>
          )}
          {loginInResponse === "Account not registered" && (
            <div className={styles.loginInResponse}>{loginInResponse}</div>
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

        <button className={styles.loginBtn}>Login</button>
        <Link className={styles.signUp} href={"/signUp"}>
          or create an account
        </Link>
      </form>
    </main>
  );
}
