import axios from "axios";

export default async function fetchUserData() {
  const token = localStorage.getItem("access_token"); // Get the token from local storage

  try {
    const response = await axios.get("http://127.0.0.1:8000/users/me/", {
      headers: {
        Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
      },
    });

    if (response.data) {
      console.log("User data fetched successfully");
      return response[0];
    } else {
      console.log("Failed to fetch user data");
    }
  } catch (error) {
    console.error(`Error fetching user data: ${error}`);
  }
}
