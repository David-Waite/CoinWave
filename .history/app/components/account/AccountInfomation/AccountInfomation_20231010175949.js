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

        console.log(response);

        if (response.data) {
          console.log("User data fetched successfully");
          setUser(response.data[0]);
          console.log(response.data[0].email); // Log the user data
        } else {
          console.log("Failed to fetch user data");
        }
      } catch (error) {
        console.error(`Error fetching user data: ${error}`);
      }
    }
    fetchUserData();
  }, []);

  console.log(user);

  return (
    <div>
      {user ? (
        <div>
          <h1>
            Welcome, {user.firstName} {user.lastName}
          </h1>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
