"use client";

import React, { useState, useEffect } from "react";

function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch("http://127.0.0.1:8000/users/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });

      const data = await response.json();

      if (data.email) {
        setUser(data);
      } else {
        console.error(data.error);
      }
    };

    fetchUserData();
  }, []);

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

export default UserProfile;

// //account information for account page
// import styles from "./accountInformation.module.css";
// import { useState, useEffect, useContext } from "react";
// import { useRouter } from "next/navigation";
// import axios from "axios";
// import { SessionTokenContext } from "@/context/sessionToken";
// export default function AccountInformation() {

//   // form for the account information can be updated
//   const [formData, setFormData] = useState({
//     firstName: "John",
//     lastName: "Doe",
//     email: "Johndoe@gmail.com",
//   });

//   const router = useRouter();

//   // function for handling the change on the form

//   function handleChange(event) {
//     const { name, value } = event.target;
//     setFormData((prevFormData) => {
//       return {
//         ...prevFormData,
//         [name]: value,
//       };
//     });
//   }

//   //function to be triggered when the update button is clicked
//   function handleSubmit(event) {
//     event.preventDefault();

//     router.push("/account");
//   }

//   return (
//     <main className={styles.main}>
//       <form onSubmit={handleSubmit}>
//         <h1 className={styles.title}>DashBoard</h1>
//         <p className={styles.welcomeText}>Welcome back {"John Doe"}!</p>

//         <div className={styles.form}>
//           <div className={styles.nameContainer}>
//             <div className={styles.inputContainer}>
//               <label className={styles.firstNameLable} htmlFor="firstName">
//                 First Name
//               </label>
//               <input
//                 className={styles.firstName}
//                 type="text"
//                 placeholder="First Name"
//                 onChange={handleChange}
//                 name="firstName"
//                 value={formData.firstName}
//               />
//             </div>
//             <div className={styles.inputContainer}>
//               <label className={styles.lastNameLable} htmlFor="lastName">
//                 Last Name
//               </label>
//               <input
//                 className={styles.firstName}
//                 type="text"
//                 placeholder="Last Name"
//                 onChange={handleChange}
//                 name="lastName"
//                 value={formData.lastName}
//               />
//             </div>
//           </div>

//           <div className={styles.inputContainer}>
//             <label className={styles.emailLable} htmlFor="email">
//               Email
//             </label>
//             <input
//               className={styles.email}
//               type="email"
//               placeholder="Email"
//               onChange={handleChange}
//               name="email"
//               value={formData.email}
//             />
//           </div>
//         </div>
//         <div className={styles.buttonContainer}>
//           <button className={styles.discardChanges}>Discard Changes</button>
//           <button className={styles.saveChanges}>Save Changes</button>
//         </div>
//         <button>Logout</button>
//       </form>
//     </main>
//   );
// }
